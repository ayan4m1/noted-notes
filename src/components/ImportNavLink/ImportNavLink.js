import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import { Fragment, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ImportNavLink({ dataImport }) {
  const importRef = useRef();

  const handleImportClick = useCallback(() => {
    if (importRef.current) {
      importRef.current.click();
    }
  }, [importRef]);
  const handleImportChange = useCallback(
    (event) => {
      const {
        target: {
          files: [file]
        }
      } = event;
      const reader = new FileReader();

      reader.onloadend = (loaded) => {
        const {
          target: { result }
        } = loaded;
        const parsed = JSON.parse(result);

        if (parsed) {
          dataImport(parsed);
        }
      };
      reader.readAsText(file);
    },
    [dataImport]
  );

  return (
    <Fragment>
      <input
        type="file"
        ref={importRef}
        onChange={handleImportChange}
        className="d-none"
      />
      <Nav.Link onClick={handleImportClick}>
        <FontAwesomeIcon icon="file-download" fixedWidth /> Import...
      </Nav.Link>
    </Fragment>
  );
}

ImportNavLink.propTypes = {
  dataImport: PropTypes.func.isRequired
};

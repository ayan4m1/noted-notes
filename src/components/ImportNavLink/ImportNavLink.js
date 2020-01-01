import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ImportNavLink extends Component {
  static propTypes = {
    dataImport: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.importRef = React.createRef();
    this.handleImportClick = this.handleImportClick.bind(this);
    this.handleImportChange = this.handleImportChange.bind(this);
  }

  handleImportClick() {
    if (this.importRef.current) {
      this.importRef.current.click();
    }
  }

  handleImportChange(event) {
    const { dataImport } = this.props;
    const {
      target: {
        files: [file]
      }
    } = event;
    const reader = new FileReader();

    reader.onloadend = loaded => {
      const {
        target: { result }
      } = loaded;
      const parsed = JSON.parse(result);

      if (parsed) {
        dataImport(parsed);
      }
    };
    reader.readAsText(file);
  }

  render() {
    return (
      <Fragment>
        <input
          type="file"
          ref={this.importRef}
          onChange={this.handleImportChange}
          className="d-none"
        />
        <Nav.Link onClick={this.handleImportClick}>
          <FontAwesomeIcon icon="file-download" fixedWidth /> Import...
        </Nav.Link>
      </Fragment>
    );
  }
}

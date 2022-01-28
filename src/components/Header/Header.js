import { useDispatch } from 'react-redux';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImportNavLink from 'components/ImportNavLink/ImportNavLink';
import { actions as applicationActions } from 'reducers/application';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand className="mx-4">Noted Notes</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link onClick={() => dispatch(applicationActions.dataLoad())}>
            <FontAwesomeIcon icon="spinner" fixedWidth /> Load
          </Nav.Link>
          <Nav.Link onClick={() => dispatch(applicationActions.dataSave())}>
            <FontAwesomeIcon icon="save" fixedWidth /> Save
          </Nav.Link>
          <ImportNavLink
            dataImport={(data) => dispatch(applicationActions.dataImport(data))}
          />
          <Nav.Link onClick={() => dispatch(applicationActions.dataExport())}>
            <FontAwesomeIcon icon="file-download" fixedWidth /> Export
          </Nav.Link>
          <Nav.Link onClick={() => dispatch(applicationActions.dataClear())}>
            <FontAwesomeIcon icon="trash" fixedWidth /> Clear
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

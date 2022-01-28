import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ImportNavLink from 'components/ImportNavLink/ImportNavLink';
import { actions as applicationActions } from 'reducers/application';

export class Header extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      dataClear: PropTypes.func.isRequired,
      dataExport: PropTypes.func.isRequired,
      dataImport: PropTypes.func.isRequired,
      dataLoad: PropTypes.func.isRequired,
      dataSave: PropTypes.func.isRequired
    }).isRequired
  };

  render() {
    const { actions } = this.props;

    return (
      <Navbar>
        <Navbar.Brand>Noted Notes</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={actions.dataLoad}>
              <FontAwesomeIcon icon="spinner" fixedWidth /> Load
            </Nav.Link>
            <Nav.Link onClick={actions.dataSave}>
              <FontAwesomeIcon icon="save" fixedWidth /> Save
            </Nav.Link>
            <ImportNavLink dataImport={actions.dataImport} />
            <Nav.Link onClick={actions.dataExport}>
              <FontAwesomeIcon icon="file-download" fixedWidth /> Export
            </Nav.Link>
            <Nav.Link onClick={actions.dataClear}>
              <FontAwesomeIcon icon="trash" fixedWidth /> Clear
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(applicationActions, dispatch)
});

export default connect(null, mapDispatchToProps)(Header);

import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class DataManager extends Component {
  constructor(props) {
    super(props);

    this.onLoadClick = this.onLoadClick.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
  }

  onLoadClick() {}

  onSaveClick() {}

  render() {
    return (
      <Navbar>
        <Navbar.Brand>Noted Notes</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link onClick={this.onLoadClick}>
              <FontAwesomeIcon icon="spinner" /> Load
            </Nav.Link>
            <Nav.Link onClick={this.onSaveClick}>
              <FontAwesomeIcon icon="save" /> Save
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

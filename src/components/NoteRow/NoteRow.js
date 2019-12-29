import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import React, { Component } from 'react';

export default class NoteRow extends Component {
  static propTypes = {
    flavor: PropTypes.string,
    index: PropTypes.number,
    notes: PropTypes.string
  };

  render() {
    const { flavor, index, notes } = this.props;

    return (
      <tr>
        <td>
          <Form.Control
            type="text"
            value={flavor}
            onChange={this.onChangeFlavor}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            value={notes}
            onChange={this.onChangeNotes}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            value={index}
            onChange={this.onChangeIndex}
          />
        </td>
      </tr>
    );
  }
}

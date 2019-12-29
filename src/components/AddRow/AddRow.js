import nanoid from 'nanoid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AddRow.scss';

export default class AddRow extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.state = {
      flavor: '',
      notes: ''
    };
  }

  handleAddClick() {
    const { flavor, notes } = this.state;
    const { onAdd } = this.props;

    onAdd({
      flavor,
      id: nanoid(),
      notes
    });

    this.setState({
      flavor: '',
      notes: ''
    });
  }

  handleFlavorChange(event) {
    const {
      target: { value: flavor }
    } = event;

    this.setState({ flavor });
  }

  handleNotesChange(event) {
    const {
      target: { value: notes }
    } = event;

    this.setState({ notes });
  }

  render() {
    const { flavor, notes } = this.state;

    return (
      <tr>
        <td></td>
        <td className="nn-add-row-actions">
          <Button variant="success" onClick={this.handleAddClick}>
            <FontAwesomeIcon icon="plus-circle" />
          </Button>
        </td>
        <td>
          <Form.Control
            type="text"
            value={flavor}
            onChange={this.handleFlavorChange}
          />
        </td>
        <td>
          <Form.Control
            type="text"
            value={notes}
            onChange={this.handleNotesChange}
          />
        </td>
      </tr>
    );
  }
}

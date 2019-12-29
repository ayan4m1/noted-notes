import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SortableHandle as sortableHandle } from 'react-sortable-hoc';

import './NoteRow.scss';

const SortableHandle = sortableHandle(() => (
  <FontAwesomeIcon icon="grip-vertical" className="nn-note-row-handle" />
));

export default class NoteRow extends Component {
  static propTypes = {
    flavor: PropTypes.string,
    id: PropTypes.string.isRequired,
    notes: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  handleFlavorChange(event) {
    const { id, onChange } = this.props;
    const {
      target: { value }
    } = event;

    onChange(id, 'flavor', value);
  }

  handleNotesChange(event) {
    const { id, onChange } = this.props;
    const {
      target: { value }
    } = event;

    onChange(id, 'notes', value);
  }

  render() {
    const { id, flavor, notes, onRemove } = this.props;

    return (
      <tr>
        <td>
          <SortableHandle />
        </td>
        <td className="nn-note-row-actions">
          <Button size="sm" variant="danger" onClick={() => onRemove(id)}>
            <FontAwesomeIcon icon="trash" />
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

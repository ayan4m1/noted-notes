import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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
    onRemove: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    ordinal: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleOrdinalChange = this.handleOrdinalChange.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
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

  handleOrdinalChange(event) {
    const { id, onReorder } = this.props;
    const {
      target: { value }
    } = event;

    if (!Number.parseInt(value, 10)) {
      return event.preventDefault();
    }

    onReorder(id, value);
  }

  handleOrdinalFocus(event) {
    event.target.select();
  }

  handleRemoveClick() {
    const { id, onRemove } = this.props;

    onRemove(id);
  }

  render() {
    const { flavor, notes, ordinal } = this.props;

    return (
      <tr>
        <td>
          <Row noGutters>
            <Col>
              <SortableHandle />
            </Col>
            <Col>
              <Form.Control
                className="nn-note-row-ordinal"
                onFocus={this.handleOrdinalFocus}
                onChange={this.handleOrdinalChange}
                plaintext
                type="text"
                value={ordinal}
              />
            </Col>
          </Row>
        </td>
        <td className="nn-note-row-actions">
          <Button size="sm" variant="danger" onClick={this.handleRemoveClick}>
            <FontAwesomeIcon icon="trash" />
          </Button>
        </td>
        <td>
          <Form.Control
            onChange={this.handleFlavorChange}
            type="text"
            value={flavor}
          />
        </td>
        <td>
          <Form.Control
            onChange={this.handleNotesChange}
            type="text"
            value={notes}
          />
        </td>
      </tr>
    );
  }
}

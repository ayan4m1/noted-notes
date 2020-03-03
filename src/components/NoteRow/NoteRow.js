import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SortableHandle as sortableHandle } from 'react-sortable-hoc';

import './NoteRow.scss';

const SortableHandle = sortableHandle(() => (
  <FontAwesomeIcon icon="grip-vertical" className="nn-note-row-handle" />
));

const vendorUrls = [
  'https://riversupplyco.com/pages/search-results-page?q=',
  'https://www.bullcityflavors.com/search.php?section=product&search_query=',
  'https://flavorjungle.com/pages/search-results-page?q=',
  'https://wizardlabs.us/index.php?route=product/search&search=',
  'https://www.diyvaporsupply.com/search.php?section=product&search_query=',
  'https://www.vaperstek.org/search.php?section=content&search_query='
];

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

  handleSearchClick(flavor) {
    if (!flavor) {
      return;
    }

    for (const baseUrl of vendorUrls) {
      window.open(`${baseUrl}${encodeURIComponent(flavor)}`);
    }
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
          <Button
            variant="danger"
            onClick={this.handleRemoveClick}
            title="Remove"
          >
            <FontAwesomeIcon icon="trash" size="xs" />
          </Button>{' '}
          <Button
            variant="primary"
            onClick={() => this.handleSearchClick(flavor)}
            title="Search"
          >
            <FontAwesomeIcon icon="search" size="xs" />
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
            as="textarea"
            onChange={this.handleNotesChange}
            rows={1}
            value={notes}
          />
        </td>
      </tr>
    );
  }
}

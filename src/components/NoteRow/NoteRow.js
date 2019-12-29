import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NoteRow extends Component {
  static propTypes = {
    flavor: PropTypes.string,
    index: PropTypes.number,
    notes: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
  }

  handleFlavorChange() {}

  handleIndexChange() {}

  handleNotesChange() {}

  render() {
    const { flavor, index, notes } = this.props;

    return (
      <tr>
        <td>
          <Row>
            <Col>
              <Button>
                <FontAwesomeIcon icon="angle-double-up" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>
                <FontAwesomeIcon icon="angle-up" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>
                <FontAwesomeIcon icon="angle-down" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button>
                <FontAwesomeIcon icon="angle-double-down" />
              </Button>
            </Col>
          </Row>
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
        <td>
          <Form.Control
            type="text"
            value={index}
            onChange={this.handleIndexChange}
          />
        </td>
      </tr>
    );
  }
}

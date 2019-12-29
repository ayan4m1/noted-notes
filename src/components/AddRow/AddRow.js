import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AddRow extends Component {
  static propTypes = {
    rowCount: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleFlavorChange = this.handleFlavorChange.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.state = {
      flavor: '',
      index: 0,
      notes: ''
    };
  }

  handleAddClick() {
    const { flavor, index, notes } = this.state;
    const { onAdd } = this.props;

    onAdd({
      flavor,
      index,
      notes
    });

    this.setState({
      flavor: '',
      index: 0,
      notes: ''
    });
  }

  handleFlavorChange(event) {
    const {
      target: { value: flavor }
    } = event;

    this.setState({ flavor });
  }

  handleIndexChange(event) {
    const {
      target: { value: index }
    } = event;

    this.setState({ index });
  }

  handleNotesChange(event) {
    const {
      target: { value: notes }
    } = event;

    this.setState({ notes });
  }

  render() {
    const { flavor, index, notes } = this.state;

    return (
      <tr>
        <td>
          <Button onClick={this.handleAddClick}>
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

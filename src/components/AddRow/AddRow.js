import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import React, { Component } from 'react';

export default class AddRow extends Component {
  static propTypes = {
    rowCount: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
    this.onFlavorChange = this.onFlavorChange.bind(this);
    this.onIndexChange = this.onIndexChange.bind(this);
    this.onNotesChange = this.onNotesChange.bind(this);
    this.state = {
      flavor: '',
      index: 0,
      notes: ''
    };
  }

  onAddClick() {
    const { flavor, index, notes } = this.state;
    const { onAdd } = this.props;

    onAdd({
      flavor,
      index,
      notes
    });
  }

  onFlavorChange(event) {
    const {
      target: { value: flavor }
    } = event;

    this.setState({ flavor });
  }

  onIndexChange() {
    const {
      target: { value: index }
    } = event;

    this.setState({ index });
  }

  onNotesChange() {
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

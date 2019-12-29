import { Table } from 'react-bootstrap';
import React, { Component } from 'react';

import './NoteTable.scss';
import AddRow from 'components/AddRow/AddRow';
import NoteRow from 'components/NoteRow/NoteRow';

export default class NoteTable extends Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.state = {
      rows: []
    };
  }

  onAddRow(data) {
    this.setState({
      rows: [...this.state.rows, data]
    });
  }

  onChangeRow(index, field, value) {
    const row = this.state.rows[index];

    row[field] = value;
  }

  render() {
    const { rows } = this.state;

    return (
      <Table className="nn-note-table">
        <thead>
          <tr>
            <th>Action</th>
            <th>Flavor name</th>
            <th>Notes</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <NoteRow key={row.key} {...row} />
          ))}
          <AddRow onAdd={this.onAddRow} rowCount={rows.length} />
        </tbody>
      </Table>
    );
  }
}

import arrayMove from 'array-move';
import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement
} from 'react-sortable-hoc';

import './NoteTable.scss';
import AddRow from 'components/AddRow/AddRow';
import NoteRow from 'components/NoteRow/NoteRow';

const SortableTableRow = sortableElement(props => <NoteRow {...props} />);
const SortableTableBody = sortableContainer(({ rows, onChange, onRemove }) => (
  <tbody>
    {rows.map((row, index) => (
      <SortableTableRow
        {...row}
        index={index}
        key={row.id}
        onChange={onChange}
        onRemove={onRemove}
      />
    ))}
  </tbody>
));

export default class NoteTable extends Component {
  constructor(props) {
    super(props);

    this.onAddRow = this.onAddRow.bind(this);
    this.onChangeRow = this.onChangeRow.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.onRemoveRow = this.onRemoveRow.bind(this);
    this.state = {
      rows: []
    };
  }

  getRowById(id) {
    return this.state.rows.find(row => row.id === id);
  }

  onAddRow(data) {
    this.setState({
      rows: [...this.state.rows, data]
    });
  }

  onChangeRow(id, field, value) {
    this.setState(({ rows }) => ({
      rows: rows.map(row => {
        if (row.id !== id) {
          return row;
        }

        return {
          ...row,
          [field]: value
        };
      })
    }));
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ rows }) => ({
      rows: arrayMove(rows, oldIndex, newIndex)
    }));
  }

  onRemoveRow(id) {
    this.setState(({ rows }) => ({
      rows: rows.filter(row => row.id !== id)
    }));
  }

  render() {
    const { rows } = this.state;

    return (
      <Table className="nn-note-table">
        <thead>
          <tr>
            <th>Order</th>
            <th>Action</th>
            <th>Flavor name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <SortableTableBody
          hideSortableGhost={true}
          onChange={this.onChangeRow}
          onSortEnd={this.onSortEnd}
          onRemove={this.onRemoveRow}
          rows={rows}
          useDragHandle={true}
        />
        <tfoot>
          <AddRow onAdd={this.onAddRow} rowCount={rows.length} />
        </tfoot>
      </Table>
    );
  }
}

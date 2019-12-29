import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement
} from 'react-sortable-hoc';

import './NoteTable.scss';
import AddRow from 'components/AddRow/AddRow';
import NoteRow from 'components/NoteRow/NoteRow';
import { actions as applicationActions } from 'reducers/application';
import { getData } from 'selectors/application';

const SortableTableRow = sortableElement(props => <NoteRow {...props} />);
const SortableTableBody = sortableContainer(
  ({ rows, onChange, onRemove, onReorder }) => (
    <tbody>
      {rows.map((row, index) => (
        <SortableTableRow
          {...row}
          index={index}
          key={row.id}
          onChange={onChange}
          onRemove={onRemove}
          onReorder={onReorder}
          ordinal={index + 1}
        />
      ))}
    </tbody>
  )
);

export class NoteTable extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      rowAdd: PropTypes.func.isRequired,
      rowRemove: PropTypes.func.isRequired,
      rowReorder: PropTypes.func.isRequired,
      rowUpdate: PropTypes.func.isRequired
    }).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  static defaultProps = {
    data: []
  };

  constructor(props) {
    super(props);

    this.handleReorder = this.handleReorder.bind(this);
  }

  handleReorder(id, newIndex) {
    const { actions, data } = this.props;
    const oldIndex = data.findIndex(row => row.id === id);

    actions.rowReorder({ oldIndex, newIndex });
  }

  render() {
    const { actions, data } = this.props;

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
          onChange={actions.rowUpdate}
          onRemove={actions.rowRemove}
          onReorder={this.handleReorder}
          onSortEnd={actions.rowReorder}
          rows={data}
          useDragHandle={true}
        />
        <tfoot>
          <AddRow onAdd={actions.rowAdd} />
        </tfoot>
      </Table>
    );
  }
}

export const mapStateToProps = state => ({
  data: getData(state)
});

export const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(applicationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteTable);

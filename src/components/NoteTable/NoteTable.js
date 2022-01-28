import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useCallback } from 'react';
import {
  SortableContainer as sortableContainer,
  SortableElement as sortableElement
} from 'react-sortable-hoc';

import './NoteTable.scss';
import AddRow from 'components/AddRow/AddRow';
import NoteRow from 'components/NoteRow/NoteRow';
import { actions as applicationActions } from 'reducers/application';
import { getData } from 'selectors/application';

const SortableTableRow = sortableElement((props) => <NoteRow {...props} />);
const SortableTableBody = sortableContainer(({ rows }) => (
  <tbody>
    {rows.map((row, index) => (
      <SortableTableRow
        {...row}
        index={index}
        key={row.id}
        ordinal={index + 1}
      />
    ))}
  </tbody>
));

export default function NoteTable() {
  const dispatch = useDispatch();
  const data = useSelector(getData);
  const handleReorder = useCallback(
    ({ oldIndex, newIndex }) =>
      dispatch(applicationActions.rowReorder({ oldIndex, newIndex })),
    [dispatch]
  );

  return (
    <Table className="nn-note-table">
      <thead>
        <tr>
          <th className="text-end">Order</th>
          <th className="text-center">Action</th>
          <th>Flavor name</th>
          <th>Notes</th>
        </tr>
      </thead>
      <SortableTableBody
        hideSortableGhost={true}
        onSortEnd={handleReorder}
        rows={data}
        useDragHandle={true}
      />
      <tfoot>
        <AddRow />
      </tfoot>
    </Table>
  );
}

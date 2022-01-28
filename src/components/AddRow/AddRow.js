// eslint-disable-next-line import/no-unresolved
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';

import { actions as applicationActions } from 'reducers/application';

export default function AddRow() {
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddClick = useCallback(() => {
    dispatch(
      applicationActions.rowAdd({
        flavor,
        id: nanoid(),
        notes
      })
    );

    setFlavor('');
    setNotes('');
  }, [dispatch, flavor, notes, setFlavor, setNotes]);
  const handleFlavorChange = useCallback(
    ({ target: { value } }) => setFlavor(value),
    [setFlavor]
  );
  const handleNotesChange = useCallback(
    ({ target: { value } }) => setNotes(value),
    [setNotes]
  );

  return (
    <tr>
      <td></td>
      <td className="text-center">
        <Button variant="success" onClick={handleAddClick}>
          <FontAwesomeIcon icon="plus-circle" />
        </Button>
      </td>
      <td>
        <Form.Control
          type="text"
          value={flavor}
          onChange={handleFlavorChange}
        />
      </td>
      <td>
        <Form.Control
          as="textarea"
          value={notes}
          onChange={handleNotesChange}
          rows={1}
        />
      </td>
    </tr>
  );
}

// eslint-disable-next-line import/no-unresolved
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddRow({ onAdd }) {
  const [flavor, setFlavor] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddClick = useCallback(() => {
    onAdd({
      flavor,
      id: nanoid(),
      notes
    });

    setFlavor('');
    setNotes('');
  }, [onAdd, setFlavor, setNotes]);
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

AddRow.propTypes = {
  onAdd: PropTypes.func.isRequired
};

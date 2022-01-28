import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SortableHandle as sortableHandle } from 'react-sortable-hoc';

import './NoteRow.scss';

import { actions as applicationActions } from 'reducers/application';

const SortableHandle = sortableHandle(() => (
  <FontAwesomeIcon icon="grip-vertical" className="nn-note-row-handle" />
));

const vendorUrls = [
  'https://www.bullcityflavors.com/search.php?section=product&search_query=',
  'https://flavorjungle.com/pages/search-results-page?q=',
  'https://www.diyvaporsupply.com/search.php?section=product&search_query=',
  'https://www.chefsflavours.co.uk/search?type=product,page,collection&q=',
  'https://nomnomz.co.uk/?product_cat=&post_type=product&s='
];

export default function NoteRow({ flavor, id, notes, ordinal }) {
  const dispatch = useDispatch();

  const handleFlavorChange = useCallback(
    ({ target: { value } }) =>
      dispatch(applicationActions.rowUpdate(id, 'flavor', value)),
    [dispatch, id]
  );
  const handleNotesChange = useCallback(
    ({ target: { value } }) =>
      dispatch(applicationActions.rowUpdate(id, 'notes', value)),
    [dispatch, id]
  );
  const handleOrdinalChange = useCallback(
    (event) => {
      const {
        target: { value }
      } = event;

      if (!parseInt(value, 10)) {
        return event.preventDefault();
      }

      dispatch(
        applicationActions.rowReorder({
          oldIndex: ordinal - 1,
          newIndex: parseInt(value, 10) - 1
        })
      );
    },
    [dispatch, ordinal]
  );
  const handleOrdinalFocus = useCallback((event) => event.target.select(), []);
  const handleSearchClick = useCallback(() => {
    if (!flavor) {
      return;
    }

    for (const baseUrl of vendorUrls) {
      window.open(`${baseUrl}${encodeURIComponent(flavor)}`);
    }
  }, [flavor]);
  const handleRemoveClick = useCallback(
    () => dispatch(applicationActions.rowRemove(id)),
    [dispatch, id]
  );

  return (
    <tr>
      <td>
        <Row className="g-0">
          <Col>
            <SortableHandle />
          </Col>
          <Col>
            <Form.Control
              className="nn-note-row-ordinal"
              onChange={handleOrdinalChange}
              onFocus={handleOrdinalFocus}
              plaintext
              type="text"
              value={ordinal}
            />
          </Col>
        </Row>
      </td>
      <td className="text-center">
        <Button onClick={handleRemoveClick} title="Remove" variant="danger">
          <FontAwesomeIcon icon="trash" size="xs" />
        </Button>{' '}
        <Button
          onClick={() => handleSearchClick(flavor)}
          title="Search"
          variant="primary"
        >
          <FontAwesomeIcon icon="search" size="xs" />
        </Button>
      </td>
      <td>
        <Form.Control
          onChange={handleFlavorChange}
          type="text"
          value={flavor}
        />
      </td>
      <td>
        <Form.Control
          as="textarea"
          onChange={handleNotesChange}
          rows={1}
          value={notes}
        />
      </td>
    </tr>
  );
}

NoteRow.propTypes = {
  flavor: PropTypes.string,
  id: PropTypes.string.isRequired,
  notes: PropTypes.string,
  ordinal: PropTypes.number.isRequired
};

import { useDispatch } from 'react-redux';
import { Fragment, useEffect } from 'react';

import Header from 'components/Header/Header';
import NoteTable from 'components/NoteTable/NoteTable';

import { actions as applicationActions } from 'reducers/application';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(applicationActions.appInit());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <NoteTable />
    </Fragment>
  );
}

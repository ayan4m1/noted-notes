import React, { Component, Fragment } from 'react';

import DataManager from 'components/DataManager/DataManager';
import NoteTable from 'components/NoteTable/NoteTable';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <DataManager />
        <NoteTable />
      </Fragment>
    );
  }
}

export default App;

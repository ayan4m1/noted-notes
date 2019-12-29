import { all, put, select, takeLatest } from 'redux-saga/effects';

import { actions, types } from 'reducers/application';
import { getData, getDataKey } from 'selectors/application';

const getStoredData = () => {
  const data = JSON.parse(localStorage.getItem(getDataKey()));

  if (!data || !Array.isArray(data)) {
    return;
  }

  return data;
};

function* loadDataWorker() {
  const data = getStoredData();
  const currentData = yield select(getData);

  if (
    !data ||
    (currentData &&
      currentData.length &&
      !confirm('Are you SURE you want to replace the current data?'))
  ) {
    return;
  }

  yield put(actions.dataClear());
  for (const row of data) {
    yield put(actions.rowAdd(row));
  }
}

function* saveDataWorker() {
  const data = yield select(getData);
  const storedData = getStoredData();

  if (
    !data ||
    (storedData &&
      !confirm('Are you SURE you want to overwrite currently saved data?'))
  ) {
    return;
  }

  const dataString = JSON.stringify(data);

  localStorage.setItem(getDataKey(), dataString);
}

export const workers = {
  loadDataWorker,
  saveDataWorker
};

function* loadDataWatcher() {
  yield takeLatest(types.DATA_LOAD, loadDataWorker);
}

function* saveDataWatcher() {
  yield takeLatest(types.DATA_SAVE, saveDataWorker);
}

export const watchers = {
  loadDataWatcher,
  saveDataWatcher
};

export default function* saga() {
  yield all(Object.values(watchers).map(watcher => watcher()));
}

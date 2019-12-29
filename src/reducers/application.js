import { buildActions } from 'utils';
import arrayMove from 'array-move';

export const types = buildActions('application', [
  'APP_INIT',
  'DATA_CLEAR',
  'DATA_LOAD',
  'DATA_SAVE',
  'ROW_ADD',
  'ROW_REMOVE',
  'ROW_REORDER',
  'ROW_UPDATE'
]);

const appInit = () => ({
  type: types.APP_INIT
});

const dataClear = () => ({
  type: types.DATA_CLEAR
});

const dataLoad = () => ({
  type: types.DATA_LOAD
});

const dataSave = () => ({
  type: types.DATA_SAVE
});

const rowAdd = row => ({
  type: types.ROW_ADD,
  row
});

const rowRemove = id => ({
  type: types.ROW_REMOVE,
  id
});

const rowReorder = ({ oldIndex, newIndex }) => ({
  type: types.ROW_REORDER,
  newIndex,
  oldIndex
});

const rowUpdate = (id, field, value) => ({
  type: types.ROW_UPDATE,
  id,
  field,
  value
});

export const actions = {
  appInit,
  dataClear,
  dataLoad,
  dataSave,
  rowAdd,
  rowRemove,
  rowReorder,
  rowUpdate
};

export const initialState = {
  data: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.DATA_CLEAR:
      return {
        ...state,
        data: []
      };
    case types.ROW_ADD:
      return {
        ...state,
        data: [...state.data, action.row]
      };
    case types.ROW_REMOVE:
      return {
        ...state,
        data: state.data.filter(row => row.id !== action.id)
      };
    case types.ROW_REORDER:
      return {
        ...state,
        data: arrayMove(state.data, action.oldIndex, action.newIndex)
      };
    case types.ROW_UPDATE:
      return {
        ...state,
        data: state.data.map(row => {
          if (row.id !== action.id) {
            return row;
          }

          return {
            ...row,
            [action.field]: action.value
          };
        })
      };
    default:
      return state;
  }
};

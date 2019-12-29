import { createSelector } from 'reselect';

export const getApplication = state => state.application;

export const getDataKey = () => 'appData';

export const getData = createSelector(
  getApplication,
  application => application.data
);

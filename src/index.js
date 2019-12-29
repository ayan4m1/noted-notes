import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGripVertical,
  faPlusCircle,
  faTrash,
  faSave,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
library.add(faGripVertical, faPlusCircle, faSave, faSpinner, faTrash);

import './index.scss';
import App from './components/App/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

export default App;

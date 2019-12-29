import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// todo: uncomment the lines below, substituting in the icons you need
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
// library.add(faFontAwesome);

import './index.scss';
import App from './components/App/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

export default App;

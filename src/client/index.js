import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './App';

ReactDOM.hydrate(
  <AppComponent />,
  document.querySelector('#app')
);

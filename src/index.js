import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootswatch/dist/materia/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="list-group"/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

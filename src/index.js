import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const apiKey = process.env.REACT_APP_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <App apikey={apiKey} />
  </React.StrictMode>,
  document.getElementById('root')
);

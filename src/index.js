import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function WithoutJSX(){
  return React.createElement('h1',{},'Without JSX')
}

function WithJSX(){
  return <h1>With JSX</h1>
}

ReactDOM.render(
  <React.StrictMode>
    <WithJSX/>
    <WithoutJSX/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

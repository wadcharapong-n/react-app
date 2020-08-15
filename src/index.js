import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Hello(props){
return <h1>Hello world {props.title}</h1>;
}

class HelloWorldComp extends React.Component{
  render(){
  return <h1>Hello world class {this.props.title}</h1>
  }
}

class HelloWorldInComp extends React.Component{
  render(){
  return <div>
    <Hello title="In comp"/>
    <HelloWorldComp title="In comp"/>
  </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Hello title="Hello Function"/>
    <HelloWorldComp title="xxx"/>
    <HelloWorldInComp title="xxx"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

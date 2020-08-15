import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class HelloWorldComp extends React.Component{
  render(){
  return <h1>Hello world class {this.props.title}</h1>
  }
}

class HelloWorldInComp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
  }
  onIncrement = () => {
    this.setState({count: this.state.count+1})
  }

  onDeincrement = () => {
    this.setState((prevState) => ({count: prevState.count -1}))
    this.setState((prevState) => ({count: prevState.count -1}))
  }

  render(){
    return <div>
      <HelloWorldComp title="In comp"/>
      <p><h1>{this.props.title} : {this.state.count}</h1></p>
      <button onClick={this.onIncrement}>plus</button>
      <button onClick={this.onDeincrement}>minus</button>
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldComp title="xxx"/>
    <HelloWorldInComp title="xxx"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

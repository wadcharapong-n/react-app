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
      tag: [],
      count: 1
    };
  }
  onIncrement = () => {
    this.setState((prevState) => ({count: prevState.count +1}))
  }

  onDeincrement = () => {
    this.setState((prevState) => ({count: prevState.count -1}))
  }

  render(){
    const numbers = [];
    for(let i = 1;i<=this.state.count; i++){
      numbers.push(<li>{i}</li>)
    }
    return <div>
      {this.state.count}
      <ul>
        {numbers}
      </ul>
    
      <button onClick={this.onIncrement}>plus</button>
      <button onClick={this.onDeincrement}>minus</button>
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldInComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

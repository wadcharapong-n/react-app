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

function Car(props){
  const isHonda = props.isHonda
  const isToyota = props.isToyota
  let car
  if (isHonda){
    car = 'Honda'
  }
  if (isToyota){
    car = 'Toyota'
  }
  return <div>
    <h1>This is band {car ? car : <span>xxxxx</span>}</h1>
  </div>
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
  }

  render(){
    if(this.state.count % 2 === 1){
      return <div><h1>mod 22222</h1>
          <button onClick={this.onIncrement}>plus</button>
          <button onClick={this.onDeincrement}>minus</button>
        </div>
    }
    return <div>
      <HelloWorldComp title="In comp"/>
      <h1>{this.props.title} : {this.state.count}</h1>
      <button onClick={this.onIncrement}>plus</button>
      <button onClick={this.onDeincrement}>minus</button>
    </div>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldComp title="xxx"/>
    <HelloWorldInComp title="xxx"/>
    <Car isHonda={true}/>
    <Car isToyota={true}/>
    <Car />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

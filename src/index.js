import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class HelloWorldComp extends React.Component{
  render(){
  return <h1>Hello world class {this.props.title}</h1>
  }
}

// class HelloWorldInComp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       tag: [],
//       count: 1
//     };
//   }
//   onIncrement = () => {
//     this.setState((prevState) => ({count: prevState.count +1}))
//   }

//   onDeincrement = () => {
//     this.setState((prevState) => ({count: prevState.count -1}))
//   }

//   render(){
//     const numbers = [];
//     for(let i = 1;i<=this.state.count; i++){
//       numbers.push(<li>{i}</li>)
//     }
//     return <div>
//       {this.state.count}
//       <ul>
//         {numbers}
//       </ul>
    
//       <button onClick={this.onIncrement}>plus</button>
//       <button onClick={this.onDeincrement}>minus</button>
//     </div>
//   }
// }

function Item(props){
  return (<li>{props.n}</li>)
}

function ItemList({items}){
  return (<ul>{items.map(n => <Item key={n} n={n}/>)}</ul>)
}
class ItemEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      count: 0,
    };
  }

  myChangeHandler = (event) => {
    if (event.key === 'Enter') {
      const value = event.target.value
      this.setState((prevState) => ({
        count: prevState.count +1 ,
        items: [...this.state.items , value]
      }))
      event.target.value = '';
    }
  }

  render(){
    return <div>
      <input type="text" onKeyUp={this.myChangeHandler}/>
      <ItemList items={this.state.items}></ItemList>
    </div>
  }
}

class Toggle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isToggleOn: false,
    }
    this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((p) => ({isToggleOn: !p.isToggleOn}))
  }

  render(){
    return (<div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On':'Off'}
      </button>
    </div>)
  }
}

class InputComp extends React.Component {

  constructor(prop){
    super(prop);
    this.state = {
      firstName : '',
      lastName : '',
    }
  }
  
  onChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})

  }

  onSubmit = (event) => {
    event.preventDefault();
    const {firstName , lastName} = this.state;
    const name = `${firstName} ${lastName}`.trim();
    // alert(`Your name is ${this.state.name}`)
    this.props.handleName(name);
  }

  render(){
    const {firstName , lastName} = this.state;
    const name = `${firstName} ${lastName}`.trim();
    const header = name ? <h1>Hello {name}</h1> : null
    return (
      <form onSubmit={this.onSubmit}>
        {/* {header} */}
        firstName :: <input name="firstName" onChange={this.onChange} value={this.state.firstName} />
        <br></br>
        lastName :: <input name="lastName" onChange={this.onChange} value={this.state.lastName} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

class App extends React.Component{
  
  state = {
    name : ''
  }

  handleName = (name) =>{
    this.setState({name});
  }

  render(){
    const {name} = this.state;
    const header = name ? <h1>Hello {name}</h1> : null
    return (
      <div>
        {header}
        <InputComp handleName={this.handleName}/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <ItemEvent /> */}
    {/* <Toggle /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

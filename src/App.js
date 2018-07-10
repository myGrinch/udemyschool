import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'
import './App.css';

class App extends Component {
  state = {
    username: 'Christina'
  }

  methodToManipulateTheState = (event) => {
      this.setState({
          username: event.target.value
      })
  }

  render() {
  const style = {
      width: '140px',
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      display: 'inline-block',
      borderRadius: '5px'
  }
    return (
      <div className="App">
        <UserInput
            style={style}
            name={this.state.username}
            changed={this.methodToManipulateTheState}
        />
        <UserOutput name='Alis'/>
        <UserOutput name={this.state.username} />
        <UserOutput name='Gloria'/>
      </div>
    );
  }
}

export default App;

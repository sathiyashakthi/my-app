import React, { Component } from 'react';
import {Header} from './components/header'
import logo from './logo.svg';
import './App.css';
import { CreateList } from './components/CreateList';
import { ListShow } from './components/ListShow';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <Header createcard={this.createcard}/>
        <div className='container'>

      <ListShow/>
        </div>
      </div>
    );
  }
}

export default App;

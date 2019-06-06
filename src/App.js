import React, { Component } from 'react';
import {Header} from './components/header'
import logo from './logo.svg';
import './App.css';
import  CreateList  from './components/CreateList';
import  ListShow  from './components/ListShow';
import List from './components/List';
import Card from './components/Card';


class App extends Component {

 
  render() {
    return (
      <provider>
      <div className="App">
        <Header/>

        <div className='container'>
          <List/>

        </div>
      </div>
      </provider>
    );
  }
}

export default App;

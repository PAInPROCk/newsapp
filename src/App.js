
import './App.css';
import { News } from './components/News'
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';

export default class App extends Component {
 c = 'John';
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pageSize={5}/>
      </div>
    )
  }
}

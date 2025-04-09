
import './App.css';
import { News } from './components/News'
import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import {
//   RouteConfig,
//   route,
//   index,
//   layout,
//   prefix,
// } from "@react-router/dev/routes";

export default class App extends Component {
  
 pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          
          <Routes>
              <Route path="/" element={<News pageSize={this.pageSize}  country="us" category="general"/>} />
              <Route path="/business" element={<News key="business" pageSize={this.pageSize}  country="us" category="business"/>} />
              <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize}  country="us" category="entertainment"/>} />
              <Route path="/health" element={<News key="health" pageSize={this.pageSize}  country="us" category="health"/>} />
              <Route path="/science" element={<News key="science" pageSize={this.pageSize}  country="us" category="science"/>} />
              <Route path="/sports" element={<News key="sports" pageSize={this.pageSize}  country="us" category="sports"/>} />
              <Route path="/technology" element={<News key="technology" pageSize={this.pageSize}  country="us" category="technology"/>} />

          </Routes>
        </Router>
      </div>
    )
  }
}


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
  
 c = 'John';
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          
          <Routes>
              <Route path="/" element={<News pageSize={5}  country="us" category="general"/>} />
              <Route path="/business" element={<News key="business" pageSize={5}  country="us" category="business"/>} />
              <Route path="/entertainment" element={<News key="entertainment" pageSize={5}  country="us" category="entertainment"/>} />
              <Route path="/health" element={<News key="health" pageSize={5}  country="us" category="health"/>} />
              <Route path="/science" element={<News key="science" pageSize={5}  country="us" category="science"/>} />
              <Route path="/sports" element={<News key="sports" pageSize={5}  country="us" category="sports"/>} />
              <Route path="/technology" element={<News key="technology" pageSize={5}  country="us" category="technology"/>} />

          </Routes>
        </Router>
      </div>
    )
  }
}

import LoadingBar from 'react-top-loading-bar';

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

 state={
  progress:0
 }
 setProgress=(progress)=>{
  this.setState({progress: progress});
 };
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
          height={3}
            color="#f11946"
            progress={this.state.progress}
            
          />
          <Routes>
              <Route path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize}  country="us" category="general"/>} />
              <Route path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize}  country="us" category="business"/>} />
              <Route path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize}  country="us" category="entertainment"/>} />
              <Route path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize}  country="us" category="health"/>} />
              <Route path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize}  country="us" category="science"/>} />
              <Route path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize}  country="us" category="sports"/>} />
              <Route path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize}  country="us" category="technology"/>} />

          </Routes>
        </Router>
      </div>
    )
  }
}

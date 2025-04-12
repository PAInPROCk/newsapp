import LoadingBar from 'react-top-loading-bar';

import './App.css';
import News from './components/News'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import {
//   RouteConfig,
//   route,
//   index,
//   layout,
//   prefix,
// } from "@react-router/dev/routes";

const  App = () => {
  
 const pageSize = 15;
 const apiKey = process.env.REACT_APP_NEWS_API;

 const [progress, setprogress] = useState(0)

 
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
            
          />
          <Routes>
              <Route path="/" element={<News setProgress={setprogress} apiKey={apiKey} pageSize={pageSize}  country="us" category="general"/>} />
              <Route path="/business" element={<News setProgress={setprogress} apiKey={apiKey} key="business" pageSize={pageSize}  country="us" category="business"/>} />
              <Route path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={pageSize}  country="us" category="entertainment"/>} />
              <Route path="/health" element={<News setProgress={setprogress} apiKey={apiKey} key="health" pageSize={pageSize}  country="us" category="health"/>} />
              <Route path="/science" element={<News setProgress={setprogress} apiKey={apiKey} key="science" pageSize={pageSize}  country="us" category="science"/>} />
              <Route path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={pageSize}  country="us" category="sports"/>} />
              <Route path="/technology" element={<News setProgress={setprogress} apiKey={apiKey} key="technology" pageSize={pageSize}  country="us" category="technology"/>} />

          </Routes>
        </Router>
      </div>
    )
};

export default App;
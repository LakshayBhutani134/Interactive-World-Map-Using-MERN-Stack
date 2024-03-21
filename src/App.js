import React from 'react';
import { About, Work } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
    <Navbar />
    <div className="section"><About />
    <div id="data-container">
        <h2>Data for Selected Country</h2>
        <div id="country-data"></div>
      </div>
    </div>
    <div className="section"><Work /></div>
    {/* <div className="section"><Skills /></div> */}
  </div>
);



export default App;

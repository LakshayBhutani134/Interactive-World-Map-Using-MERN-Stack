import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.css';
import { Wmap } from '../../components';

const Map = () => {
  return (
    <>
      <div id="home" className="app__about-container">
        <div className="app__about-map">
          <Wmap />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Map, 'app__about'),
  'map',
  'app__whitebg'
);

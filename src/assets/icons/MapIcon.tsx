import React from 'react';
import {Svg, Path} from 'react-native-svg';

function MapIcon() {
  return (
    <Svg width="32" height="32" fill="none" viewBox="0 0 24 24">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 20l-6-3V4l6 3m0 13l6-3m-6 3V7m6 10l6 3V7l-6-3m0 13V4M9 7l6-3"
      />
    </Svg>
  );
}

export default MapIcon;

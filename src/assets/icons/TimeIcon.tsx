import React from 'react';
import {Svg, Path} from 'react-native-svg';

function TimeIcon() {
  return (
    <Svg width="32" height="32" fill="none" viewBox="0 0 24 24">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 6v6M16.24 16.24L12 12"
      />
    </Svg>
  );
}

export default TimeIcon;

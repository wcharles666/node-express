import React from 'react';
import { dipatchLeftSide } from '@/config/commonMethods';
import './index.less';
import SvgDemo1 from '../svgDemo1/index';

const SvgDemo2 = (props: any) => {
  dipatchLeftSide(props);
  return (
    <div className="svgDemo2Page">
      <svg width="1000" height="300" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <rect
          width="200"
          height="50"
          x="50"
          y="20"
          rx="25"
          ry="25"
          style={{ fill: 'rgb(0, 0, 255)', strokeWidth: 1, stroke: 'rgb(0, 0, 0)' }}
        />
        <circle cx="100" cy="120" r="40" stroke="black" strokeWidth="2" fill="red" />
        <ellipse cx="300" cy="150" rx="100" ry="50" stroke="red" />
        <line x1="0" y1="0" x2="200" y2="200" stroke="red" />
        <polygon points="200,10 250,190 160,210" fill="lime" stroke="purple" />
      </svg>
    </div>
  );
};

export default SvgDemo2;

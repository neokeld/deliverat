import React from 'react';
import { Bar } from '@vx/shape';
import {
  GradientLightgreenGreen,
  GradientOrangeRed
} from '@vx/gradient';

export default ({
  children,
  width,
  height,
  margin = {
    top: 10,
    left: 10,
    right: 10,
    bottom: 80,
  },
  backgroundRect = true
}) => {
  const w = width;
  const h1 = (height - margin.top - margin.bottom) / 3;
  const h2 = 2 * (height - margin.top - margin.bottom) / 3;
  return (
    <svg width={width} height={height}>
      { backgroundRect &&
        <rect width={width} height={height} rx={14} fill="#272b4d" />
	  }
      <GradientLightgreenGreen id="LightgreenGreen" />
      <GradientOrangeRed id="OrangeRed" />
      <Bar
        x={margin.left}
        y={margin.top}
        width={w - margin.right - margin.left}
        height={h1}
        fill={`url(#OrangeRed)`}
        stroke="#ffffff"
        strokeWidth={8}
        rx={14}
      />
      <Bar
        x={margin.left}
        y={margin.top + h1}
        width={w - margin.right - margin.left}
        height={h2}
        fill={`url(#LightgreenGreen)`}
        rx={14}
        stroke="#ffffff"
        strokeWidth={8}
      />
	  {children}
    </svg>
  );
};
import React from 'react';

interface StatusGumballProps {
  size?: number;
  color?: string;
}

const StatusGumball: React.FC<StatusGumballProps> = ({ size = 10, color }) => {

  // Function to generate a random hex color code
  const randomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  // Inline style for the gumball
  const gumballStyle = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    backgroundColor: color || randomColor(),
    verticalAlign: 'middle'
  };

  return <span style={gumballStyle}></span>;
}

export default StatusGumball;

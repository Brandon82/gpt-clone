import React from 'react';
import './StatusGumball.scss';
import { FaAlignCenter } from 'react-icons/fa';

interface GumballProps {
  size: number;
  color: string;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const StatusGumball: React.FC<GumballProps> = ({ size, color }) => {

  let backgroundColor = color;

  if(color === 'random') {
    backgroundColor = getRandomColor();
  }

  return (
    <span className="status-gumball-container">
      <span
        className="status-gumball" 
        style={{
          width: size + "px",
          height: size + "px",
          backgroundColor
        }}
      ></span>
    </span>
  )
}
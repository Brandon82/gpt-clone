import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

interface AddButtonProps {
  text: string;
  width?: string;
  height?: string;
  color?: string;
  textColor?: string;
  fontSize?: string;
  onClick?: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ text, width = '100%', height = '34px', color = '', textColor = 'white', fontSize = '13px', onClick }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    width: width,
    height: height,
    backgroundColor: hover ? '#F8F8F8' : color,
    color: hover ? 'black' : textColor,
    fontSize: fontSize,
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s ease, color 0.2s ease',
  };

  const textStyle = {
    marginLeft: '10px',
  };

  return (
    <button 
      className="add-button" 
      style={buttonStyle} 
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <FaPlus /><span style={textStyle}>{text}</span>
    </button>
  );
}
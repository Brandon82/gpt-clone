import React, { useState, ReactNode } from 'react';

interface ButtonProps {
  buttonText: string;
  icon?: ReactNode;
  width?: string;
  height?: string;
  color?: string;
  textColor?: string;
  fontSize?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, icon, width = '100%', height = '34px', color = '', textColor = 'white', fontSize = '13px', onClick }) => {
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
      className="button" 
      style={buttonStyle} 
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}<span style={textStyle}>{buttonText}</span>
    </button>
  );
}
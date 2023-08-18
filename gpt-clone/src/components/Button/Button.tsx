import React, { useState, ReactNode } from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, icon, style, ...props }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    ...style,
    backgroundColor: hover ? '#F8F8F8' : style?.backgroundColor,
    color: hover ? 'black' : style?.color,
  };

  const textStyle = {
    marginLeft: '10px',
  };

  return (
    <button 
      className="button" 
      style={buttonStyle} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {icon}<span style={textStyle}>{buttonText}</span>
    </button>
  );
}
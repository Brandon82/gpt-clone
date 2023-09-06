import React, { useState, ReactNode } from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, icon, ...props }) => {
  return (
    <button 
      className="button"
      {...props}
    >
      {icon}<span>{buttonText}</span>
    </button>
  );
}
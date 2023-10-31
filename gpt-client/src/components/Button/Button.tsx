import React, { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  icon?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ buttonText, icon, ...rest }) => {
  return (
    <button 
      className="button"
      {...rest}
    >
      {icon}<span>{buttonText}</span>
    </button>
  );
}
import React, { useState } from 'react';
import './ButtonGroup.scss';

interface ButtonGroupProps {
  options: string[];
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="button-group">
      {options.map(option => (
        <button
          key={option}
          className={`button button-group-button ${option === selected ? 'selected' : ''}`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

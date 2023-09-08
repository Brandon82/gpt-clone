import React from 'react';
import './ButtonGroup.scss';

interface ButtonGroupProps {
  options: string[];
  value: string;
  onChange?: (value: string) => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ options, value, onChange }) => {
  const handleButtonClick = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="button-group">
      {options.map(option => (
        <button
          key={option}
          className={`button button-group-button ${option === value ? 'selected' : ''}`} // Use value prop instead of selected state
          onClick={() => handleButtonClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

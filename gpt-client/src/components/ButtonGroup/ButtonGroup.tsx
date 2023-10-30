import React from 'react';
import './ButtonGroup.scss';

interface Option {
  value: string;
  name: string;
}

interface ButtonGroupProps {
  options: Option[];
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
      {options.map(({ value: optionValue, name }) => (
        <button
          key={optionValue}
          className={`button button-group-button ${optionValue === value ? 'selected' : ''}`}
          onClick={() => handleButtonClick(optionValue)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

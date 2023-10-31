import React, { useState, useRef, useEffect } from 'react';
import './NumInput.scss';

type NumType = 'integer' | 'float';

interface NumInputProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  onUpdate?: (value: number | null) => void; 
  numType?: NumType;
  minValue?: number;
  maxValue?: number;
}

export const NumInput: React.FC<NumInputProps> = ({ 
  placeholder = '', 
  onUpdate,  
  numType = 'integers', 
  minValue,
  maxValue,
  ...rest 
}) => {
  const [input, setInput] = useState<number | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const validateInput = (value: string): boolean => {
    switch(numType) {
      case 'integers':
        return /^[+-]?\d+$/.test(value);
      case 'floats':
        const floatValue = parseFloat(value);
        return !isNaN(floatValue) && (!minValue || floatValue >= minValue) && (!maxValue || floatValue <= maxValue);
    }
    return false;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (validateInput(value)) {
      setInput(Number(value));
      if (onUpdate) {
        onUpdate(Number(value));
      }
    } else if (value === '') {
      setInput(null);
      if (onUpdate) {
        onUpdate(null);
      }
    }
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = '20px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="num-input" {...rest}>
      <textarea
        ref={textAreaRef}
        placeholder={placeholder}
        value={input !== null ? input.toString() : ''}
        onChange={handleChange}
      />
    </div>
  );
};

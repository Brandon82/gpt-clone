import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import './TextInput.css';

interface TextInputProps {
  placeholder?: string;
  onSend?: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder = '', onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (onSend) {
      onSend(text);
    }
    setText('');
  };

  return (
    <div className="text-input">
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend}>
        <FiSend />
      </button>
    </div>
  );
};
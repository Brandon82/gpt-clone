import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import './TextInput.scss';

interface TextInputProps {
  placeholder?: string;
  onSend?: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder = '', onSend }) => {
  const [text, setText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (onSend) {
      onSend(text);
    }
    setText('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = '20px';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className="text-input">
      <textarea
        ref={textAreaRef}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>
        <FiSend />
      </button>
    </div>
  );
};

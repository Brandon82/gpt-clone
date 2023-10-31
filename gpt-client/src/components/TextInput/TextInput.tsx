import React, { useState, KeyboardEvent, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import './TextInput.scss';

interface TextInputProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: string;
  onSend?: (text: string) => void;
  autoUpdate?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder = '', onSend, autoUpdate = false, ...rest }) => {
  const [text, setText] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (onSend) {
      onSend(text);
      if (!autoUpdate) {
        setText('');
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !autoUpdate) {
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

  useEffect(() => {
    if (autoUpdate && onSend) {
      onSend(text);
    }
  }, [text, onSend, autoUpdate]);

  return (
    <div className="text-input" {...rest}>
      <textarea
        ref={textAreaRef}
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {!autoUpdate && (
        <button onClick={handleSend}>
          <FiSend />
        </button>
      )}
    </div>
  );
};

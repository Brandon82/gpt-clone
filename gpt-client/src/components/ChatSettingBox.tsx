import React, { useCallback, useContext, useState } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import debounce from '@utils/debounce';

export const ChatSettingBox: React.FC<{}> = () => {
  const {state, dispatch} = useContext(GPTContext);
  const [currentText, setCurrentText] = useState('');

  const debouncedDispatch = useCallback(
    debounce((text: string) => {
      dispatch({ type: 'SET_INSTRUCTION_TEXT', payload: text });
    }, 300),
    [] // Dependency array is empty because dispatch function from useContext won't change
  );

  const handleTextChange = (text: string) => {
    setCurrentText(text);
    debouncedDispatch(text);
  };

  return (
    <div className="chat-settings">
        <TextInput
          onSend={handleTextChange}
          autoUpdate={true}
          placeholder='Enter chat instruction'
          className='text-input chat-settings__text-input'
        />
    </div>
  );
};

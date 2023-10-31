import React, { useCallback, useContext, useState } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import { NumInput } from '@components/NumInput/NumInput';
import debounce from '@utils/debounce';

export const ChatSettingBox: React.FC<{}> = () => {
  const {state, dispatch} = useContext(GPTContext);
  const [chatInstruction, setChatInstruction] = useState('');
  const [maxTokens, setMaxTokens] = useState<number | null>(null);

  const debouncedSetInstructionText = useCallback(
    debounce((text: string) => {
      dispatch({ type: 'SET_INSTRUCTION_TEXT', payload: text });
    }, 300),
    [] // Dispatch function from useContext won't change.
  );

  const debouncedSetMaxTokens = useCallback(
    debounce((tokens: number) => {
      dispatch({ type: 'SET_MAX_TOKENS', payload: tokens });
    }, 300),
    []
  );

  const handleChatInstructionChange = (input: string) => {
    setChatInstruction(input);
    debouncedSetInstructionText(input);
  };

  const handleMaxTokenChange = (input: number | null) => {
    setMaxTokens(input);
    debouncedSetMaxTokens(input);
  };

  return (
    <div className="chat-settings">
        <TextInput
          onSend={handleChatInstructionChange}
          autoUpdate={true}
          placeholder='Enter chat instruction'
          className='text-input chat-settings__text-input'
        />

        <NumInput 
          placeholder="Max tokens" 
          numType="integer"  // Updated the prop value
          onUpdate={handleMaxTokenChange}
          className='text-input chat-settings__text-input'
        />
    </div>
  );
};

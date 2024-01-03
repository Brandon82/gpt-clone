import React, { useCallback, useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { InputNumber, Space } from 'antd';
import debounce from '@utils/debounce';

export const ChatSettingBox: React.FC<{}> = () => {
  const {state, dispatch} = useContext(GPTContext);

  const debouncedSetMaxTokens = useCallback(
    debounce((tokens: number) => {
      dispatch({ type: 'SET_MAX_TOKENS', payload: tokens });
    }, 300),
    []
  );

  const handleMaxTokenChange = (input: number | null) => {
    debouncedSetMaxTokens(input);
  };

  return (
    <div className="chat-settings">
      <Space>
        <InputNumber min={1} max={200000} defaultValue={state.maxTokens} placeholder="Max tokens" onChange={handleMaxTokenChange} />
        <h5>Max tokens</h5>
      </Space>
    </div>
  );
};

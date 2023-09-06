import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import { MessageList } from '@components/MessageList';
import { IMessage } from '@state/GPTContext';
import { usePopupBanner } from '@components/PopupBanner/PopupBannerContext';
import { PopupBanner } from '@components/PopupBanner/PopupBanner';
import { ButtonGroup } from '@components/ButtonGroup/ButtonGroup';
import { Message } from '../components/Message';

import config from '@config';

const options = ['Chat', 'Image Generator'];

const WelcomeMessage: React.FC = () => {
  return (
    <div className="welcome-message">
      <Message source={'model'} text={'Welcome to GPT-Clone, enter a message below to begin.'} />
    </div>
  );
}

export const ChatPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);
  const { showPopupBanner } = usePopupBanner();

  const handleSend = async (message: string) => {
    if(message === '') {
      return;
    }
    const userMessage: IMessage = {
      text: message,
      source: 'user'
    };

    dispatch({
      type: 'ADD_TO_HISTORY_AT_INDEX',
      index: state.chatIndex,
      payload: userMessage
    });
  
    try {
      const res = await fetch(`http://localhost:${config.config['server-port']}/v1/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 150,
          engine: state.model
        })
      });
  
      if (res.status === 200) {
        const data = await res.json();
  
        const modelMessage: IMessage = {
          text: data.message,
          source: 'model'
        };
  
        dispatch({
          type: 'ADD_TO_HISTORY_AT_INDEX',
          index: state.chatIndex,
          payload: modelMessage
        });
  
      } else {
        showPopupBanner('Error', <p>Failed to fetch data from server</p>, 'top-right', 4000);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        showPopupBanner('Error', <p>{error.message}</p>, 'top-right', 4000);
      } else {
        showPopupBanner('Error', <p>An unknown error occurred</p>, 'top-right', 4000);
      }
    }
  };
  
  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModel = event.target.value;

    dispatch({
      type: 'SET_MODEL',
      payload: selectedModel,
    });
  };
  
  const getCurrentChat = () => {
    return state.chatHistory[state.chatIndex] || [];
  };
  
  return (
    <div className="pane">
      <PopupBanner />
      
      <div className="chat-content">

        <div className="app-type-selector">
          <ButtonGroup options={options} />
        </div>

        {state.chatHistory.length === 0 ? (
          <WelcomeMessage />
        ) : (
          getCurrentChat().length === 0 ? (
            <p>Enter a message below</p>
          ) : (
            <h3>Chat #{state.chatIndex + 1}</h3>
          )
        )}


        <MessageList />
      </div>
      
      <div className='chat-pane-bottom'>
        <select 
          className='model-selector'
          onChange={handleModelChange}
        >
          <option value="gpt-3.5-turbo">GPT-3.5-Turbo</option> 
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-4-32k">GPT-4-32k</option>
          <option value="gpt-3.5-turbo-16k">GPT-3.5-Turbo-16k</option>
        </select>

        <TextInput
          onSend={handleSend}
          placeholder="Send a message"
        />
      </div>
    </div>
  );
}
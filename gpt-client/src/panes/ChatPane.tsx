import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import { MessageList } from '@components/MessageList';
import { IMessage } from '@state/GPTContext';
import { usePopupBanner } from '@components/PopupBanner/PopupBannerContext';
import { PopupBanner } from '@components/PopupBanner/PopupBanner';
import { WelcomeMessage } from '@components/WelcomeMessage';
import { isEmptyMessage, sendChatRequestToServer } from '@state/utils';

const WELCOME_TEXT = 'Welcome to GPT-Clone! I am your AI assistant. I am here to be helpful in any way I can. Feel free to chat with me by typing below.';

export const ChatPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);
  const { showPopupBanner } = usePopupBanner();

  const handleSend = async (message: string) => {
    if(message === '') {
      return;
    }

    const userMessage: IMessage = {
      text: message,
      source: 'user',
      type: 'chat'
    };
    dispatch({
      type: 'ADD_TO_HISTORY_AT_INDEX',
      index: state.chatIndex,
      payload: userMessage
    });
  
    try {
      const modelMessage = await sendChatRequestToServer(message, state.model);
      if (modelMessage) {
        dispatch({
          type: 'ADD_TO_HISTORY_AT_INDEX',
          index: state.chatIndex,
          payload: modelMessage
        });
      } else {
        showPopupBanner('Error', <p>No response from the model</p>, 'top-right', 4000);
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

  const showWelcomeMessage = isEmptyMessage(state.chatHistory, state.chatIndex);

  return (
    <>
      <PopupBanner />
      <div className="chat-content">
        {showWelcomeMessage ? (
          <WelcomeMessage welcomeText={WELCOME_TEXT} />
        ) : (
          <MessageList />
        )}
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
    </>
  );
}
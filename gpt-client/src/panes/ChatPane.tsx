import React, { useContext, useEffect, useState } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import { MessageList } from '@components/MessageList';
import { IMessage } from '@state/GPTContext';
import { WelcomeMessage } from '@components/WelcomeMessage';
import { isEmptyMessage, sendChatRequestToServer, sendImageRequestToServer } from '@utils/helpers';
import { Select } from 'antd';
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';
import { WELCOME_TEXT_CHAT, WELCOME_TEXT_IMAGE, CHAT_MODEL_OPTIONS, IMAGE_MODEL_OPTIONS, D3_IMAGE_SIZES, D2_IMAGE_SIZES } from '@utils/constants';

const Context = React.createContext({ name: 'Default' });
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const ChatPane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);
  const [api, contextHolder] = notification.useNotification();
  const [imageSize, setImageSize] = useState('1024x1024');
  const [numImages, setNumImages] = useState(1);

  useEffect(() => {
    setImageSize('1024x1024');
    if (state.imageModel === 'dall-e-3') {
      setNumImages(1);
    }
  }, [state.imageModel]); 

  const openNotification = (type: NotificationType, placement: NotificationPlacement, errorMsg: string) => {
    api[type]({
      message: 'Error',
      description: <Context.Consumer>{({}) => `${errorMsg}`}</Context.Consumer>,
      placement,
    });
  };

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
      type: 'ADD_TO_CHAT_HISTORY_AT_INDEX',
      index: state.chatIndex,
      payload: userMessage
    });
    try {
      const modelMessage = await sendChatRequestToServer(message, state.chatModel, state.maxTokens);
      if (modelMessage) {
        dispatch({
          type: 'ADD_TO_CHAT_HISTORY_AT_INDEX',
          index: state.chatIndex,
          payload: modelMessage
        });
      } else {
        openNotification('error', 'topRight', 'No Response from Model')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        openNotification('error', 'topRight', 'No Response from Model')
      } else {
        openNotification('error', 'topRight', 'Unknown error occurred')
      }
    }
  };

  const handleSendImage = async (message: string) => {
    if(message === '') {
      return;
    }
    // Add the user's message to the chat history list
    const userMessage: IMessage = {
      text: message,
      source: 'user',
      type: 'chat'
    };
    dispatch({
      type: 'ADD_TO_CHAT_HISTORY_AT_INDEX',
      index: state.chatIndex,
      payload: userMessage
    });
    try {
      const modelMessage = await sendImageRequestToServer(message, imageSize, numImages, state.imageModel);
      if (modelMessage) {
        dispatch({
          type: 'ADD_TO_CHAT_HISTORY_AT_INDEX',
          index: state.chatIndex,
          payload: modelMessage
        });
      } else {
        openNotification('error', 'topRight', 'No Response from Model')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        openNotification('error', 'topRight', 'No Response from Model')
      } else {
        openNotification('error', 'topRight', 'Unknown error occurred')
      }
    }
  };

  const handleChatModelChange = (value: string) => {
    dispatch({
      type: 'SET_CHAT_MODEL',
      payload: value,
    });
  };

  const handleImageModelChange = (value: string) => {
    dispatch({
      type: 'SET_IMAGE_MODEL',
      payload: value,
    });  
  };

  const showWelcomeMessage = isEmptyMessage(state.chatHistory, state.chatIndex);
  const contextValue = React.useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <>
      <Context.Provider value={contextValue}>
        {contextHolder}
        <div className="chat-content">
          {showWelcomeMessage ? (
            state.appType === 'chat' ? (
              <WelcomeMessage welcomeText={WELCOME_TEXT_CHAT} />
            ) : (
              <WelcomeMessage welcomeText={WELCOME_TEXT_IMAGE} />
            )
          ) : (
            <MessageList />
          )}
        </div>
        <div className='chat-pane-bottom'>
          <div className='chat-pane-selectors'>
            {state.appType === 'chat' ? (
              <Select
                value={state.chatModel}
                style={{ width: 140 }}
                onChange={handleChatModelChange}
                options={CHAT_MODEL_OPTIONS}
              />
            ) : (
              <>
                <Select
                  value={state.imageModel}
                  style={{ width: 140 }}
                  placement={"topLeft"}
                  onChange={handleImageModelChange}
                  options={IMAGE_MODEL_OPTIONS}
                />
                <Select
                  value={imageSize}
                  style={{ width: 120 }}
                  onChange={setImageSize}
                  options={state.imageModel === 'dall-e-3' ? D3_IMAGE_SIZES : D2_IMAGE_SIZES}
                />
                {state.imageModel === 'dall-e-2' && (
                  <Select
                    value={numImages}
                    style={{ width: 70 }}
                    onChange={setNumImages}
                    options={Array.from({ length: 10 }, (_, i) => ({ value: i + 1, label: i + 1 }))}
                  />
                )}
              </>
            )}
          </div>
          <TextInput
            onSend={state.appType === 'image' ? handleSendImage : handleSend}
            placeholder="Send a message"
          />
        </div>
      </Context.Provider>
    </>
  );
}
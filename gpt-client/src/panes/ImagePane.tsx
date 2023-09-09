import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';
import { TextInput } from '@components/TextInput/TextInput';
import { IMessage } from '@state/GPTContext';
import { usePopupBanner } from '@components/PopupBanner/PopupBannerContext';
import { PopupBanner } from '@components/PopupBanner/PopupBanner';
import { WelcomeMessage } from '@components/WelcomeMessage';
import { isEmptyMessage, sendImageRequestToServer } from '@state/utils';
import { ImageList } from '@components/ImageList';

const WELCOME_TEXT = 'Welcome to GPT-Clone Image Generator! Please enter a description and I will generate images for you.';

export const ImagePane: React.FC = () => {
  const {state, dispatch} = useContext(GPTContext);
  const { showPopupBanner } = usePopupBanner();

  const handleSend = async (message: string) => {
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
      type: 'ADD_TO_IMAGE_HISTORY_AT_INDEX',
      index: state.imageIndex,
      payload: userMessage
    });
  
    try {
      const modelMessage = await sendImageRequestToServer(message, '1024x1024', 1);
      if (modelMessage) {
        dispatch({
          type: 'ADD_TO_IMAGE_HISTORY_AT_INDEX',
          index: state.imageIndex,
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
  
  const showWelcomeMessage = isEmptyMessage(state.imageHistory, state.imageIndex);

  return (
    <>
      <PopupBanner />
      <div className="chat-content">
        {showWelcomeMessage ? (
          <WelcomeMessage welcomeText={WELCOME_TEXT} />
        ) : (
          <ImageList />
        )}
      </div>

      <div className='chat-pane-bottom'>
        <select className="img-size-selector">
          <option value="1024x1024">1024x1024</option>
          <option value="512x512">512x512</option>
          <option value="256x256">256x256</option>
        </select>
        <select className="img-num-selector">
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <TextInput
          onSend={handleSend}
          placeholder="Provide a description of an image"
        />
      </div>
    </>
  );
}
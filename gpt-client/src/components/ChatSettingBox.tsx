import React, { useContext } from 'react';
import { GPTContext } from '@state/GPTContext';


export const ChatSettingBox: React.FC<{}> = () => {
  const {state } = useContext(GPTContext);



  return (
    <div className="chat-settings">

    </div>
  );
};

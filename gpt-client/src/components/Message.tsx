import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { IMessage } from '@state/GPTContext';

const components = {
  code({node, inline, className, children, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match
      ? <SyntaxHighlighter className='code-block' style={coldarkDark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      : <code className={className} style={{ backgroundColor: '#282A36', borderRadius: '4px', fontSize: '130%' }} {...props}>{children}</code>
  }
};

export const Message: React.FC<IMessage> = ({ text, source, type }) => {
  const avatarContent = source === 'user' ? <UserOutlined /> : 'GPT';
  const avatarStyle = source === 'user' 
  ? { backgroundColor: '#5874a6' }
  : { backgroundColor: '#fde3cf', color: '#f56a00' };

  return (
    <div className="message-container">
      <div className="msg-avatar-container">
      <Avatar style={avatarStyle}>{avatarContent}</Avatar>      
      </div>
      <div className="message">
        {type === 'image' ? (
          <Image width={160} src={text} style={{ borderRadius: '4px' }} />
        ) : (
          <ReactMarkdown components={components} children={text || ''} />
        )}
      </div>
    </div>
  );
};
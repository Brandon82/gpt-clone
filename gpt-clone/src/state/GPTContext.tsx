import React from 'react';

interface IMessage {
}

interface IState {
  messageList: IMessage[];
}

interface IAction {
  type: 'ADD_TO_MESSAGE_LIST' | 'SET_MESSAGE_LIST';
  payload: IMessage | IMessage[];
}

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}

export const GPTContext = React.createContext({} as IContextProps);

export const GPTReducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case 'ADD_TO_MESSAGE_LIST':
        return { ...state, messageList: [...state.messageList, action.payload as IMessage] };
        case 'SET_MESSAGE_LIST':
        return { ...state, messageList: action.payload as IMessage[] };
        default:
        return state;
    }
};
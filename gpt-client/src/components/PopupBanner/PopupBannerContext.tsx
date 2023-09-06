import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface PopupBannerState {
  show: boolean;
  title: string;
  content: ReactNode;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-middle';
  autoCloseTime?: number; // time in milliseconds
}

interface PopupBannerProviderProps {
  children: React.ReactNode;
}

interface PopupBannerContextProps {
  showPopupBanner: (title: string, content: ReactNode, position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-middle', autoCloseTime?: number) => void;
  hidePopupBanner: () => void;
  popupBannerState: PopupBannerState;
}

const PopupBannerContext = createContext<PopupBannerContextProps | undefined>(undefined);

export const usePopupBanner = () => {
  const context = useContext(PopupBannerContext);
  if (!context) {
    throw new Error('usePopupBanner must be used within a PopupBannerProvider');
  }
  return context;
};

export const PopupBannerProvider: React.FC<PopupBannerProviderProps> = ({ children }) => {
  const [popupBannerState, setPopupBannerState] = useState<PopupBannerState>({
    show: false,
    title: '',
    content: null,
    position: 'top-right',
  });

  const showPopupBanner = (title: string, content: ReactNode, position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-middle', autoCloseTime?: number) => {
    setPopupBannerState({ show: true, title, content, position, autoCloseTime });
  };

  const hidePopupBanner = () => {
    setPopupBannerState({ ...popupBannerState, show: false });
  };

  return (
    <PopupBannerContext.Provider value={{ showPopupBanner, hidePopupBanner, popupBannerState }}>
      {children}
    </PopupBannerContext.Provider>
  );
};

import React, { useEffect, useState } from 'react';
import './PopupBanner.scss';
import { usePopupBanner } from './PopupBannerContext';

export const PopupBanner: React.FC = () => {
  const { popupBannerState, hidePopupBanner } = usePopupBanner();
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClose = () => {
    setIsFadingOut(true);
    setTimeout(hidePopupBanner, 300);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (popupBannerState.show && popupBannerState.autoCloseTime) {
      timer = setTimeout(() => {
        handleClose();
      }, popupBannerState.autoCloseTime);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [popupBannerState.show, popupBannerState.autoCloseTime, hidePopupBanner]);

  useEffect(() => {
    if (popupBannerState.show) {
      setIsFadingOut(false);
    }
  }, [popupBannerState.show]);

  return (
    <>
      {popupBannerState.show && (
        <div className={`popup-banner-overlay popup-banner-${popupBannerState.position} ${isFadingOut ? 'fadeOut' : ''}`}>
          <div className="popup-banner-container">
            <div className="popup-banner-header">
              <h4>{popupBannerState.title}</h4>
              <button onClick={handleClose} className="popup-banner-close-button">
                &times;
              </button>            
            </div>
            <div className="popup-banner-body">
              {popupBannerState.content}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

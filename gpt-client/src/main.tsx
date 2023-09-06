import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GPTProvider } from '@state/GPTProvider';
import { PopupBannerProvider } from '@components/PopupBanner/PopupBannerContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GPTProvider>
      <PopupBannerProvider>
        <App />
      </PopupBannerProvider>
    </GPTProvider>
  </React.StrictMode>,
)

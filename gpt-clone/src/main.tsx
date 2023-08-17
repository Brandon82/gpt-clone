import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GPTProvider } from './state/GPTProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GPTProvider>
      <App />
    </GPTProvider>
  </React.StrictMode>,
)

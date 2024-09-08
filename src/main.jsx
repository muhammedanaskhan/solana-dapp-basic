import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppWalletProvider } from './providers/AppWalletProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWalletProvider>
      <App />
    </AppWalletProvider>
  </StrictMode>,
)

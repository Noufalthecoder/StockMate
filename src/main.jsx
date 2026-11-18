import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initBrowserApiFallback } from './lib/browserFallback.js'

// Attach localStorage fallback only when running outside Electron (e.g., browser preview)
initBrowserApiFallback()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Use contextBridge safely (only present inside Electron)
if (window.ipcRenderer && typeof window.ipcRenderer.on === 'function') {
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
}

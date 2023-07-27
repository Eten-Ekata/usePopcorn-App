import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PopProvider } from './context/PopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PopProvider>
    <App />
    </PopProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './components/App.jsx'
import Forgot from './components/UpdatePasswordScreen.jsx'
import Delete from './components/ConfirmModal.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

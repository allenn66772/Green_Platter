import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter> <GoogleOAuthProvider clientId='678712197590-g9mvnvi65l848gieqml6lm0591rrjc4m.apps.googleusercontent.com'><App /></GoogleOAuthProvider></BrowserRouter>
  </StrictMode>,
)

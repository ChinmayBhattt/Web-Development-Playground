import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode> strict mode acha hai on hi rehne dena chaiye ye do bar check karega chal ke
    <App />
  // </StrictMode>,
)

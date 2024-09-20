import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './context/usercontext.jsx'
import { CartContextProvider } from './context/cartcontext.jsx'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </CartContextProvider>
)

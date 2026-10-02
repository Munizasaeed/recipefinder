import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import FavoritesProvider from './components/FavoritesProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </FavoritesProvider>
  </StrictMode>
)

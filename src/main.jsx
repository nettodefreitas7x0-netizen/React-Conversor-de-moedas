import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 // estilos globais do CSS
import Home from './pages/home' // EXPORT DEFAULT

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Home />
  </StrictMode>,
)
 

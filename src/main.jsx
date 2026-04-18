import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from "./styles/GlobalStyles.js" // estilos globais do CSS
import Home from './pages/home' // EXPORT DEFAULT

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/> 
    <Home />
  </StrictMode>,
)
 

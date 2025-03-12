import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/Index'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
) 

// parte doque será renderizado, vc coloca a 'rota'
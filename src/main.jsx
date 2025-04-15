import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ModalContextProvider } from './store/modal-context'
import App from './App.jsx'
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </StrictMode>
)

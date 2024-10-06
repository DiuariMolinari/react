import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyGlobalStyles from './styles/globalStyles'
import Home from "./pages/Home"
import {Comando} from './utils/element'

var instancia: Comando = {
  countSubElements: 10,
  isVisible: true,
  name: "test"
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyGlobalStyles />
    <Home instancia={instancia} />
  </StrictMode>,
)

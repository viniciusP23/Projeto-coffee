import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './conponents/NavBar.jsx'
import Hero from './conponents/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <NavBar/>
    <Hero/>
  </StrictMode>,
)

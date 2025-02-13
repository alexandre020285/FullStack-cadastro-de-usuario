import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './Pages/Home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)

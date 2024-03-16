import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PokemonProvider } from './context/PokemonProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <PokemonProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PokemonProvider>
  </BrowserRouter>

)

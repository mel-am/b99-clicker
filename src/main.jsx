import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { BrowserRouter } from "react-router-dom";
import IntroPage from './Intropage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IntroPage />
    </BrowserRouter>
  </React.StrictMode>,
)

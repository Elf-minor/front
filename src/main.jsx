import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './HomePage.jsx'
import { BrowserRouter, NavLink, Routes, Route } from "react-router";
import { Login } from './login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

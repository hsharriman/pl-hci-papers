import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Submit from './submit.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/" element={<App />} />
      <Route path="/submit" element={<Submit />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)

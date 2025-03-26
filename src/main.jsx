import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './InstaApp.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/explore/Explore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename='/myinstagram'>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)

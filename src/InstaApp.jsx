import React, { useEffect, useState,useRef } from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import MainContent from './components/MainContent/MainContent.jsx';
import './App.css'
import SideBar from './components/SideBar/SideBar.jsx';

function InstaApp() {

  const [sideBarWidth, setSideBarWidth] = useState(0);
  const sideBarRef = useRef(null);

  useEffect(()=>{
    const sideBar = sideBarRef.current;
    const computedWidth = getComputedStyle(sideBar).width;
    setSideBarWidth(computedWidth)
    
    
  },[sideBarWidth])

  return (
    <div id="app-container">
      <div id="nav-wrapper">
        <NavBar />
      </div>
      <div id="main-wrapper">
        <MainContent />
      </div>
      <div ref={sideBarRef} id="sidebar-wrapper">
        <SideBar />
      </div>
      
    </div>
  );
}

export default InstaApp;


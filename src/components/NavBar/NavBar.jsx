import { useEffect, useRef, useState } from 'react'
import './NavBar.css'
import "font-awesome/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function NavBar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isFocused, setIsFocused] = useState(false);
  const searchBoxRef = useRef(null);
  const searchCancelBtnRef = useRef(null);
  const [searchText,setSearchText] = useState("");
  //const [searchTextRegex, setSearchTextRegex] = useState(/""/);
  const users=[
    {
      id:"asda",
      aka:"Haru",
      imgSrc:"/vite.svg",
      pageLink:""
    },
    {
      id:"PaulAhn",
      aka:"GwangSeo",
      imgSrc:"/vite.svg",
      pageLink:""
    },
    {
      id:"PeterJu",
      aka:"YoungUk",
      imgSrc:"/vite.svg",
      pageLink:""
    },
    {
      id:"Jane",
      aka:"Miyeon",
      imgSrc:"/vite.svg",
      pageLink:""
    },
    {
      id:"Mike",
      aka:"JuHak",
      imgSrc:"/vite.svg",
      pageLink:""
    }
  ];


  useEffect(()=>{
    const handleReseize = () =>{
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize",handleReseize);

    return () =>{
      window.removeEventListener("resize",handleReseize);
    }
  }, []);

  const toggleSearchBox=(e)=>{
    e.preventDefault();
    const searchBox = searchBoxRef.current;
    if(searchBox.style.display ==="none" || searchBox.style.display === ""){
      searchBox.style.display = "block";
    } else{
      searchBox.style.display = "none"
    }
  }

  const inputHandler = (e) =>{
    const input = e.target.value
    setSearchText(input);
    /*
    if(input.length>0){
      setSearchTextRegex(new RegExp(input,"gi"));
      
    } else{
      setSearchTextRegex(/""/);
    }*/
  }

  const focusHandler = () =>{
    setIsFocused(true);
    const searchCancelBtn = searchCancelBtnRef.current;
    searchCancelBtn.style.display = "block";
  }

  const cancelBtnHandler = (e) =>{
    setSearchText("");
    setIsFocused(false);
  }

  return (
    <>
      <div id="nav-container">
        <div id="logo-container">
          <a href="http://localhost:5173/"><i className={`fa fa-instagram fa-2x ${width>=1266? "hide" : "show"}`}></i></a>
          <a href="http://localhost:5173/"><span className={`logo-text ${width >=1266 ? 'show': 'hide'}`}>Instagram</span></a>
        </div>
        <div id="nav-btns-container">
            <a className="nav-link" id="home" href="http://localhost:5173/" >
              <i className='fa fa-home fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Home" : ""}</span>
            </a>
            <a className="nav-link" id="search" href="#" onClick={toggleSearchBox}>
                <i className='fa fa-search fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Search" : ""}</span>
            </a>
            
            {/* Search Box*/}
            <div id="search-box" ref={searchBoxRef}>
              <div id="search-box-head">
                <h2 id="search-title">Search</h2>
                  <div className='input-container'>
                    <input type="search" 
                            id="search-input" 
                            placeholder='Search' 
                            onFocus={focusHandler}
                            value={searchText}
                            onChange={inputHandler}
                            onBlur={(e)=>{setIsFocused(false)}}
                            />
                    <button id="cancel-search-btn" 
                            ref={searchCancelBtnRef}
                            onMouseDown={cancelBtnHandler}
                            style={{display: isFocused? "block" : "none"}}
                            
                            >X</button>
                  </div>
              </div>
              <div id="search-box-body">
                <h4>Recent</h4>
                <div id="search-results-container">
                  {
                      searchText.length > 0 && users.filter(el=>(el.id.toLowerCase()).includes(searchText)).map(user=>{
                      return (
                      <div key={user.id} className='search-result'>
                        <a href={user.pageLink}>
                          <div>
                            <img src={user.imgSrc} alt="user Image"></img>
                          </div>
                          <div className='id-AKA nav-bar'>
                            <span className='sidebar-user-id'>{user.id}</span>  
                            <span className="aka">{user.aka}</span>
                          </div>
                          
                        </a>
                      </div>
                    )})
                  }
                </div>
              </div>
            </div>

            <a className="nav-link" id="explore" href="https://instagram.com/explore/" >
              <i className='fa fa-compass fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Explore" : ""}</span>
            </a>
            <a className="nav-link" id="reels-btn" href="https://instagram.com/reels/" >
              <i className='fa fa-film fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Reels" : ""}</span>
            </a>
            <a className="nav-link" id="messages-btn" href="https://instagram.com/direct/inbox/" >
              <i className='fa fa-comments fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Messages" : ""}</span>
            </a>
            <a className="nav-link" id="notifications-btn" href="https://instagram.com/#" >
              <i className='fa fa-heart fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Notifications" : ""}</span>
            </a>
            <a className="nav-link" id="create-btn" href="https://instagram.com/#" >
              <i className='fa fa-plus fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Create" : ""}</span>
            </a>
            <a className="nav-link" id="profile-btn" href="https://instagram.com/username/" >
              <i className='fa fa-user fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Profile" : ""}</span>
            </a>
        </div>
        <div id="threads-more-container">
          <a className="nav-link" id="threads-btn" href="https://meta.com" >
            <i className='fa fa-hashtag fa-2x'></i><span className='nav-text'>{width >= 1266 ? "Threads" : ""}</span>
          </a>
          <a className="nav-link" id="more-btn" href="https://www.instagram.com" >
            <i className='fa fa-ellipsis-h fa-2x'></i><span className='nav-text'>{width >= 1266 ? "More" : ""}</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar;

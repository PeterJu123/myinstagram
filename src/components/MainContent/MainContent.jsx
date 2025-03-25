import {useState, useEffect, useRef} from 'react';
import './MainContent.css'
import "font-awesome/css/font-awesome.min.css";

function MainContent(){
    
    const [mainContainerWidth,setMainContainerWidth] = useState(window.innerWidth)
    const [text,setText] = useState("");
    const textAreaRef = useRef(null);


    const handleChange = (event) =>{
        const textArea = textAreaRef.current;
        textArea.style.height = `auto`;
        textArea.style.height = `${textArea.scrollHeight>100? 100 : textArea.scrollHeight}px`
        setText(event.target.value)
        console.log(textArea.scrollHeight)
    }

    useEffect(()=>{
        setMainContainerWidth(window.innerWidth);
    },[window.innerWidth])
    return(
        <div id="main-container">
            
            <div id="stories-bar">
                <div className="story-users">
                    <button className='story-btn'>
                        <i className='story-user-img fa fa-user fa-2x' />
                        <p className='story-user-name'>Peter</p>
                    </button>
                    
                </div>
                <div className="story-users">
                    <button className='story-btn'>
                        <i className='story-user-img fa fa-user fa-2x' />
                        <p className='story-user-name'>Jane</p>
                    </button>
                </div>
                <div className="story-users">
                    <button className='story-btn'>
                        <i className='story-user-img fa fa-user fa-2x' />
                        <p className='story-user-name'>Mike</p>
                    </button>
                </div>
                <div className="story-users">
                    <button className='story-btn'>
                        <i className='story-user-img fa fa-user fa-2x' />
                        <p className='story-user-name'>Paul</p>
                    </button>
                </div>
            </div>

            <div className="content-container">
                <div className='main-content-box'>
                    <div className='user-info-bar'>
                        <div className="user-info-img-container">
                            <a href="http://localhost:5173/">
                                <i className='user-profile-img fa fa-user fa-2x' />
                            </a>
                        </div>
                        <div className="user-info-name-location">
                                <a id="user-id" href="http://localhost:5173/"><strong>Peter</strong></a> • <a href="http://localhost:5173/"><strong>1d</strong></a>
                            
                            <p>
                            <a href="http://localhost:5173/" id="location">London</a>
                            </p>
                        </div>
                        <div id="option-btn-container">
                            <button id="more-options"><i className='fa fa-ellipsis-h '></i></button>
                        </div>
                    </div>

                    {/* image */}
                    <div className='main-img-container'>
                        <img id="content-img" src="/sampleContentImage.JPG" alt="content-image"></img>
                    </div>

                    {/* buttons */}
                    <div className='main-button-container'>
                        <button className="content-btn" id="like-btn">
                            <svg>
                                <path id="like-icon" d="M 18 32, S 8 25 4 17 C 0 -2, 23 0, 18 10 C 18 -2, 36,0 32 17 M 32 17 S 28 24, 18 32" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <button className="content-btn" id="comment-btn">
                            <svg stroke="red">
                                <path id="comment-icon" d="M18 31 A12 12 0 0 1 18 4 A12 12 0 0 1 30 19 A 12 12 0 0 1 24 27 S41 40 21 31 Z" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <button className="content-btn" id="share-btn">
                            <svg>
                                <path id="share-icon" d="M5 6 34 6 18 32 16 16 5 6 M 16 16 34 6" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <div id="save-btn-spacing">
                            <button className="content-btn" id="save-btn">
                                <svg>
                                    <path id="save-icon" d="M5 32 5 6 34 6 34 32 19 20 Z" stroke="black" strokeWidth="2px" fill='white'></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='likes-count-container'>
                        <a># Likes</a>

                    </div>

                    <div className='main-comment-container'>
                        <span><strong>Peter</strong> asdasdasd</span>
                        
                    </div>
                    <div className='comment-container'>
                        <textarea 
                            ref={textAreaRef} 
                            id="comment-input" 
                            rows="1"
                            onChange={handleChange}
                            value={text}
                            placeholder='Add a comment...'>
                        
                        </textarea>
                        
                        <button id="post-comment-btn"
                                style={{display:`${text==``? "none" : "block"}`}}>
                            Post
                        </button>
                    </div>
                </div>
                <div className='main-content-box'>
                    <div className='user-info-bar'>
                        <div className="user-info-img-container">
                            <a href="http://localhost:5173/">
                                <i className='user-profile-img fa fa-user fa-2x' />
                            </a>
                        </div>
                        <div className="user-info-name-location">
                                <a id="user-id" href="http://localhost:5173/"><strong>Peter</strong></a> • <a href="http://localhost:5173/"><strong>1d</strong></a>
                            
                            <p>
                            <a href="http://localhost:5173/" id="location">London</a>
                            </p>
                        </div>
                        <div id="option-btn-container">
                            <button id="more-options"><i className='fa fa-ellipsis-h '></i></button>
                        </div>
                    </div>

                    {/* image */}
                    <div className='main-img-container'>
                        <img id="content-img" src="/sampleContentImage.JPG" alt="content-image"></img>
                    </div>

                    {/* buttons */}
                    <div className='main-button-container'>
                        <button className="content-btn" id="like-btn">
                            <svg>
                                <path id="like-icon" d="M 18 32, S 8 25 4 17 C 0 -2, 23 0, 18 10 C 18 -2, 36,0 32 17 M 32 17 S 28 24, 18 32" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <button className="content-btn" id="comment-btn">
                            <svg stroke="red">
                                <path id="comment-icon" d="M18 31 A12 12 0 0 1 18 4 A12 12 0 0 1 30 19 A 12 12 0 0 1 24 27 S41 40 21 31 Z" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <button className="content-btn" id="share-btn">
                            <svg>
                                <path id="share-icon" d="M5 6 34 6 18 32 16 16 5 6 M 16 16 34 6" stroke="black" strokeWidth="2px" fill='white'></path>
                            </svg>
                        </button>
                        <div id="save-btn-spacing">
                            <button className="content-btn" id="save-btn">
                                <svg>
                                    <path id="save-icon" d="M5 32 5 6 34 6 34 32 19 20 Z" stroke="black" strokeWidth="2px" fill='white'></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='likes-count-container'>
                        <a># Likes</a>

                    </div>

                    <div className='main-comment-container'>
                        <span><strong>Peter</strong> asdasdasd</span>
                        
                    </div>
                    <div className='comment-container'>
                        <textarea 
                            ref={textAreaRef} 
                            id="comment-input" 
                            rows="1"
                            onChange={handleChange}
                            value={text}
                            placeholder='Add a comment...'>
                        
                        </textarea>

                        
                        <button id="post-comment-btn"
                                style={{display:`${text==``? "none" : "block"}`}}>
                            Post
                        </button>
                    </div>

                </div>
                

            </div>
        </div>
    )
}

export default MainContent;
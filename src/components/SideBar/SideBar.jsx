import './SideBar.css'


function SideBar (){


    return(
        <div id="sidebar-container">
            <div className="sidebar-user-container">
                <div>
                    <a><i className='sidebar-user-img fa fa-user fa-2x'/></a>
                </div>
                <div className='id-AKA'>
                    <a className='sidebar-user-id'>User Id</a>
                    <span className="aka">AKA</span>
                </div>
                
                <div id='switch-btn-container'>
                    <button className="sidebar-btns" id="switch-btn">Switch</button>
                </div>
            </div>
            <div className='suggestions'>
                    <div id="suggestions-header">
                        <p>Suggested for you</p>
                        <a>See All</a>
                    </div>
                    <div id="suggestions-body">
                        <div className='sidebar-user-container'>
                            <div>
                                <a><i className='sidebar-user-img fa fa-user fa-2x'/></a>
                            </div>
                            <div className='id-AKA'>
                                <a className='sidebar-user-id'>User Id</a>
                                <span className="aka followers">Followed by</span>
                            </div>
                            <div id='switch-btn-container'>
                                <button className="sidebar-btns follow">Follow</button>
                            </div>
                        </div>
                        <div className='sidebar-user-container'>
                            <div>
                                <a><i className='sidebar-user-img fa fa-user fa-2x'/></a>
                            </div>
                            <div className='id-AKA'>
                                <a className='sidebar-user-id'>User Id</a>
                                <span className="aka followers">Followed by</span>
                            </div>
                            <div id='switch-btn-container'>
                                <button className="sidebar-btns follow">Follow</button>
                            </div>
                        </div>
                        <div className='sidebar-user-container'>
                            <div>
                                <a><i className='sidebar-user-img fa fa-user fa-2x'/></a>
                            </div>
                            <div className='id-AKA'>
                                <a className='sidebar-user-id'>User Id</a>
                                <span className="aka followers">Followed by</span>
                            </div>
                            <div id='switch-btn-container'>
                                <button className="sidebar-btns follow">Follow</button>
                            </div>
                        </div>
                        <div className='sidebar-user-container'>
                            <div>
                                <a><i className='sidebar-user-img fa fa-user fa-2x'/></a>
                            </div>
                            <div className='id-AKA'>
                                <a className='sidebar-user-id'>User Id</a>
                                <span className="aka followers">Followed by</span>
                            </div>
                            <div id='switch-btn-container'>
                                <button className="sidebar-btns follow">Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SideBar;

import React from 'react'

const LeftBar = () => {
    return (
        <div className="site-left-part">
        <div className="site-left-part-content">
            <span className="menu-open-trg"><i className="fal fa-align-left" /></span>
            <div className="left-part-menu">
                <br />
                <div className="menu-item">
                    <ul>
                        <li>
                            <a href="">
                                <i className="fas fa-globe-asia" /> &nbsp; General
                             </a>
                            <hr />
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-key" /> &nbsp; Keys
                            </a>
                            <hr />
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-terminal" /> &nbsp; API
                                 </a>
                            <hr />
                        </li>
                        <li><a href=""><i className="fas fa-user-friends" /> &nbsp; Team</a>
                            <hr />
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-lock" /> &nbsp; Security
                             </a>
                            <hr />
                        </li>
                        <li>
                            <a href="">
                                <i className="fas fa-arrow-alt-circle-up" /> &nbsp; Integrations
                                </a>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LeftBar;

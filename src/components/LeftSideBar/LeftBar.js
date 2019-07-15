import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faKey, faTerminal, faUserFriends, faLock, faArrowAltCircleUp, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

const LeftBar = () => {
    return (
        <div className="site-left-part">
            <div className="site-left-part-content">
                <span className="menu-open-trg">  <FontAwesomeIcon icon={faAlignLeft} /></span>
                <div className="left-part-menu">
                    <br />
                    <div className="menu-item">
                        <ul>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faGlobeAsia} /> &nbsp; General
                             </a>
                                <hr />
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faKey} /> &nbsp; Keys
                            </a>
                                <hr />
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faTerminal} /> &nbsp; API
                                 </a>
                                <hr />
                            </li>
                            <li><a href="">
                                <FontAwesomeIcon icon={faUserFriends} />&nbsp; Team</a>
                                <hr />
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faLock} /> &nbsp; Security
                             </a>
                                <hr />
                            </li>
                            <li>
                                <a href="">
                                    <FontAwesomeIcon icon={faArrowAltCircleUp} /> &nbsp; Integrations
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

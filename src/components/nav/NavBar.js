import { faChevronLeft, faCircleNotch, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Header } from './../../lib/index';
function NavBar() {
    return (
        <div className="Nav">
            <div className="main">
                <div className="left">
                    <div className="menu-text">
                        <Header icon={faChevronLeft} textPadding='1rem' iconColor={'white'} text="MENU" textColor={'white'} />
                    </div>
                </div><div className="center">
                    <div className="menu-logo"><FontAwesomeIcon icon={faCircleNotch} size="3x" className='back-icon' color='white' />
                    </div>
                </div><div className="right">
                    <div className="menu-search"><FontAwesomeIcon icon={faSearch} className='back-icon' color='white' />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NavBar;
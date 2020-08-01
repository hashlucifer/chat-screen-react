import { faHeart, faSms, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Header } from '../../lib';
import './user-menu.css';
function UserMenu() {

    const menu = [{
        icon: faHeart,
        iconColor: '#a2d593',
        text: "Activity"
    }, {
        icon: faUser,
        iconColor: '#35c3d9',
        text: "Profile"
    }, {
        icon: faSms,
        iconColor: '#f56a5c',
        text: "Messages",
        active: true
    }, {
        icon: faWrench,
        iconColor: '#7544c5',
        text: "Settings"
    }];

    return (
        <div className="UserMenu">
            <div className="profile" >
                <Header image={true} imageSrc="https://randomuser.me/api/portraits/men/15.jpg"
                    imageSize="8rem" alignment='vertical'
                    imageType='circle'
                    text={
                        <b >John Snowrain</b>
                    } textSize='1.3rem' textColor="grey"
                    textPadding='0.5rem'
                    subTextPadding='0.5rem'
                    subText="K P M G" />
            </div>
            <div className="menu" >
                {menu.map((m, i) => {
                    return <div className={`item${m.active ? ' active' : ''}`} key={i}>
                        <Header icon={m.icon} textPadding='1rem' iconSize='1x' iconColor={m.iconColor}
                            textSize='1rem' text={m.active ? <b>{m.text}</b> : m.text} textColor={'grey'} />
                    </div>
                })}

            </div>
        </div>
    );
}

export default UserMenu;
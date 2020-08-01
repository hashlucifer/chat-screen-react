// import { faPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Messages } from '../../lib';
import './chatbox.css';

function ChatBox() {

    return (
        <div className="ChatBoxContainer" >
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/16.jpg'
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div >
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/17.jpg'
                    reverse={true}
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div>
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/16.jpg'
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div >
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/17.jpg'
                    reverse={true}
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div>
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/16.jpg'
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div >
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/17.jpg'
                    reverse={true}
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div>
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/16.jpg'
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div >
            <div className="ChatBox">
                <Messages imageSize='2rem' imageType='circle'
                    imageSrc='https://randomuser.me/api/portraits/men/17.jpg'
                    reverse={true}
                    messages={[{ text: "Hey Hi" },
                    { text: "Welcome to Jungle" },
                    { text: "Killer stream is on and on and on." }]} />
            </div>
        </div >
    );
}

export default ChatBox;
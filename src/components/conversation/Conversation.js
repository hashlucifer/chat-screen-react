import { faPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ChatBox from '../chatbox/ChatBox';
import './conversation.css';
function Conversation() {

    return (
        <div className="Conversation">
            <div className="nav">
                <b className='text'>Your Conversation</b>
                <FontAwesomeIcon icon={faTrash} color={'grey'} />
            </div>
            <div className="chat-box">
                <ChatBox />
            </div>
            <div className="type">
                <span className='text' >
                    <span className='contentEditable' contentEditable='true'>Reply to this conversation...</span>
                </span>
                <span className='icon-space'>
                    <span className='icon'><FontAwesomeIcon icon={faPlane} color={'white'} /></span>
                </span>
            </div>
        </div >
    );
}

export default Conversation;
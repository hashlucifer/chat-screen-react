// import { faPlane, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './messages.css';

function Messages({ imageSrc, reverse, imageType, imageSize, messages }) {
  let imageStyles = {
    width: imageSize || '',
    borderRadius: imageType === 'circle' ? '50%' : 0,
  }
  messages = messages || [];
  return (
    <div className={`Messages${reverse ? ' reverse' : ''}`}>
      <div className="image">
        <img src={imageSrc} alt='' style={imageStyles} />
      </div>
      <div className='texts'>
        {messages.map((message, i) => {
          return <div className='text' key={i}>
            {message.text}
          </div>
        })}
      </div>
    </div >
  );
}

export default Messages;
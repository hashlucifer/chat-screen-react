import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Header } from '../../lib';
import './chat-list.css';

function ChatList() {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=50&nat=us').then(r => r.json()).then((d) => setUserList(d.results));
    }, []);

    const getUserStatus = function (i) {
        const number = (i * Math.random() * 100) % 3;
        const arr = [{ color: '#35c3d9', status: 'online' }, { color: '#dee721', status: 'active 5min' }, { color: '#f56a5c', status: 'offline' }];
        return arr[Number.parseInt(number)];
    };

    return (
        <div className="ChatList">
            <div className="search">
                <Header icon={faSearch} textPadding='1rem' iconSize='1x' iconColor={'grey'}
                    textSize='1rem' text={'Search Contacts'} textColor={'grey'} />
            </div>
            <div className="contacts">
                {userList.map((user, i) => {
                    const userStatus = getUserStatus(i);
                    return <div className={`contact${i === 1 ? ' active' : ''}`} key={i}>
                        <Header image={true} imageSrc={user.picture.large}
                            imageSize="2.5rem" imageType='circle'
                            textPadding='0.8rem'
                            text={<b>{user.name.first + ' ' + user.name.last}</b>} textSize='0.9rem' textColor="#888888"
                            subText={
                                <Header icon={faCircle} iconColor={userStatus.color} text={userStatus.status} iconSize='xs' textPadding='0.3rem'
                                    textColor='grey' textSize='0.8rem' />
                            } />
                    </div>
                })}
            </div>
        </div >
    );
}

export default ChatList;
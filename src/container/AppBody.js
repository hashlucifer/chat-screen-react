import React from 'react';
import ChatList from '../components/chat-list/ChatList';
import Conversation from '../components/conversation/Conversation';
import UserMenu from '../components/user-menu/UserMenu';

function AppBody() {
    return (
        <div className="AppBody">
            <div className="UserNavigation">
                <UserMenu />
            </div>
            <div className="UserSearch">
                <ChatList />
            </div>
            <div className="UserConversation">
                <Conversation />
            </div>
        </div>
    );
}

export default AppBody;
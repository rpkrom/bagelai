import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = () => {
  return (
    <div className="chatList">
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create New Chat</Link>
        <Link to="/">Explore Bagel AI</Link>
        <Link to="/">Contact</Link>
        <hr/>
        <span className="title">RECENT CHATS</span>
        <div className="list">            
            <Link to="/">Chat 1</Link>
            <Link to="/">Chat 2</Link>
            <Link to="/">Chat 3</Link>  
        </div>
        <hr/>
        <div className="upgrade">
            <img src="/bagels-med-white.png" alt="" />
            <div className="texts">
                <span>Upgrade to Bagel AI Pro</span>
                <span>Get unlimited acces to all features!</span>
            </div>
        </div>
    </div>
  );
};

export default ChatList;
import Logo from "../../assets/logo.png";
import ContactIcon from "../../assets/contact.png";
import PrivateChatIcon from "../../assets/private.png";
import GroupChatIcon from "../../assets/group.png";
import SenderIcon from "../../assets/sender.png";
import RecipientIcon from "../../assets/recipient.png";
import SearchIcon from "../../assets/search.png";
import SendIcon from "../../assets/send.png";
import "./style.css";

function Chat() {
  return (
    <div id="chat-app-container">
      <div id="chat-header">
        <div id="chat-logo">
          <img id="chat-logo-image" src={Logo} alt="QuickChat logo" />
          <h2>QuickChat</h2>
        </div>
        <div id="user-info">
          <p>User 1</p>
          <img
            src={SenderIcon}
            id="user-avatar"
            alt="User avatar"
            onClick={() => {
              window.location.reload();
              localStorage.removeItem("authtoken");
            }}
          />
        </div>
      </div>
      <div id="main-content">
        <div id="navigation-panel">
          <img src={ContactIcon} className="nav-icon" alt="Contacts" />
          <img src={PrivateChatIcon} className="nav-icon" alt="Private Chat" />
          <img src={GroupChatIcon} className="nav-icon" alt="Group Chat" />
        </div>
        <div id="content">
          <div id="user">
            <div id="search-bar">
              <input id="search-input" type="text" placeholder="Search Here" />
              <img src={SearchIcon} className="search-icon" alt="Search" />
            </div>
            <div id="user-list">
              <div id="user-list-data">
                <img src={SenderIcon} id="user-list-data-icon" />
                <p id="user-list-data-name">User 1</p>
              </div>
              <div id="user-list-data">
                <img src={RecipientIcon} id="user-list-data-icon" />
                <p id="user-list-data-name">User 2</p>
              </div>
            </div>
          </div>
          <div id="chat">
            <div id="chat-user">
              <img src={RecipientIcon} id="chat-user-icon" />
              <p>User 2</p>
              <div id="chat-user-offline" />
            </div>
            <div id="chat-message">
              <div className="message sender">
                <p>Hello, how are you?</p>
              </div>
              <div className="message receiver">
                <p>I'm doing well, thank you!</p>
              </div>
            </div>
            <div id="chat-input">
              <input
                type="text"
                id="chat-input-box"
                placeholder="Enter your message here"
              />
              <img src={SendIcon} id="chat-input-send-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;

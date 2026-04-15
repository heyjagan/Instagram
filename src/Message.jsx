import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Message() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const navigate = useNavigate();
  const users =[
    {id:1, name: "john_doe"},
    {id:2,name:"priya_travels"}
  ];

  const {username}=useParams();
  <h3>{username}</h3>

  const sendMessage = () => {
    if (text.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      message: text,
      time: new Date().toLocaleTimeString()
    };

    setMessages([...messages, newMessage]);
    setText("");
  };

  return (
    <div className="chatContainer">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={msg.sender === "me" ? "myMessage" : "otherMessage"}
        >
          <p>{msg.message}</p>
          <span>{msg.time}</span>
        </div>
      ))}

          <div>
      <h2>Messages</h2>

      {users.map(user => (
        <div
          key={user.id}
          onClick={() => navigate(`/messages/${user.name}`)}
          style={{cursor:"pointer"}}
        >
          {user.name}
        </div>
      ))}
    </div>

      <div className="chatFooter">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Message;

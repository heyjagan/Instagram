import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="m-3 position-fixed">
      <div className="d-flex flex-column gap-3">

        <img
          className="logo-text"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3GOa09_CQMYmfIdDYXaBzmcVTpSuvTeSpQ&s"
          alt="logo"
        />

        <div onClick={() => navigate("/")}>
          <i className="bi bi-house-door"></i> Home
        </div>

        <div onClick={() => navigate("/search")} style={{ cursor: "pointer" }}>
          <i className="bi bi-search"></i> Search
        </div>

        <div>
          <i className="bi bi-compass"></i> Explore
        </div>

        <div>
          <i className="bi bi-play-btn"></i> Reels
        </div>

        <div onClick={() => navigate("/message")}>
          <i className="bi bi-chat-dots"></i> Message
        </div>

        <div>
          <i className="bi bi-heart"></i> Notification
        </div>

        <div>
          <i className="bi bi-plus-square"></i> Create
        </div>

        <div onClick={() => navigate("/profile")}>
          <i className="bi bi-person-circle"></i> Profile
        </div>

      </div>
    </div>
  );
}

export default Sidebar;

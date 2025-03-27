import React from "react";
import "./FriendsPage.module.css";

const BottomNavigation: React.FC = () => {
  return (
    <nav className="bottomNav">
      <button className="navButton">
        <i className="homeIcon" />
      </button>
      <button className="navButton">
        <i className="searchIcon" />
      </button>
      <button className="navButton">
        <i className="smileIcon" />
      </button>
      <button className="navButton">
        <i className="chartIcon" />
      </button>
      <button className="navButton">
        <i className="userIcon" />
      </button>
    </nav>
  );
};

export default BottomNavigation;

import React from "react";
import "./FriendsPage.module.css";

interface AddFriendCardProps {
  name: string;
  image: string;
}

const AddFriendCard: React.FC<AddFriendCardProps> = ({ name, image }) => {
  return (
    <article className="addFriendCard">
      <div className="friendInfo">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="profilePic"
        />
        <h3 className="suggestedFriendName">{name}</h3>
      </div>
      <button className="addButton">
        <i className="plusIcon" />
      </button>
    </article>
  );
};

export default AddFriendCard;

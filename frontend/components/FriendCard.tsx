import React from "react";
import "./FriendsPage.module.css";

interface FriendCardProps {
  name: string;
  task: string;
  score: number;
  image: string;
}

const FriendCard: React.FC<FriendCardProps> = ({
  name,
  task,
  score,
  image,
}) => {
  return (
    <article className="friendCard">
      <div className="friendInfo">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="profilePic"
        />
        <div className="friendDetails">
          <h2 className="friendName">{name}</h2>
          <div className="taskInfo">
            <span>{task}</span>
            <i className="flameIcon" />
            <span>{score}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FriendCard;

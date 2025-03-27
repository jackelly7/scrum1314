import React from "react";
import "./FriendsPage.module.css";
import FriendCard from "./FriendCard";

const friendsData = [
  {
    name: "Tanner Skousen",
    task: "Write new pandas song",
    score: 365,
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
  {
    name: "Mark Keith",
    task: "Go on a walk",
    score: 45,
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
  {
    name: "Taylor Wells",
    task: "Hack learning suite and give everyone an A",
    score: 0,
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
];

const FriendsList: React.FC = () => {
  return (
    <section>
      <h1 className="sectionTitle">Friends</h1>
      <div className="friendsList">
        {friendsData.map((friend, index) => (
          <FriendCard
            key={index}
            name={friend.name}
            task={friend.task}
            score={friend.score}
            image={friend.image}
          />
        ))}
      </div>
    </section>
  );
};

export default FriendsList;

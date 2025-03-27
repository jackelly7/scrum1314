import React from "react";
import "./FriendsPage.module.css";
import AddFriendCard from "./AddFriendCard";

const suggestedFriends = [
  {
    name: "Laura Cutler",
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
  {
    name: "Spencer Hilton",
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
  {
    name: "Greg Anderson",
    image: "https://placehold.co/100x100/e6e6e6/e6e6e6",
  },
];

const AddFriendsList: React.FC = () => {
  return (
    <section className="addFriendsSection">
      <h2 className="sectionTitle">Add Friends</h2>
      <div className="addFriendsList">
        {suggestedFriends.map((friend, index) => (
          <AddFriendCard key={index} name={friend.name} image={friend.image} />
        ))}
      </div>
    </section>
  );
};

export default AddFriendsList;

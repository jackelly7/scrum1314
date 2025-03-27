"use client";
import React from "react";
import "./FriendsPage.module.css";
import SearchBar from "../components/SearchBar";
import FriendsList from "../components/FriendsList";
import AddFriendsList from "../components/AddFriendsList";
import BottomNavigation from "../components/BottomNavigation";

const FriendsPage: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <main className="pageContainer">
        <SearchBar />
        <FriendsList />
        <AddFriendsList />
        <BottomNavigation />
      </main>
    </>
  );
};

export default FriendsPage;

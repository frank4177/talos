import PostList from "@/components/Lists/PostList/PostList";
import PostWriter from "@/components/PostWriter/PostWriter";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <PostWriter />
        <PostList />
      </div>
    </>
  );
};

export default Dashboard;

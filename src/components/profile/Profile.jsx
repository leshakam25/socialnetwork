import React from "react";
import Title from "./title/title";
import PostsContainer from "./myPosts/PostsContainer";

function Profile(props) {
  return (
    <div>
      <Title />
      <PostsContainer store={props.store} />
    </div>
  );
}

export default Profile;

import React from "react";
import classes from "./profile.module.css";
import Posts from "./myPosts/Posts";
import Title from "./title/title";

function Profile(props) {
  return (
    <div>
      <Title />
      <Posts
        postData={props.profilePage.postData}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
}

export default Profile;

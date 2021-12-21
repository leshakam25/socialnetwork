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
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
}

export default Profile;

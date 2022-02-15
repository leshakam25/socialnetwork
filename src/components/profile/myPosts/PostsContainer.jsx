import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import Posts from "./Posts";

function PostsContainer(props) {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Posts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={props.postData}
      newPostText={state.newPostText}
    />
  );
}
export default PostsContainer;

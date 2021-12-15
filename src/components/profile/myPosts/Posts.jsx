import React from "react";
import Post from "./post/Post";
import classes from "./Posts.module.css";

function Posts(props) {
  let postsElements = props.postData.map((p) => (
    <Post name={p.names} likeCount={p.likeCount} message={p.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updateNewPostText();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    {
      props.updateNewPostText(text);
    }
  };

  return (
    <div className={classes.posts}>
      <div className={classes.area}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add</button>
        <button>Clear</button>
      </div>
      <div className={classes.postsItem}>
        <h2>My posts</h2>
        {postsElements}
      </div>
    </div>
  );
}
export default Posts;

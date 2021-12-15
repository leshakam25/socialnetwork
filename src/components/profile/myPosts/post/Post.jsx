import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <img
        src="https://pbs.twimg.com/profile_images/1153463025061552128/2PIAbE_k_400x400.jpg"
        alt=""
      />
      <div>{props.name}</div>
      <div className={classes.mes}>{props.message}</div>
      <div className={classes.likes}>
        {props.likeCount}
        <button>Like</button>
      </div>
    </div>
  );
}
export default Post;

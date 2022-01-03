import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/state";
import classes from "./../Dialogs.module.css";

function Chat(props) {
  let newMessage = React.createRef();

  let newMessageBody = props.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.current.value;
    let action = updateNewMessageBodyCreator(body);
    props.dispatch(action);
  };

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  return (
    <div className={classes.chat}>
      <div className={classes.chatWindow}></div>
      <div className={classes.chatFoot}>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          ref={newMessage}
        />
        <button onClick={onSendMessageClick}>Send</button>
      </div>
    </div>
  );
}

export default Chat;

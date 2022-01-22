import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer";

function Dialogs(props) {
  let state = props.store.getState().dialogs;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message text={m.text} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    if (newMessageBody === "") alert("Введено пустое сообщение");
    else props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialogs;

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: 0, name: "Jimmy" },
    { id: 1, name: "Bobby" },
    { id: 2, name: "Tommy" },
    { id: 3, name: "Katrin" },
    { id: 4, name: "Victoria" },
  ],
  messagesData: [
    { id: 0, text: "HI!" },
    { id: 1, text: "nice" },
    { id: 2, text: "good" },
    { id: 3, text: "bye" },
    { id: 4, text: "lets start" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({
        id: state.messagesData.length + 1,
        text: body,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text,
});

export default dialogsReducer;

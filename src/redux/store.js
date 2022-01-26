import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profile: {
      postData: [
        {
          names: "Danny",
          id: 0,
          message: "Hi, bird, how are you?!",
          likeCount: "15",
        },
        { names: "Danny", id: 1, message: "Lets fire", likeCount: "10" },
      ],
    },
    dialogs: {
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
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
// store - OOP

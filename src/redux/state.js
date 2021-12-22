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
    },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profile.newPostText,
        likeCount: 0,
      };

      this._state.profile.postData.push(newPost);
      this._state.profile.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profile.newPostText = action.text;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    text: text,
  };
};

export default store;
window.store = store;

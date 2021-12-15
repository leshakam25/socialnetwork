let rerenderEntireTree = () => {};

let state = {
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
};

let store = {};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profile.newPostText,
    likeCount: 0,
  };

  state.profile.postData.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;

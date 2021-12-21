import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/nav/nav";
import Profile from "./components/profile/Profile";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/Profile"
            element={
              <Profile
                profilePage={props.state.profile}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/Dialogs"
            element={
              <Dialogs
                dialogsData={props.state.dialogs.dialogsData}
                messagesData={props.state.dialogs.messagesData}
              />
            }
          />
          <Route path="/News" element={<News />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

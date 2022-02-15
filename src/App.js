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
          <Route path="/profile" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogs={props.state.dialogs}
                dispatch={props.dispatch}
                store={props.store}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";
import '@cometchat/chat-uikit-react/css-variables.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';



function App() {

  const appID = "273905bfdb9fdf51"; // your App ID
  const region = "in";
  const authKey = "221e328cea62ce08ba104375d8271a9b2d8d3337";
  const [cometChatInitialized, setCometChatInitialized] = useState(false);

  useEffect(() => {
    const initCometChat = async () => {
      try {
        const UIKitSettings = new UIKitSettingsBuilder()
          .setAppId(appID)
          .setRegion(region)
          .setAuthKey(authKey)
          .subscribePresenceForAllUsers()
          .build();

        await CometChatUIKit.init(UIKitSettings); // <== Important: await here!
        console.log("✅ CometChat initialized successfully!");
        setCometChatInitialized(true);
      } catch (error) {
        console.log("❌ CometChat initialization failed:", error);
      }
    };

    initCometChat();

  }, []);

  return (
    <div className="App">
      <div className="bg-slate-950 h-screen">
        {!cometChatInitialized ? (
          <div className="loading-screen">
            <h2>Loading Chat Services...</h2>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/chat" element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            } />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App

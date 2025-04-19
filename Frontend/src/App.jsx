import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

function App() {

  return (
    <>
      <div className="App">
        <div className="bg-slate-950 h-screen">
          {/* <div className="m-3">
            <div className="justify-content-center gap-2 flex" variant="tabs" defaultActiveKey="/">
              <div>
                <Link className="text-gray-600 bg-gray-600 shadow-lg btn" as={Link} to="/">Login</Link>
              </div>
              <div>
                <Link className="text-gray-600 bg-slate-600 shadow-lg btn" as={Link} to="/signup">Sign In</Link>
              </div>
            </div>
          </div> */}
          <div >
            <Routes>
              <Route path="/" element={<LoginPage />} exact />
              <Route path="/signup" element={<SignUpPage />} exact />
              <Route path="/chat" element={<ChatPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

import React from "react";
import Search from "./Search";
import Users from "./Users";
// import {
//     CometChatConversations
// } from "@cometchat/chat-uikit-react";

function Left() {

    return (
        <>

            <div className="bg-black h-screen text-white justify-content-center align-text-center">
                <h2 className="font-bold text-3xl px-4 py-1 m-3">Chats</h2>
                <Search />
                <hr />
                <div>
                    <Users></Users>
                </div>

            </div>
        </>
    );
}

export default Left;

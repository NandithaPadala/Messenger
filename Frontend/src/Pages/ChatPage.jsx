import React from "react";
import Left from "../components/left/Left";
import LogOut from "../components/left1/Logout";
import Right from "../components/right/Right";


function ChatPage() {
    return (
        <>
            <div className="flex h-screen">
                <div className="w-[3%] flex-col border-r border-gray-700">
                    <LogOut />
                </div>

                <div className="w-[27%] flex flex-col border-r border-gray-700">
                    <Left />
                </div>

                <div className="w-[70%] flex flex-col">
                    <Right />
                </div>
            </div>
        </>
    );
}
export default ChatPage
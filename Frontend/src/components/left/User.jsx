import { CometChat } from "@cometchat/chat-sdk-javascript";
import React from "react";

function User() {

    const UID = "cometchat-uid-1";

    return (
        <>
            <div className="mt-3">
                <div className="flex items-center space-x-4 px-4 py-2 hover:bg-slate-600  duration-300 cursor-pointer">
                    <div className="w-14 avatar avatar-online rounded-full">

                        <img
                            className="rounded-full w-full"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            alt="User Avatar"
                        />
                    </div>
                    <div className="relative mt-2">
                        {
                            CometChat.getUser(UID)
                                .then(
                                    user => {
                                        <h6 className="font-bold text-white">{user}</h6>
                                    }
                                )
                                .catch(error => {
                                    console.log("Error while getting User from ComerChat UI", error);
                                })
                        }

                        <span className="text-gray-300 text-sm">ankitpathak@gmail.com</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User
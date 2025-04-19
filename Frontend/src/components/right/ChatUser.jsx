import React from "react";

export default function ChatUser() {
    return (
        <>
            <div className="p-2 flex space-x-3 h-[8hv] bg-gray-900 hover:bg-gray-600 duration-300">
                <div className="w-14 avatar avatar-online rounded-full">
                    <img
                        className="rounded-full w-full"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="User Avatar"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div className="text-sm text-white font-bold">Ankit Pathak</div>
                    <span className="text-sm">Online</span>
                </div>
            </div>
        </>
    );
}

import React from "react";
// import { RxAvatar } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";

function Logout() {
    return (
        <>
            {/* <Col xs={1} className="bg-slate-950 border border-white text-white d-flex border flex flex-col justify-end"> */}
            <div className="flex  flex-col h-screen bg-slate-950 text-white justify-end">
                <div>
                    <div className="input-group shadow-lg justify-content-center align-items-center">
                        {/* <RxAvatar className="text-4xl p-1 mb-1 hover:bg-gray-600 rounded duration-300"/> */}
                        <IoMdSettings className="text-4xl p-1 mb-2 hover:bg-gray-600 rounded duration-300" />
                        <div className="avatar p-1 mb-2">
                            <div className="w-8 rounded-full hover: cursor-pointer">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <TbLogout2 className="text-4xl p-1 mb-2 hover:bg-gray-600 rounded duration-300 cursor-pointer" />
                        
                    </div>
                </div>

            </div>
        </>
    );
}
export default Logout
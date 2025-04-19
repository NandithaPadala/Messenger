import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

function Right() {
    return (
        <>
            {/* <Col xs={8} id="right" className=" border border-white text-white d-flex flex-col border">
                <div className="bg-slate-800 flex">
                    <div className="avatar m-2">
                        <div className="ring-primary ring-offset-base-100 w-15 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div>
                        <div className="flex px-4 py-6 font-bold">Ankit Pathak</div>
                    </div>
                    <div className="justify-end">
                        <img target="_blank" src="https://icons8.com/icon/60021/video-call" alt="Vedio Call" />
                    </div>
                </div>
            </Col> */}
            {/* <Col xs={8} className="p-0 h-screen border border-white text-white flex flex-col bg-slate-950">
                <ChatUser></ChatUser>
                <Messages></Messages>
                <div>
                    <Type></Type>
                </div>

            </Col> */}
            <div className="h-screen bg-slate-950 text-white">
                <div className="top-0">
                    <ChatUser />
                </div>

                <div className="shrink-0">
                    <Messages />
                </div>

                <div className="align-center shrink-0">
                    <Type />
                </div>
            </div>
        </>
    );
}
export default Right
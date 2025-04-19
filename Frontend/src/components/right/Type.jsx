// import React from "react";
// import { IoSendSharp } from "react-icons/io5";
// import { MdAttachFile } from "react-icons/md";

// export default function Type() {
//     return (
//         <>
//             {/* <div className="flex space-x-1">
//                 <div className="flex p-1">
//                     <input type="text"
//                         placeholder="Type here"
//                         className="input text-dark w-full" />

//                 </div>
//                 <span className="flex bg-slate-950 text-3xl">
//                     <IoSendSharp className="text-white m-2" />
//                 </span>

//             </div> */}
//             <div className="flex mt-3 p-2">
//                 <div className="flex input-group shadow-lg">
//                     <span className="input-group-text border-start-0" >
//                         <button className="rounded-full">
//                             <MdAttachFile />
//                         </button>
//                     </span>
//                     <input
//                         type="text"
//                         className="input text-dark w-[95%] sm:w-[85%]"
//                         placeholder="Type here"
//                     />
//                     <span className="input-group-text border-end-0" >
//                         <button className="hover:bg-gray rounded-full">
//                             <IoSendSharp />
//                         </button>
//                     </span>
//                 </div>
//             </div>
//         </>
//     );
// }

import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

export default function Type() {
    return (
        <div className="flex justify-center m-2 p-2">
            {/* <div className="flex items-center w-full max-w-2xl shadow-lg px-2 py-2 bg-white"> */}
                {/* Attach File Icon */}
                {/* <button className="text-xl text-gray-500 hover:text-black">
                    <MdAttachFile />
                </button> */}

                {/* Input Field */}
                {/* <input
                    type="text"
                    className="flex-grow px-4 py-2 w-[100%] focus:outline-none text-gray-800"
                    placeholder="Type here"
                /> */}

                {/* Send Icon */}
                {/* <button className="hover:bg-white ">
                    <IoSendSharp className="text-2xl"/>
                </button> */}


                <div className="mb-3 flex items-center max-w-1xl w-full shadow-lg bg-slate-200 rounded-md p-2">
                    <MdAttachFile className="text-2xl text-slate-800 hover:bg-slate-400 rounded-lg transition cursor-pointer"/>
                    <input
                        type="password"
                        className="w-full bg-transparent outline-none"
                        placeholder="Password"
                    />
                    <IoSendSharp className="text-2xl text-slate-800 cursor-pointer" />
                </div>
            {/* </div> */}
        </div>
    );
}

// import React from 'react';
// import { BiSolidUserCircle } from "react-icons/bi";
// import { TbLockPassword } from "react-icons/tb";
// import { Link } from "react-router-dom";

// function LoginPage() {
//     return (
//         <>
//             <div className="flex items-center justify-center min-h-screen bg-slate-950">
//                 <div className="bg-white border border-2 rounded-3 w-[30%] m-auto p-4">
//                     <div className="">
//                         <form onSubmit="">
//                             <div className="input-group shadow-lg ml-0 mb-3 border-2 rounded" >
//                                 <span className="input-group-text border-start-0" >
//                                     <BiSolidUserCircle />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="input w-[90%] text-white bg-slate-950"
//                                     placeholder="Username"
//                                 />
//                             </div>
//                             <div className="input-group shadow-lg ml-0 mb-3 border-2 rounded">
//                                 <span className="input-group-text border-start-0" >
//                                     <TbLockPassword />
//                                 </span>
//                                 <input
//                                     type="password"
//                                     className="input w-[90%] text-white bg-slate-950"
//                                     placeholder="Password"
//                                 />
//                             </div>
//                             <div className="justify-content-center flex mb-3">
//                                 <button  className="bg-gray-950">Login</button>
//                             </div>
//                             <div className="flex justify-content-center mb-1 mt-2">
//                                 Do not have account
//                                 <Link as={Link} to="/signup">
//                                     Register </Link>
//                                 here
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default LoginPage


import React from 'react';
import { BiSolidUserCircle } from "react-icons/bi";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[30%] p-6">
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* Username Input */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <BiSolidUserCircle className="text-gray-800 mr-2 text-xl" />
                        <input
                            type="text"
                            className="w-full bg-transparent outline-none"
                            placeholder="Username"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <TbLockPassword className="text-gray-800 mr-2 text-xl" />
                        <input
                            type="password"
                            className="w-full bg-transparent outline-none"
                            placeholder="Password"
                        />
                    </div>

                    {/* Login Button */}
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white rounded-md hover:bg-black duration-300 transition cursor-pointer"
                        >
                            Login
                        </button>
                    </div>

                    {/* Redirect to Register */}
                    <div className="text-center text-sm text-gray-700">
                        Don’t have an account?
                        <Link to="/signup" className="text-blue-700 hover:underline ml-1">
                            Register
                        </Link>
                        here
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;

// import React from 'react';
// import { BiSolidUserCircle } from "react-icons/bi";
// import { TbLockPassword } from "react-icons/tb";


// const SignUpPage = () => {
//     return (
//         <>
//             <div className="flex items-center justify-center min-h-screen bg-slate-950">
//                 <div className="card border-2 border rounded-3 w-[30%] m-auto p-4">
//                     <div className="card-head">
//                         <form onSubmit="">
//                             <div className="input-group shadow-lg mb-3">
//                                 <input
//                                     type="text"
//                                     className="input w-[100%]"
//                                     placeholder="First Name"
//                                 />
//                             </div>
//                             <div className="input-group shadow-lg mb-3">
//                                 <input
//                                     type="text"
//                                     className="input w-[100%]"
//                                     placeholder="Last Name"
//                                 />
//                             </div>

//                             <div className="input-group shadow-lg mb-3">
//                                 <input
//                                     type="Email"
//                                     className="input w-[100%]"
//                                     placeholder="Email "
//                                 />
//                             </div>
//                             <div className="input-group shadow-lg mb-3">
//                                 <span className="input-group-text border-start-0" >
//                                     <BiSolidUserCircle />
//                                 </span>
//                                 <input
//                                     type="text"
//                                     className="input w-[90%]"
//                                     placeholder="Username"
//                                 />
//                             </div>
//                             <div className="input-group shadow-lg mb-3">
//                                 <span className="input-group-text border-start-0" >
//                                     < TbLockPassword />
//                                 </span>
//                                 <input
//                                     type="password"
//                                     className="input w-[90%]"
//                                     placeholder="Password"
//                                 />
//                             </div>
//                             <div className="input-group shadow-lg mb-2">
//                                 <span className="input-group-text border-start-0" >
//                                     < TbLockPassword />
//                                 </span>
//                                 <input
//                                     type="password"
//                                     className="input w-[90%]"
//                                     placeholder="Confirm Password"
//                                 />
//                             </div>
//                             <div className="justify-content-center flex m-3">
//                                 <button type="submit" className="bg-gray-500 justify-content-center">Signup</button>
//                             </div>
//                             <div className="flex justify-content-center mb-3">
//                                 Already have an account <span><a href="/"> Login </a></span>here
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }

// export default SignUpPage


import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

function SignupPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[30%] p-6">
                <form onSubmit={(e) => e.preventDefault()}>
                    {/* First Name */}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="First Name"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <input
                            type="text"
                            className="w-full p-2 rounded-md bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Last Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full p-2 rounded-md bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Email"
                        />
                    </div>

                    {/* Username with Icon */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <BiSolidUserCircle className="text-gray-600 mr-2 text-xl" />
                        <input
                            type="text"
                            className="w-full bg-transparent outline-none"
                            placeholder="Username"
                        />
                    </div>

                    {/* Password with Icon */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <TbLockPassword className="text-gray-600 mr-2 text-xl" />
                        <input
                            type="password"
                            className="w-full bg-transparent outline-none"
                            placeholder="Password"
                        />
                    </div>

                    {/* Confirm Password with Icon */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <TbLockPassword className="text-gray-600 mr-2 text-xl" />
                        <input
                            type="password"
                            className="w-full bg-transparent outline-none"
                            placeholder="Confirm Password"
                        />
                    </div>

                    {/* Signup Button */}
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white rounded-md hover:bg-slate-600 duration-300 transition cursor-pointer"
                        >
                            Signup
                        </button>
                    </div>

                    {/* Link to Login */}
                    <div className="text-center text-sm">
                        Already have an account?
                        <Link to="/" className="text-blue-600 hover:underline ml-1">
                            Login
                        </Link>
                        here
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;

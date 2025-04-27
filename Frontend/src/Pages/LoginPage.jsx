// import axios from 'axios';
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import React from 'react';
import { useForm } from "react-hook-form";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";



function LoginPage() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const { uid } = data;

        if (uid) {
            await CometChatUIKit.login(uid)
                .then((user) => {
                    console.log("✅ Login Successful", user);
                    localStorage.setItem("user", JSON.stringify(user));
                    navigate("/chat");
                })
                .catch((error) => {
                    console.log("❌ Login Error", error);
                });
        } else {
            console.log("⚠️ UID is empty. Please enter UID.");
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[30%] p-6">

                <div className="flex items-center justify-center mb-4 text-black font-bold">
                    <p>Messenger</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Email Input */}
                    {errors.email && <span className="text-red-600 text-sm"> ***This field is required</span>}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <MdOutlineMail className="text-gray-800 mr-2 text-xl" />
                        <input
                            {...register("uid", { required: true })}
                            type="text"
                            className="w-full bg-transparent outline-none"
                            placeholder="UID"
                        />
                    </div>


                    {/* Login Button */}
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-white bg-black rounded-md hover:bg-black duration-300 transition cursor-pointer"
                        >
                            Login
                        </button>
                    </div>
                </form>

                {/* Redirect to Register */}
                <div className="text-center text-sm text-gray-700">
                    Don’t have an account?
                    <Link to="/signup" className="text-blue-700 hover:underline ml-1">
                        Register
                    </Link>
                    here
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

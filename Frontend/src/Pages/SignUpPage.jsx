// import axios from "axios";
import React from "react";
// import { useForm } from "react-hook-form";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";


function SignupPage() {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const password = watch("password","");
    // // const confirmPassword = watch("confirmPassword", "");


    // const onSubmit = data => {
    //     const userInfo = {
    //         name: data.name,
    //         email :data.email,
    //         password : data.password,
    //         confirmPassword : data.confirmPassword
    //     };
    //     axios.post("http://localhost:5002/user/signup", userInfo).
    //     then((response) => {
    //         console.log(response.data);
    //         if(response.data){
    //             alert("SignUp Successful ! You can now log in");
    //         }
    //         localStorage.setItem("messanger", JSON.stringify(response.data));
    //     }).
    //     catch((error) => {
    //         if(error.response){
    //             alert("Error: "+ error.response.data.error);
    //         }
    //     });
    // }

    // const validatePasswordMatch = (value) => {
    //     return value === password || "Password and Confirm password does'nt match";
    // }

    return (


        <div className="flex items-center justify-center min-h-screen bg-slate-950">
            <div className="bg-white rounded-2xl shadow-lg w-[90%] md:w-[30%] p-6">

                <div className="flex items-center justify-center mb-4 text-black font-bold">
                    <p>Messenger</p>
                </div>
                <form
                    onSubmit="{handleSubmit(onSubmit)}">
                    {/* Full Name */}
                    <div className="mb-4">
                        {/* {errors.fullname && <span className="text-red-600 text-sm"> ***This field is required</span>} */}
                        <input
                            // {...register("name", { required: true })}
                            type="text"
                            className="w-full p-2 rounded-md bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Full Name"
                        />
                    </div>

                    {/* Email */}
                    {/* {errors.email && <span className="text-red-600 text-sm"> ***This field is required</span>} */}

                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <MdOutlineMail className="text-gray-800 mr-2 text-xl" />
                        <input
                            // {...register("email", { required: true })}
                            type="email"
                            className="w-full bg-transparent outline-none"
                            placeholder="Email"
                        />
                    </div>

                    {/* Username with Icon */}
                    {/* {errors.username && <span className="text-red-600 text-sm"> ***This field is required</span>} */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <BiSolidUserCircle className="text-gray-600 mr-2 text-xl" />
                        <input
                            // {...register("username", { required: true })}
                            type="text"
                            className="w-full bg-transparent outline-none"
                            placeholder="Username"
                        />
                    </div>

                    {/* Password with Icon */}
                    {/* {errors.password && <span className="text-red-600 text-sm"> ***This field is required</span>} */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <TbLockPassword className="text-gray-600 mr-2 text-xl" />
                        <input
                            // {...register("password", { required: true })}
                            type="password"
                            className="w-full bg-transparent outline-none"
                            placeholder="Password"
                        />
                    </div>


                    {/* Confirm Password with Icon */}
                    {/* {errors.confirmPassword && <span className="text-red-600 text-sm"> ***{errors.confirmPassword.message}***</span>} */}
                    <div className="mb-4 flex items-center bg-slate-200 rounded-md p-2">
                        <TbLockPassword className="text-gray-600 mr-2 text-xl" />
                        <input
                            // {...register("confirmPassword", { required: true, validate: validatePasswordMatch, })}
                            type="password"
                            className="w-full bg-transparent outline-none"
                            placeholder="Confirm Password"
                        />
                    </div>



                    {/* Signup Button */}
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-white rounded-md hover:bg-slate-600 duration-300 transition cursor-pointer"
                        >
                            Signup
                        </button>
                    </div>

                </form>

                {/* Link to Login */}
                <div className="text-center text-sm">
                    Already have an account?
                    <Link to="/" className="text-blue-600 hover:underline ml-1">
                        Login
                    </Link>
                    here
                </div>

            </div>
        </div>
    );
}

export default SignupPage;

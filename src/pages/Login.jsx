import React, { useContext, useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useForm } from "react-hook-form"
import {  MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { googleLogin, emailPasswordLogin } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;
        console.log(data.email)
        console.log(data.password)
        emailPasswordLogin(email, password)
            .then(result => {
                toast.success("User login successfully!")
            })
            .catch(error => {
                toast.error(error.message)
            })
        reset()
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success("Google Login successfully!!")
                console.log(result);
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <div className="hero ">
                <div className=" md:w-[600px]  bg-[#140c355e] lg:w-[600px] p-2 w-full  ">
                <h1 className=' text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Login  Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <MdOutlineEmail />
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="grow"
                                    placeholder="Email"
                                />
                            </label>
                            {errors.email && <small className='text-red-400'>This field is required</small>}
                        </div>

                        <div className="form-control">
                            <label className="relative input input-bordered flex items-center gap-2">
                                <TbPasswordFingerprint />
                                <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2'>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                                <input
                                    {...register("password", { required: true })}
                                    {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                    type={`${showPassword? "text": "password"}`}
                                    className="grow"
                                    placeholder="password"
                                />
                            </label>
                            {errors.password && <small className='text-red-400'>  Password Must have an Uppercase and a Lowercase letter</small>}
                        </div>
                        <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-3 text-white rounded-md font-bold">Login</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="border-b border-white"></p>
                            <span className="text-xl text-white">or</span>
                            <p className="border-b border-white"> </p>
                        </div>

                    </form>
                    <div className='flex justify-center items-center gap-5'>
                        <button onClick={handleGoogleLogin}>
                            <img className='w-[50px]' src="google.png" alt="" />
                        </button>
                        <button>
                            <img className='w-[33px]' src="github.png" alt="" />
                        </button>
                    </div>

                    <div className='text-center my-0 text-gray-200 py-2'>
                        <p>You have no account <span className='underline font-bold'><Link to="/register">Register Now</Link></span></p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
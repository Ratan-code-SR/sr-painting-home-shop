import React, { useContext } from 'react';
import { FaRegEyeSlash, FaRegEye, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { MdAddPhotoAlternate, MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { googleLogin } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.email)
        console.log(data.password)
        reset()

    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success("Google Login successfully!!")
                console.log(result);
            })
            .catch(error => {
                console.log(error.massage);
                toast(error.massage)
            })
    }

    return (
        <div>
            <div className="hero  bg-base-200">
                <div className=" w-[600px] border p-0 border-black bg-green-500 ">
                    <h1 className='text-center text-3xl'>Login Now</h1>
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
                            <label className="input input-bordered flex items-center gap-2">
                                <TbPasswordFingerprint />
                                <input
                                    {...register("password", { required: true })}
                                    {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                    type="password"
                                    className="grow"
                                    placeholder="password"
                                />
                            </label>
                            {errors.password && <small className='text-red-400'>  Password Must have an Uppercase and a Lowercase letter</small>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="border-b border-black"></p>
                            <span className="text-xl">or</span>
                            <p className="border-b border-black"> </p>
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

                    <div className='text-center my-0'>
                        <p>You have no account <span className='underline font-bold'><Link to="/register">Register Now</Link></span></p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;
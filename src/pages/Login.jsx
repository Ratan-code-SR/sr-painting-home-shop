import React from 'react';
import { FaRegEyeSlash, FaRegEye, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { MdAddPhotoAlternate, MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';



const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data.email)
        console.log(data.password)

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
                        <div className='flex justify-center items-center gap-5'>
                            <button>
                                <img className='w-[50px]' src="google.png" alt="" />
                            </button>
                            <button>
                                <img className='w-[33px]' src="github.png" alt="" />
                            </button>
                        </div>
                    </form>


                    <div className='text-center my-0'>
                        <p>You have no account <span className='underline font-bold'><Link to="/register">Register Now</Link></span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
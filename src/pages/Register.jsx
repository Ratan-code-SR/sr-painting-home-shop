import React, { useContext, useState } from 'react';
import { FaRegEyeSlash, FaRegEye, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { MdAddPhotoAlternate, MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { emailPasswordRegister } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const location = useLocation()

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        const displayName = data.name;
        const photoURL = data.photoURL;
        emailPasswordRegister(email, password)
            .then(result => {

                toast.success("User Register successfully!")
                updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoURL

                });
                if (result) {
                    setTimeout(() => {
                        navigate(location?.state ? location.state : "/")
                    }, 1000);
                }
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
        reset()
    }

    return (
        <div className="hero ">
            <div className=" md:w-[600px]  lg:w-[600px] p-2 w-full  ">
                <h1 className=' md:text-5xl lg:text-5xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Register  Now</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="input input-bordered  flex items-center gap-2">
                            <FaUser />
                            <input
                                {...register("name", { required: true })}
                                type="text"
                                className="grow"
                                placeholder="Username" />
                        </label>
                        {errors.name && <small className='text-red-400'>This field is required</small>}
                    </div>
                    <div className="form-control">
                        <label className="input  input-bordered flex items-center gap-2">
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
                        <label className="input   input-bordered flex items-center gap-2">
                            <MdAddPhotoAlternate />
                            <input
                                {...register("photoURL", { required: true })}
                                type="text"
                                className="grow"
                                placeholder="photoURL"
                            />
                        </label>
                        {errors.photoURL && <small className='text-red-400'>This field is required</small>}
                    </div>
                    <div className="form-control">
                        <label className="relative   input input-bordered flex items-center gap-2">
                            <TbPasswordFingerprint />
                            <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2'>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                            <input
                                {...register("password", { required: true })}
                                {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/ })}
                                type={`${showPassword ? "text" : "password"}`}
                                className="grow"
                                placeholder="password"
                            />
                        </label>

                        {errors.password && <small className='text-red-400'>  Password Must have an Uppercase and a Lowercase letter</small>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-3 text-white rounded-md font-bold">Register</button>
                    </div>
                </form>
                <div className='text-center my-2 text-black'>
                    <p>You have already account <span className='underline font-bold'><Link to="/login">Login Now</Link></span></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { FaRegEyeSlash, FaRegEye, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { MdAddPhotoAlternate, MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { Link } from 'react-router-dom';
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

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password
        const displayName = data.name;
        const photoURL = data.photoURL;
        emailPasswordRegister(email, password)
            .then(result => {

                updateProfile(result.user, {
                    displayName: displayName,
                    photoURL: photoURL

                });
                console.log(result);
                toast.success("User register successfully!")
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
        reset()
    }

    return (
        <div className="hero  bg-base-200">
            <div className=" w-[600px] border p-0 border-black bg-green-500 ">
                <h1 className='text-center text-3xl'>Register  Now</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="input input-bordered flex items-center gap-2">
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
                        <button className="btn btn-success">Register</button>
                    </div>
                </form>
                <div className='text-center my-0'>
                    <p>You have already account <span className='underline font-bold'><Link to="/login">Login Now</Link></span></p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
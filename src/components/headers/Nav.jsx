import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Nav = () => {
    const { user, logOutUser,loading } = useContext(AuthContext)
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
    const handleOnChange = (e) => {
        const newTheme = e.target.checked ? 'synthwave' : 'light';
        setTheme(newTheme)
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const setLocalTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', setLocalTheme)
    }, [theme])

     if(loading){
        return <div className="w-16 h-16 flex justify-center items-center my-20 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
     }
    const handleLogOutUser = () => {
        logOutUser()
            .then(result => {
                toast.success("User logout successfully!")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const navLinks = <>
        <NavLink to="/" className="ml-3 font-semibold ">Home</NavLink>
        <NavLink to="/AllArtAndCraftItems" className="ml-3 font-semibold ">All Art & craft Items</NavLink>
        <NavLink to="/addItem" className="ml-3 font-semibold ">Add Craft Item</NavLink>
        <NavLink to="/MyArtCraftList" className="ml-3 font-semibold">My Art&Craft List</NavLink>

    </>
    return (
        <div className="navbar  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="
                    menu menu-sm dropdown-content
                     mt-2 z-10 p-2 shadow 
                     bg-gradient-to-r from-teal-400 to-yellow-200
                      text-white
                      font-semibold
                      rounded-sm
                       w-52
                       ">

                        {
                            navLinks
                        }

                    </ul>

                </div>
                <div className="flex items-center gap-1">
                    <img className="md:w-[50px] lg:w-[50px] w-[25px] h-[25px] md:h-[50px] lg:h-[50px] rounded-full" src="../logo.jpg" alt="" />
                    <h1 className="md:text-3xl"><span className="-ml-1 text-green-500 font-bold  italic">P</span>ainting</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 ">

                    {
                        navLinks
                    }

                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* nav theme */}
                <label className="swap swap-rotate">
                    {theme === 'synthwave' ? <input type="checkbox" onChange={handleOnChange} checked /> :
                        <input type="checkbox" onChange={handleOnChange} />}

                    <svg className="swap-off fill-current  md:w-8 md:h-8 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current md:w-8 md:h-8 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
                {
                    user ? <>

                        <div className="dropdown dropdown-bottom dropdown-end z-10 dropdown-hover">
                            <div tabIndex={0}
                                className="md:w-10 md:h-10 w-7 h-7 ">
                                <img className="rounded-full md:w-10 md:h-10 w-7 h-7" src={`${user.photoURL}`} alt="" />
                            </div>

                            <ul tabIndex={0} className="dropdown-content
                             z-[1] menu p-2 shadow 
                             bg-gradient-to-r from-pink-500 to-violet-600 w-52
                             gap-5
                             text-white
                             rounded-sm
                             ">
                                <div className="flex gap-1 items-center cursor-pointer">
                                    <div
                                        className="w-5 h-5 ">
                                        <img className="rounded-full w-5 h-5" src={`${user.photoURL}`} alt="" />
                                    </div>
                                    <span> {`${user?.displayName}`}</span>
                                </div>
                                <div className="flex gap-1 items-center cursor-pointer">

                                    <div className="w-5 h-5">
                                        <img className="rounded-full w-5 h-5" src='https://i.ibb.co/7XQf8Nm/images-12.jpg' alt="" />
                                    </div>
                                    <span onClick={handleLogOutUser}>Logout</span>
                                </div>
                            </ul>
                        </div>
                    </>
                        :
                        <>

                            <Link to="/login" className="md:ml-3 ml-2 font-semibold">Login</Link>
                            <Link to="/register" className="md:ml-3 ml-2 font-semibold">SignUp</Link>
                        </>
                }



            </div>
        </div>
    );
};

export default Nav;
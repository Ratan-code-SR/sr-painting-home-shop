import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    const navLinks = <>
        <NavLink to="/" className="ml-3 font-semibold">Home</NavLink>
        <NavLink to="/allArts" className="ml-3 font-semibold">All Art & craft Items</NavLink>
        <NavLink  to="/allArts" className="ml-3 font-semibold">Add Craft Item</NavLink>
        <NavLink to="/allArts" className="ml-3 font-semibold">My Art&Craft List</NavLink>
        <NavLink to="/allArts" className="ml-3 font-semibold">My Art&Craft List</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            navLinks
                        }

                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <img className="w-[50px] h-[50px] rounded-full" src="logo.jpg" alt="" />
                    <h1 className="text-3xl"><span className="-ml-1 text-green-500 font-bold text-3xl italic">P</span>ainting</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }

                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="ml-3">Login</Link>
                <Link to="/register" className="ml-3">SignUp</Link>
            </div>
        </div>
    );
};

export default Nav;
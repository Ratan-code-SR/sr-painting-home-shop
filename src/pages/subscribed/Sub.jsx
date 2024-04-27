import React from 'react';

const Sub = () => {
    return (
        <div className=' bg-gradient-to-b from-[#d668df] to-violet-600   py-10'>
            <div className='bg-[#ffff] text-black md:w-[500px] mx-auto  md:flex gap-4 p-5 items-center justify-center grid grid-cols-1'>
                <img className='w-[200px] mx-auto' src="https://i.ibb.co/DWw0j6Y/Screenshot-2024-04-26-194946.jpg" alt="" />
                <form >

                    <input type="text" className='border border-black p-2 my-2 w-full' name="" placeholder='Name' id="" />
                    <input type="email" className='border border-black p-2 my-2 w-full' name="" placeholder='Email' id="" />
                    <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-3 text-white rounded-md w-full">Subscribe Now</button>
                </form>
            </div>
        </div>
    );
};

export default Sub;
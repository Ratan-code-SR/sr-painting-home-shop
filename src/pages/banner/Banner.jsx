
import React, { useContext, useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {
    const [items, setItems] = useState([])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    useEffect(() => {
        fetch(`https://sr-painting-server.vercel.app/items`)
            .then(res => res.json())
            .then(data => {
                setItems(data)

            })
    }, [])

    const [text] = useTypewriter({
        words: ['Creation', 'Painting', "Imagination"],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    items.slice(0, 5).map(item =>
                        <SwiperSlide key={item._id}>

                            <div>
                                <div className='md:block hidden '>
                                    <div className='md:h-[400px] h-[300px] flex  justify-evenly items-center  gap-5 bg-gradient-to-r from-teal-400 to-yellow-200 p-10'>
                                       
                                       
                                                <div className="text-black w-2/6">
                                                    <h1 className="mb-5 md:text-3xl text-xl font-bold">Explore Our  <span className=' from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>{text}</span>
                                                        <Cursor cursorColor='red' /></h1>
                                                    <p className="mb-5 text-sm">{
                                                        item.short_description.slice(0, 160)
                                                    }..</p>
                                                    <Link to={`/viewDetails/${item._id}`}> <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-3  text-white rounded-md  text-sm">View Details</button></Link>
                                                </div>
                                        
                                        <div className='w-1/3 h-[300px] rounded-md'>
                                            <img className=' ' src={item.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='md:hidden block'>
                                    <div key={item._id} className="hero h-[400px] z-0" style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className="hero-overlay "></div>
                                        <div className="hero-content text-center text-neutral-content">
                                            <div className="max-w-md">
                                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Explore Our  <span className=' from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>{text}</span>
                                                    <Cursor cursorColor='red' /></h1>
                                                <p className="mb-5 md:text-xl text-sm">{
                                                    item.short_description.slice(0, 220)
                                                }..</p>
                                                <Link to={`/viewDetails/${item._id}`}> <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-2  text-white rounded-md text-sm font-semibold">View Details</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </SwiperSlide>
                    )
                }



            </Swiper>
        </>
    );
}
export default Banner;
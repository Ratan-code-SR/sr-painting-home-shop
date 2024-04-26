import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import Popular_item from '../populer-item/Popular_item';
import CraftItemsSection from '../craftItemsSection/CraftItemsSection';
import Subscribe from '../subscribed/Subscribe';
import Best_paintings from '../best_paintings/Best_paintings';
import Sub from '../subscribed/Sub';
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <ScrollToTop smooth
                color='red'
                 />
            <Banner />
            <h1 className=' md:text-5xl lg:text-5xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Explore Our Craft Items</h1>
            <p className='border-2 border-blue-400 w-40 mx-auto'></p>
            <div className=' my-5 bg-[#00000099]'>
                <CraftItemsSection data={data}/>
            </div>
            <div>
                <Subscribe />
            </div>
            <div className='my-5 border border-black'>
                <Best_paintings />
            </div>
            <section>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className=' md:text-5xl lg:text-5xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>Subscribe</h1>
                    <p className='border-2 border-blue-400 w-20 '></p>
                    <p>Subscribe for Exclusive Updates and Offers!</p>

                </div>
                <Sub />
            </section>
        </div>

    );
};

export default Home;
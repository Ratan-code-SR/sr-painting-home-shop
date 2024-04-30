import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../banner/Banner';
import CraftItemsSection from '../craftItemsSection/CraftItemsSection';
import Subscribe from '../subscribed/Subscribe';
import Best_paintings from '../best_paintings/Best_paintings';
import Sub from '../subscribed/Sub';
import ScrollToTop from "react-scroll-to-top";
import { AuthContext } from '../../components/provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Home = () => {
    const [data, setData] = useState([])
    const { loading } = useContext(AuthContext)

    const allItems = useLoaderData()


    useEffect(() => {
        setData(allItems)
    }, [])


    if (loading) {
        console.log("loading", loading);
        return <div className="w-16 h-16 flex justify-center items-center my-40 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    return (
        <div>
            <ScrollToTop smooth
                color='red'
            />
            <section className='px-0'>
                <Banner data={data} />
            </section>

            {/* CraftItemsSection */}
            <section>
                <div>
                    <CraftItemsSection data={data} />
                </div>

            </section>

            {/* Subscribe section */}
            <section>
                <div>
                    <Subscribe />
                </div>
            </section>

            <section className='my-5 '>
                <div >
                    <Best_paintings />
                </div>
            </section>


            <section className='md:py-10'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className=' md:text-5xl lg:text-5xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    >Subscribe</h1>
                    <p className='border-2 border-blue-400 w-20 -mt-3 mb-2 '
                        data-aos="zoom-in"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                    ></p>
                    <p className='text-center'
                        data-aos="flip-left"
                        data-aos-delay="500"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                    >Subscribe for Exclusive Updates and Offers!</p>

                </div>
                <Sub />
            </section>
        </div>

    );
};

export default Home;
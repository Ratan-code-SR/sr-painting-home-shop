import React from 'react';
import CraftItemsCard from './CraftItemsCard';


const CraftItemsSection = ({ data }) => {
    return (
        <div className='my-5'>
            <div>
                <p className='text-center text-3xl font-semibold'>Discover Our All</p>
                <h1 className=' text-2xl  text-center font-bold'>Craft Items</h1>
                <p className='border-2 border-green-400 w-24 mx-auto  mb-2'
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                ></p>
            </div>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.slice(0, 6).map(data => <CraftItemsCard key={data._id} data={data} />)}
            </div>

        </div>


    );
};

export default CraftItemsSection;
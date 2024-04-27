import React from 'react';
import CraftItemsCard from './CraftItemsCard';

const CraftItemsSection = ({ data }) => {
    // console.log(data.slice(1, 6));
    return (
        <div>

            <section className="  ">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <div rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={data[0].image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className=" space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl e from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">{data[0].item_name}</h3>
                          
                            <p className='text-gray-200'>{data[0].short_description}</p>
                            <button className="bg-gradient-to-r from-violet-600  to-pink-500 p-3 w-full text-white rounded-md font-bold">View Details</button>
                        </div>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {data.slice(1, 7).map(data => <CraftItemsCard key={data._id} data={data} />)}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CraftItemsSection;
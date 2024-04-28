import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const loadItemData = useLoaderData()
    const { id } = useParams()
    const itemData = loadItemData.find(data => data._id == id)
    const { image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization } = itemData;
    return (

        <div>
           <div>
           <h1 className='md:text-3xl lg:text-3xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>View Product Details</h1>
            <p className='border-2 border-blue-400 w-40 mx-auto -mt-4 '></p>
           </div>
            <div className='flex gap-5 py-5 p-2'>
                <div className='w-1/2'>
                    <img className='w-full' src={image} alt="" />

                </div>
                <div className='w-1/2'>
                    <p><span className='font-semibold mr-2'>Product Name: </span>{item_name}</p>
                    <p><span className='font-semibold mr-2'>Subcategory Name: </span>{subcategory_Name}</p>
                    <p><span className='font-semibold mr-2'>Price: </span>{price}</p>
                    <p><span className='font-semibold mr-2'>Rating: </span>{rating}</p>
                    <p><span className='font-semibold mr-2'>Time: </span>{time}</p>
                    <p><span className='font-semibold mr-2'>Stock Status: </span>{stock_status}</p>
                    <p><span className='font-semibold mr-2'>Customization: </span>{customization}</p>
                    <div>
                        <h1 className='text-xl '>Product Description</h1>
                        <p className='border-2 border-blue-400 w-40 mx-auto4 '></p>
                        <p>{short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const loadItemData = useLoaderData()
    const { id } = useParams()
    const itemData = loadItemData.find(data => data._id == id)
    const { image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization } = itemData;
    return (

        <div className='bg-gradient-to-r from-blue-300 to-yellow-300 text-black'>
            <div className='md:w-[700px] w-full mx-auto text-center'>
                <h1 className='md:text-3xl lg:text-3xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>View Product Details</h1>
                <p className='md:border-2 border border-red-400 md:w-40 w-24 mx-auto -mt-4 '></p>
                <p>Explore in-depth product information and specifications with our 'View Product Details' feature, empowering you to make informed decisions before purchasing. Dive into comprehensive descriptions, high-resolution images, and customer reviews for a complete understanding of our offerings.</p>
              
            </div>
            <div className='md:flex gap-5 py-5 p-2 grid grid-cols-1'>
                <div className='md:w-1/2 w-full'>
                    <img className=' md:h-[300px] w-full' src={image} alt="" />

                </div>
                <div className='md:w-1/2 w-full'>
                    <p><span className='font-semibold mr-2'>Product Name: </span>{item_name}</p>
                    <p><span className='font-semibold mr-2'>Subcategory Name: </span>{subcategory_Name}</p>
                    <p><span className='font-semibold mr-2'>Price: </span>{price}</p>
                    <p><span className='font-semibold mr-2'>Rating: </span>{rating}</p>
                    <p><span className='font-semibold mr-2'>Time: </span>{time}</p>
                    <p><span className='font-semibold mr-2'>Stock Status: </span>{stock_status}</p>
                    <p><span className='font-semibold mr-2'>Customization: </span>{customization}</p>
                    <div>
                        <h1 className='text-xl '>Product Description:</h1>
                        <p className='border border-red-400  mx-auto '></p>
                        <p>{short_description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
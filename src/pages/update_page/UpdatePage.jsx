
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContext } from "../../components/provider/AuthProvider";


const UpdatePage = () => {
    const [stock, setStock] = useState('')
    const [customize, setCustomize] = useState('')
    const [newData, setNewData] = useState([])
    const loadData = useLoaderData()
    const { _id, image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization } = loadData;

    useEffect(() => {
        fetch(`https://sr-painting-server.vercel.app/items/id/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNewData(data)
            })
    }, [])
    console.log(_id);
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="w-16 h-16 flex justify-center items-center my-40 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    // console.log(image);
    const handleStockChange = (e) => {
        setStock(e.target.value);
    };
    const handleCustomizationChange = (e) => {
        setCustomize(e.target.value);
    };
    const handleAddProductItem = e => {
        e.preventDefault()
        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const short_description = form.short_description.value;
        const stock_status = stock;
        const customization = customize;
        const updateInfo = { image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization }
        fetch(`https://sr-painting-server.vercel.app/items/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateInfo),
        })
            .then(res => res.json())
            
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Item updated successful.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            });
        setNewData(updateInfo)

    }

    return (
        <section className="p-6  bg-gradient-to-r from-violet-600  to-pink-500">
            <form onSubmit={handleAddProductItem} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50 justify-center items-center">
                    <div className="space-y-2 col-span-full lg:col-span-1 border p-2">
                        <p className="font-semibold text-center text-white text-xl">Update Product Information</p>
                        <p className='border-2 border-yellow-300 w-40 mx-auto -mt-3'></p>
                        <img className="w-full h-[150px]" src={newData.image} alt="" />
                        <p><span className='font-semibold mr-2'>Product Name: </span>{newData.item_name}</p>
                        <p><span className='font-semibold mr-2'>Subcategory Name: </span>{newData.subcategory_Name}</p>
                        <p><span className='font-semibold mr-2'>Price: </span>{newData.price}</p>
                        <p><span className='font-semibold mr-2'>Rating: </span>{newData.rating}</p>
                        <p><span className='font-semibold mr-2'>Time: </span>{newData.time}</p>
                        <p><span className='font-semibold mr-2'>Stock Status: </span>{newData.stock_status}</p>
                        <p><span className='font-semibold mr-2'>Customization: </span>{newData.customization}</p>
                        
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image" className="text-sm">Image URL</label>
                            <input defaultValue={image} name="image" required type="text" placeholder="Image URL" className="w-full p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="item_name" className="text-sm">Item Name</label>
                            <input defaultValue={item_name} name="item_name" required type="text" placeholder="Item Name" className="w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600  p-2 dark:border-gray-300" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="subcategory_Name" className="text-sm">subcategory Name</label>
                            <input defaultValue={subcategory_Name} name="subcategory_Name" required type="text" placeholder="subcategory_Name" className="w-full  focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2" />
                        </div>
                        {/*  */}
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="price" className="text-sm">Price</label>
                            <input defaultValue={price} name="price" required type="text" placeholder="Price" className="w-full  p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="rating" className="text-sm">Rating</label>
                            <input defaultValue={rating} name="rating" required type="text" placeholder="Rating" className="w-full p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>


                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="time" className="text-sm">Processing Time</label>
                            <input defaultValue={time} name="time" required type="text" placeholder="Processing Time" className="w-full  p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                        </div>


                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="stock_status" className="text-sm">Stock Status </label>
                            <select defaultValue={stock_status} onChange={handleStockChange} name="stock_status" className="w-full  p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" >
                                <option value="select">select</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to order">Made to order</option>
                            </select>
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="customization" className="text-sm">Customization </label>
                            <select defaultValue={customization} onChange={handleCustomizationChange} name="customization" className="w-full  p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" >
                                <option value="select">select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="short_description" className="text-sm">Description</label>
                            <textarea defaultValue={short_description} name="short_description" required placeholder="description" className="w-full p-2 focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                        </div>

                        <div className="col-span-full">
                            <input className="bg-gradient-to-r from-[#7c3aed91]  to-pink-500 p-3  text-white rounded-md font-bold w-full btn" type="submit" value="Update Product" />
                        </div>
                    </div>
                </fieldset>

            </form>
        </section>
    )
};

export default UpdatePage;
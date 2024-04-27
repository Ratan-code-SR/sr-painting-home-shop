import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, } from "react-icons/md";
import { GiBackPain } from "react-icons/gi";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const UpdateCard = ({ updateData }) => {
    console.log(updateData);
    const {image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization} = updateData
    return (
        <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Update Product Information</p>
            {/*  */}
            <div className="card  h-[500px] p-2  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-none bg-gradient-to-r from-blue-300 to-yellow-300 ">
                <figure className="h-[300px]"><img className="w-full hover:zoom-in h-[300px] relative p-1 hover:scale-125 transition-all duration-500 cursor-pointer" src={image} /></figure>
                <div className="absolute flex flex-col justify-end  gap-5 bg-[#348e26b5] text-3xl p-2 mt-1 ml-2 ">
                    <Link ><button className="hover:text-green-400" ><FaEdit /></button></Link>
                    <button className="hover:text-red-700"><MdDeleteForever /></button>
                </div>
                <div className="">
                    <h2 className="card-title"><GiBackPain />{item_name}</h2>
                    <p>{short_description.slice(0, 100)}</p>

                    <div className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-2/3 h-40  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                        <div className="grid grid-cols-2 gap-5 justify-center items-center mx-auto p-5">
                            <div className="">
                                <img className="w-5 h-5" src="https://i.ibb.co/LkX7z8s/money-1769716-1280.webp" alt="" />
                                <p>{price}TK</p>
                            </div>
                            <div className="">
                                <span className="text-xl"><FcRating /></span>
                                <p>{rating}</p>
                            </div>
                            <div className="">
                                <img className="w-5 h-5" src="https://i.ibb.co/cLX819K/5164023.png" alt="" />
                                <p> {stock_status}</p>
                            </div>
                            <div className="">
                                <img className="w-5 h-5" src="https://i.ibb.co/cTDVvmn/2970785.png" alt="" />
                                <p> {customization}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*  */}
        </div>
    );
};

export default UpdateCard;
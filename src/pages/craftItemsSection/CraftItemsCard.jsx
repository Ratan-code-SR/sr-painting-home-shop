import { MdOutlineAttachMoney } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";

import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CraftItemsCard = ({ data }) => {
    const { _id, image, item_name, price, rating,stock_status, subcategory_Name, } = data;
    return (
        <div className="card w-full bg-base-100 p-2 border-2 border-blue-500 rounded-md"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
        >
            <div className="relative">
                <img className="h-[250px] w-full " src={image} alt="Shoes" />
                <p className="absolute flex items-center gap-1 left-2 bg-green-300 opacity-70 px-2 bottom-1 text-black text-2xl font-bold"><MdOutlineAttachMoney /> {price}</p>
            </div>

            <div className="pt-5">
                <h2 className="card-title">{item_name}</h2>
                <div className="grid grid-cols-2 gap-3 ">
                    <h2 className=" flex gap-1 items-center"><TbCategoryFilled />{subcategory_Name}</h2>
                    <h2 className=" flex gap-1 items-center"><FcRating />{rating}</h2>
                    <h2 className=" flex gap-1 items-center"><GrStatusUnknown/>{stock_status}</h2>
                </div>

                <div className="card-actions justify-end mt-2 text-center">
                    <Link  to={`/viewDetails/${_id}`} className="relative  w-full px-5 py-2.5 overflow-hidden group  bg-gradient-to-r from-[#7c3aed91]  to-pink-500  hover:bg-gradient-to-r hover:from-[#ff385c] hover:to-green-400 text-black font-semibold hover:text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">View Details</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CraftItemsCard;
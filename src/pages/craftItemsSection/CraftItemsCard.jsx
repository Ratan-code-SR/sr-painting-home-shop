import { MdOutlineAttachMoney, MdCategory } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const CraftItemsCard = ({ data }) => {
    const { _id, image, item_name, short_description, price, subcategory_Name } = data;
    return (
        <>
            <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline border p-2 border-blue-300 rounded-md
            "
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
            >
                <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={image} />
                <div className=" space-y-2">
                    <h3 className="text-2xl font-semibold sm:text-3xl e from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">{item_name}</h3>
                    <p className='border-2 border-blue-400 w-20  mt-0'></p>
                    <div className="flex gap-4 items-center">
                        <span className="  flex items-center  text-xl"><MdCategory />{subcategory_Name}</span>
                        <span className=" flex items-center  text-xl"><MdOutlineAttachMoney />{price}</span>
                    </div>
                    <p className="">{short_description.slice(0, 130)}....</p>
                    <Link to={`/viewDetails/${_id}`}> <button className="bg-gradient-to-r from-[#7c3aed91]  to-pink-500 p-3 w-full text-white rounded-md font-bold">View Details</button></Link>
                </div>
            </div>

        </>
    );
};

export default CraftItemsCard;
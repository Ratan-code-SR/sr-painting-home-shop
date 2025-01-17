import { Link } from "react-router-dom";



const AllArtCraftItemsTable = ({ item,index }) => {
    const { _id,item_name, image, price, subcategory_Name } = item;
    return (
        <>
            <tr >
                <td className=" pt-1 pb-1 border border-blue-300">{index + 1}</td>
                <td className=" pt-1 pb-1 border border-blue-300">
                    <img className="w-8 h-10" src={image} alt="" />
                </td>
                <td className=" pt-1 pb-1 border border-blue-300">{item_name}</td>
                <td className=" pt-1 pb-1 border border-blue-300">{price}TK</td>
                <td className=" pt-1 pb-1 border border-blue-300">{subcategory_Name}</td>
                <td className=" pt-1 pb-1 border border-blue-300">
                    <Link to={`/viewDetails/${_id}`}><button className="bg-gradient-to-r from-violet-600  to-pink-500 p-2 text-white rounded-md font-bold">View Details</button></Link>
                </td>
            </tr>
        </>
    );
};

export default AllArtCraftItemsTable;
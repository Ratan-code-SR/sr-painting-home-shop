import { FaEdit } from "react-icons/fa";
import { MdDeleteForever, MdOutlineAttachMoney} from "react-icons/md";
import { GiBackPain } from "react-icons/gi";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'
import { TbCategoryFilled } from "react-icons/tb";
import { GrStatusUnknown } from "react-icons/gr";
import { FcRating } from "react-icons/fc";





const MyCard = ({ item, setFilteredArtsCrafts, myItems }) => {
    const {
        _id,
        item_name,
        image,
        price,
        rating,
        stock_status,
        customization
    } = item;

    const handleDelete = () => {
        console.log(_id);
        fetch(`https://sr-painting-server.vercel.app/items/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(data => {
                console.log(data);
                if (data.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Item has been deleted.",
                        icon: "success"
                    });
                }
                console.log(myItems);
                const items = myItems.filter(item => item._id !== _id)
                setFilteredArtsCrafts(items)
            })

    }


    return (
        <div className="card p-2  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-none bg-gradient-to-r from-blue-300 to-yellow-300 ">
            <figure className="h-[300px]"><img className="w-full hover:zoom-in h-[300px] relative p-1 hover:scale-125 transition-all duration-500 cursor-pointer" src={image} /></figure>
            <div className="absolute flex flex-col justify-end  gap-5 bg-[#348e26b5] text-3xl p-2 mt-1 ml-2 ">

                <div id="not-clickable" data-tooltip-id="my-tooltip-inline">
                    <Link to={`/updatedItem/${_id}`}><button className="hover:text-green-400" ><FaEdit /></button></Link>
                </div>
                <Tooltip id="my-tooltip-inline"
                    style={{ backgroundColor: "#808080", color: "#fff", padding: "0 5px" }}>
                    <button className="text-sm ">Update</button>
                </Tooltip>

                <div id="not-clickable" data-tooltip-id="my-tooltip-styles">
                    <button onClick={handleDelete} className="hover:text-red-700"><MdDeleteForever /></button>
                </div>
                <Tooltip id="my-tooltip-styles"
                    style={{ backgroundColor: "#808080", color: "#fff", padding: "0 5px" }}>
                    <button className="text-sm ">Delete</button>
                </Tooltip>


            </div>
            <div className="">
                <h2 className="card-title"><GiBackPain />{item_name}</h2>
                <div className="grid grid-cols-2 gap-3 mt-2">
                    <h2 className=" flex gap-1 items-center"><MdOutlineAttachMoney/>{price}</h2>
                    <h2 className=" flex gap-1 items-center"><TbCategoryFilled/>{customization}</h2>
                    <h2 className=" flex gap-1 items-center"><FcRating/>{rating}</h2>
                    <h2 className=" flex gap-1 items-center"><GrStatusUnknown/>{stock_status}</h2>
                </div>
            </div>
        </div >
    );
};

export default MyCard;
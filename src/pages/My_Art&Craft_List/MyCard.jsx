import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { GiBackPain } from "react-icons/gi";

const MyCard = ({ item }) => {
    const { item_name, image,
        short_description } = item;
    return (
        <div className="card  h-[500px] p-2  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-none bg-gradient-to-r from-blue-300 to-yellow-300 ">
            <figure className="h-[300px]"><img className="w-full h-[300px] relative p-1" src={image}  /></figure>
            <div className="absolute flex flex-col justify-end  gap-5 bg-[#348e26b5] text-3xl p-2 mt-1 ml-2 ">
                <button className="hover:text-green-400" ><FaEdit /></button>
                <button className="hover:text-red-700"><MdDeleteForever /></button>
            </div>
            <div className="">
                <h2 className="card-title"><GiBackPain />{item_name}</h2>
                <p>{
                    short_description.slice(0,100)}</p>
               
            </div>
        </div>
    );
};

export default MyCard;
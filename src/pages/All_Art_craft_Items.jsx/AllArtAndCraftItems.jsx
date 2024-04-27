import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import AllArtCraftItemsTable from "./AllArtCraftItemsTable";


const AllArtAndCraftItems = () => {

    const items = useLoaderData()
    console.log(items);
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="w-16 h-16 flex justify-center items-center my-20 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }
    return (
        <div >
            <div className="flex flex-col justify-center items-center gap-2 md:w-2/3  mx-auto ">
                <h1 className=' md:text-3xl lg:text-3xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>View All Product Items</h1>
                <p className='border-2 border-blue-400 w-40 mx-auto -mt-5'></p>
                <p className="text-sm text-center mb-3">
                    Welcome to our gallery of artistic wonders! Dive into our View All Product Items page to explore our complete collection of paintings and drawings. From captivating landscapes to mesmerizing portraits, every piece has a story to tell. Immerse yourself in a world of creativity and inspiration as you browse through our diverse range of artwork. Start exploring now and find the perfect masterpiece to adorn your space.

                </p>
            </div>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table pt-0 pb-0">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className=" pt-1 pb-1 border border-blue-300">Image</th>
                                <th className=" pt-1 pb-1 border border-blue-300">Product Name</th>
                                <th className=" pt-1 pb-1 border border-blue-300">Price</th>
                                <th className=" pt-1 pb-1 border border-blue-300">Subcategory Name</th>
                                <th className=" pt-1 pb-1 border border-blue-300">View Details</th>
                            </tr>
                        </thead>

                        <tbody className=" pt-0 pb-0">
                            {/* row 1 */}
                            {
                                items.map(item =>
                                    <AllArtCraftItemsTable key={item._id} item={item} />
                                )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;
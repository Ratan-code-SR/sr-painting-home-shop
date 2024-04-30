import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import MyCard from "./MyCard";


const MyArtCraftList = () => {
    const { user, loading } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])
    const [filteredArtsCrafts, setFilteredArtsCrafts] = useState([]);
    const [filter, setFilter] = useState('All');
    useEffect(() => {
        document.title = "SR-Painting | My Art&Craft List"
    }, [])

    useEffect(() => {
        fetch(`https://sr-painting-server.vercel.app/items/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFilteredArtsCrafts(data);
                setMyItems(data)

            })
    }, [user])
  


    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);

        // Filter the arts & crafts based on the selected filter
        if (selectedFilter === 'all') {
            setFilteredArtsCrafts(myItems);
        } else {
            const filteredData = myItems.filter(item => item.customization === selectedFilter);
            setFilteredArtsCrafts(filteredData);

        }
    };


    if (loading) {
        return <div className="w-16 h-16 flex justify-center items-center my-40 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }


    return (
        <section>
            <div className="mb-10">
                <h1 className=' md:text-3xl lg:text-3xl mt-2 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>My Art&Craft List</h1>
                <p className='md:border-2 border border-blue-400 md:w-40 w-24 mx-auto '></p>
            </div>

            <div className=" flex justify-end ">
                <div className="w-[50px] bg-green-400  rounded-md">
                    <label htmlFor="stock_status" className="text-[12px] text-center font-semibold flex p-2 justify-center items-center ">Filter</label>
                    <select value={filter} onChange={handleFilterChange} name="stock_status" className="w-full border border-black " >
                        <option value="all">All</option>
                        <option value="Yes">Customized</option>
                        <option value="No">Non-customized</option>
                    </select>
                </div>
            </div>

            {
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 text-black">
                    {
                        filteredArtsCrafts.map(item =>
                            <MyCard key={item._id} item={item} setFilteredArtsCrafts={setFilteredArtsCrafts} myItems={myItems} />
                        )
                    }
                </div>
            }
        </section>
    );
};

export default MyArtCraftList;
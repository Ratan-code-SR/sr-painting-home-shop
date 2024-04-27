import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import MyCard from "./MyCard";


const MyArtCraftList = () => {
    const { user, loading } = useContext(AuthContext)
    const [myItems, setMyItems] = useState([])


    useEffect(() => {
        fetch(`https://sr-painting-server.vercel.app/items/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyItems(data)
            })
    }, [user])
    if (loading) {
        return <div className="w-16 h-16 flex justify-center items-center my-20 mx-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    }

    return (
        <section>
            <div className="mb-10">
                <h1 className=' md:text-3xl lg:text-3xl  p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>My Art&Craft List</h1>
                <p className='border-2 border-blue-400 w-40 mx-auto -mt-5'></p>
            </div>
          
            <div className="md:grid grid-cols-3 items-center justify-center gap-5 flex flex-col ">
                {
                    myItems.map(item =>
                        <MyCard key={item._id} item={item} />
                    )
                }
            </div>
        </section>
    );
};

export default MyArtCraftList;
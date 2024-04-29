import React from 'react';
import CraftItemsCard from './CraftItemsCard';


const CraftItemsSection = ({ data }) => {
    return (
        <div className='my-5'>

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {data.slice(1, 7).map(data => <CraftItemsCard key={data._id} data={data} />)}
            </div>

        </div>


    );
};

export default CraftItemsSection;
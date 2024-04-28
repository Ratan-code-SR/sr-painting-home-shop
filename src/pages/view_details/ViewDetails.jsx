import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const loadItemData = useLoaderData()
    const { id } = useParams()
    const itemData = loadItemData.find(data => data._id == id)
    const { image, item_name, subcategory_Name, price, rating, time, short_description, stock_status, customization } = itemData;
    return (
        <div>
            <div>
                <p>details: {item_name}</p>
                <p>sub category name : {subcategory_Name}</p>
            </div>
        </div>
    );
};

export default ViewDetails;
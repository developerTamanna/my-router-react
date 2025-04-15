import React from 'react';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { title, price, description, image } = product;

    return (
        <div className="h-full">
<div className="card bg-base-100 shadow-sm h-full flex flex-col">
<figure className="p-4">
    <img
        src={image}
        alt="Product"
        className="w-full h-48 object-contain mx-auto"
    />
</figure>

<div className="card-body flex flex-col justify-between">
    <div>
        <h2 className="card-title justify-center">
            {title}
            <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-justify">{description}</p>
        <p className="font-semibold mt-2">Price: ${price}</p>
    </div>

    <div className="card-actions justify-center mt-4">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
        <Link to={`/product/ ${product.id}`}>
        <button  className='border-1 px-1 border-gray-100 rounded lg'>mor info</button>
        </Link>
    </div>
</div>
</div>
        </div>
    );
};

export default Product;

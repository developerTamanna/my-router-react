import React from 'react';

const Product = ({ product }) => {
    const { category, price, description, image } = product;

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
            {category}
            <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-justify">{description}</p>
        <p className="font-semibold mt-2">Price: ${price}</p>
    </div>

    <div className="card-actions justify-center mt-4">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
    </div>
</div>
</div>
        </div>
    );
};

export default Product;

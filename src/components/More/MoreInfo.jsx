import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MoreInfo = () => {


    const morInfo = useLoaderData();

    // console.log(morInfo)
    const {title, price, description, image} = morInfo
    return (
        <div className='border'>
            <img className='w-32 h-32 mx-auto ' src={image}></img>
            <h1>{title}</h1>
            <p>{description}</p>
        <p>{price}</p>
        </div>
    );
};

export default MoreInfo;
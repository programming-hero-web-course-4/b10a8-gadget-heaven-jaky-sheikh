import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { useGlobalState } from '../../Context/GlobalState';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart, addToWishlist } = useGlobalState();

    useEffect(() => {
        fetch("/laptop.json")
            .then(res => res.json())
            .then((data) => {
                const selectedProduct = data.find((item) => item.id === parseInt(id));
                setProduct(selectedProduct);
            })

            .catch((err) => console.error("Error fetching product details:", err));
    }, [id]);

    if (!product) {
        return (
            <div className="text-center mt-48">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mt-28">{product.name}</h2>
            <img src={product.imageURL} alt={product.name} className="w-1/4 h-auto mx-auto mb-6 border-2 border-gray-300 rounded-lg" />
            <p className="text-xl mb-4">Price: ${product.price}</p>
            <p className="text-lg mb-4">Category: {product.category}</p>
            <p className="text-lg mb-4">{product.description || "No description available."}</p>
            <div className='flex justify-center items-center gap-4'>
                <button className="btn btn-primary" onClick={addToCart}>Add to cart <IoCartOutline /></button>
                <button className="btn btn-secondary" onClick={addToWishlist}><GiSelfLove className='w-6 h-6' /></button>
            </div>
        </div>
    );
};

export default ProductDetails;
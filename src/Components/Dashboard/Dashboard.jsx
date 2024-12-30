import React from 'react';
import { useGlobalState } from '../../Context/GlobalState';

const Dashboard = () => {
    const { cart } = useGlobalState();

    return (
        <div className="p-6 mt-12">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-xl text-gray-500">Your cart is empty!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="border border-gray-300 rounded-lg shadow-lg p-4"
                        >
                            <img
                                src={item.imageURL}
                                alt={item.name}
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                            <p className="text-lg text-gray-600 mb-2">Price: ${item.price}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

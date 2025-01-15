import React from 'react';
import { useGlobalState } from '../../Context/GlobalState';
import { Helmet } from 'react-helmet-async';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    const { cart } = useGlobalState();

    const sortedCart = [...cart].sort((a, b) => b.price - a.price);


    const renderItems = (items) => {
        if (items.length === 0) {
            return <p className="text-xl text-gray-500">No items found!</p>;
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
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
        );
    };

    return (
        <div className="p-6 mt-20">
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            <Tabs>
                <TabList>
                    <Tab>Cart</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex justify-between mb-4">
                        <h2 className="text-3xl font-bold">Your Cart</h2>
                        <button className="btn btn-accent">Purchase</button>
                    </div>
                    {renderItems(sortedCart)}
                </TabPanel>

                <TabPanel>
                    <h2 className="text-3xl font-bold mb-4">Your Wishlist</h2>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;

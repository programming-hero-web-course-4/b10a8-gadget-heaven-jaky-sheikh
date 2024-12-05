import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [category, setCategory] = useState("All Products");

    useEffect(() => {
        fetch("laptop.json")
            .then(res => res.json())
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [])

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        if (selectedCategory === "All Products") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());
            setFilteredData(filtered.length > 0 ? filtered : []);
        }
    };

    return (
        <div className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-6">Explore Cutting-Edge Gadgets</h2>
            <div className="flex">
                <div className="w-1/4 text-center p-4 bg-gray-100 border-none rounded-lg mt-4 mb-auto list-none">

                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("All Products")} className="btn btn-outline btn-primary w-1/2">All Products</button></li>
                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("Laptop")} className="btn btn-outline btn-primary w-1/2">Laptops</button></li>
                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("Mobile")} className="btn btn-outline btn-primary w-1/2">Phones</button></li>
                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("Accessory")} className="btn btn-outline btn-primary w-1/2">Accessories</button></li>
                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("Smart Watches")} className="btn btn-outline btn-primary w-1/2">Smart Watches</button></li>
                    <li className="mb-6"><button
                        onClick={() => handleCategoryChange("MacBook")}
                        className="btn btn-outline btn-primary w-1/2">MacBook</button></li>
                    <li><button
                        onClick={() => handleCategoryChange("IPhone")} className="btn btn-outline btn-primary w-1/2">IPhone</button></li>

                </div>
                <div className="w-3/4 grid sm:grid-cols-4 gap-5 p-4">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div key={item.id} className="p-4 border rounded-lg shadow-md">
                                <img src={item.imageURL} alt={item.name} className="w-full h-80 object-cover mb-4" />
                                <h3 className="text-2xl font-semibold">{item.name}</h3>
                                <p>Price:${item.price}</p>
                                <button className="btn btn-primary mt-4"><Link to={`/product/${item.id}`} className="text-white">
                                    View Details
                                </Link></button>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-4 text-center text-xl font-bold">
                            Product Not Found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
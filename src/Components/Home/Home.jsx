import { useEffect, useState } from "react";


const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("laptop.json")
            .then(res => res.json())
            .then(data => setData(data))
            .catch((error) => console.error("Error loading JSON:", error));
    }, [])

    return (
        <div className="mt-48">
            <h2 className="text-3xl font-bold text-center mb-6">Explore Cutting-Edge Gadgets</h2>
            <div className="grid sm:grid-cols-4 gap-5">
                {data.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg shadow-md">
                        <img src={item.imageURL} alt={item.name} className="w-full h-80 object-cover mb-4" />
                        <h3 className="text-2xl font-semibold">{item.name}</h3>
                        <p>Price:${item.price}</p>
                        <button className="btn btn-primary mt-4">{item.details}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
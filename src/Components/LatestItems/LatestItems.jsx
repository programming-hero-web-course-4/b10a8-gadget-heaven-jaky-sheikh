import { useEffect, useState } from "react";


const LatestItems = () => {

    const [pictures, setPictures] = useState([]);


    useEffect(() => {
        fetch('latest.json')
            .then(res => res.json())
            .then(data => setPictures(data))
            .catch(error => console.error("Error fetching latest pics:", error));
    }, [])

    return (

        <div className="p-4">
            <h1 className="text-2xl font-bold py-20">Latest Pictures</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pictures.map(picture => (
                    <div key={picture.id} className="border rounded shadow p-2">
                        <img src={picture.imageUrl} alt={picture.name} className="w-full h-[400px] object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{picture.name}</h2>
                        <p className="text-sm text-gray-600">Price: ${picture.price}</p>
                        <p className="text-sm">{picture.details}</p>
                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestItems;
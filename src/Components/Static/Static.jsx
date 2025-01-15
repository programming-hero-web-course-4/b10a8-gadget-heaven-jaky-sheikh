import { Helmet } from "react-helmet-async";

const Static = () => {
    return (
        <div className="mt-28">
            <Helmet>
                <title>Static | Gadget Heaven</title>
            </Helmet>
            <h2 className="text-3xl">Product Not Found</h2>
        </div>
    );
};

export default Static;
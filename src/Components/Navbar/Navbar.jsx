import { IoCartOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { useGlobalState } from "../../Context/GlobalState";

const Navbar = () => {

    const { cartCount, likeCount } = useGlobalState();

    const links = <>
        <li><a href="/">Home</a></li>
        <li><a href="/static">Static</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/latest-items">Latest Items</a></li>
    </>

    return (
        <div className="relative bg-purple-600 text-white pb-72 px-2">
            <div className="navbar bg-purple-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-purple-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full bg-white text-purple-600 relative">
                        <IoCartOutline className="text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">{cartCount}</span>
                        )}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 border-2 rounded-full bg-white text-purple-600 relative">
                        <GiSelfLove className="text-xl" />
                        {likeCount > 0 && (
                            <span className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center">{likeCount}</span>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-4xl text-center md:text-5xl font-bold mb-4">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
                <p className="text-lg text-center md:text-xl mb-8">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center">
                    <button className="btn btn-active btn-secondary my-2 bg-slate-300 text-purple-600 text-lg border-none">Shop Now</button>
                </div>
            </div>
            <div className="absolute border border-white rounded-lg p-2 bottom-90px left-1/2 transform -translate-x-1/2">
                <img
                    src="/public/assets/banner.jpg"
                    alt="Tech Accessory"
                    className="rounded-lg shadow-lg w-[1400px] h-[400px] object-cover"
                />
            </div>
        </div>
    );
};

export default Navbar;
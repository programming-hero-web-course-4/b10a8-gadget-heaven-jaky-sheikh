

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-slate-200 text-black p-10 flex flex-col items-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                    <p className="font-medium">Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="flex justify-evenly w-full">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover block">Product support</a>
                        <a className="link link-hover block">Order Tracking</a>
                        <a className="link link-hover block">Shipping and Delivery</a>
                        <a className="link link-hover block">Returns< /a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover block">About us</a>
                        <a className="link link-hover block">Careers</a>
                        <a className="link link-hover block">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover block">Terms of Services</a>
                        <a className="link link-hover block">Privacy policy</a>
                        <a className="link link-hover block">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
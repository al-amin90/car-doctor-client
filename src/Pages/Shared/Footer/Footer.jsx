import logo from '../../../assets/icons/logo.png';
import icons from '../../../assets/icons/icons.png';

const Footer = () => {
    return (
        <div className='bg-[#151515]'>
            <footer className="footer text-white py-28 max-w-7xl mx-auto w-[90%] md:w-[85%]">
                <aside>
                    <img src={logo} alt="" />
                    <p className='max-w-52 font-light my-2 text-xs'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <img src={icons} alt="" />
                </aside>
                <nav className='space-y-1'>
                    <h6 className="text-base font-medium mb-6">About</h6>
                    <a className="link link-hover font-extralight text-xs">Branding</a>
                    <a className="link link-hover font-extralight text-xs">Service</a>
                    <a className="link link-hover font-extralight text-xs">Contact</a>
                </nav>
                <nav className='space-y-1'>
                    <h6 className="text-base font-medium mb-6">Company</h6>
                    <a className="link link-hover font-extralight text-xs">Why Car Doctor</a>
                    <a className="link link-hover font-extralight text-xs">About</a>
                </nav>
                <nav className='space-y-1'>
                    <h6 className="text-base font-medium mb-6">Support</h6>
                    <a className="link link-hover font-extralight text-xs">Support Center</a>
                    <a className="link link-hover font-extralight text-xs">Feedback</a>
                    <a className="link link-hover font-extralight text-xs">Accesbility</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;
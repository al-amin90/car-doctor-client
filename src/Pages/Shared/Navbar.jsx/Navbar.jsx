import logo from '../../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {

    const NavLinks = <>
        <li><NavLink className="font-semibold border-b border-[#FF3811] hover:text-[#FF3811]">Home</NavLink></li>
        <li><NavLink className="font-semibold border-b border-[#FF3811] hover:text-[#FF3811]">About</NavLink></li>
        <li><NavLink className="font-semibold border-b border-[#FF3811] hover:text-[#FF3811]">Services</NavLink></li>
        <li><NavLink className="font-semibold border-b border-[#FF3811] hover:text-[#FF3811]">Blog</NavLink></li>
        <li><NavLink className="font-semibold border-b border-[#FF3811] hover:text-[#FF3811]">Contact</NavLink></li>
    </>

    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className="navbar my-8 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to="/" className="w-20">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="gap-10 menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className='mr-6 text-2xl'><HiOutlineShoppingBag /></span>
                    <span className='mr-6 text-2xl'><CiSearch /></span>
                    <a className="btn btn-outline px-6 text-[#FF3811]">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import logo from '../../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import useAuth from '../../../Utilis/useAuth';

const Navbar2 = () => {
    const { userLogOut, user } = useAuth()

    const handleLogOut = () => {
        userLogOut()
            .then(() => console.log("log out successfully"))
            .then(error => console.log(error))
    }

    const NavLinks = <>
        <li><NavLink to="/order" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-semibold border-b border-[#FF3811] text-[#FF3811]" : "font-medium hover:text-[#FF3811]"}>Order</NavLink>
        </li>
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-semibold border-b border-[#FF3811] text-[#FF3811]" : "font-medium hover:text-[#FF3811]"}>Order Review</NavLink>
        </li>
        <li><NavLink to="/services" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-semibold border-b border-[#FF3811] text-[#FF3811]" : "font-medium hover:text-[#FF3811]"}>Manage Inventory</NavLink>
        </li>

        {
            user ? <li><Link onClick={handleLogOut} className="btn btn-outline text-sm px-6 text-[#FF3811]">Log Out</Link></li>
                :
                <li><NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-semibold border-b border-[#FF3811] text-[#FF3811]" : "font-medium hover:text-[#FF3811]"}>Login</NavLink>
                </li>
        }

    </>

    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className="navbar p-0 my-8 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to="/" className="w-12 md:w-20">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="gap-10 items-center menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar2;
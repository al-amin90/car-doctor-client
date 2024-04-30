import cartDet from '../../assets/images/checkout/cart.png';
import cartp1 from "../../assets/images/checkout/cartp1.png"
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";

const CartDetails = () => {
    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div id="slide1" className="carousel-item max-h-64] mb-20 relative w-full">
                <img src={cartDet} className="w-full object-cover rounded-xl object-center min-h-64]" />
                <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                <div className='flex justify-between absolute text-white pl-28 top-1/2 transform -translate-y-1/2'>
                    <div className='max-w-lg'>
                        <h2 className='font-semibold leading-tight text-4xl'>Cart Details</h2>
                        <p className='text-[#FF3811] font-medium '>Home - Product Details</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex items-center mb-12 justify-between'>
                    <div className='flex items-center gap-7'>
                        <button className="p-2 h-fit bg-[#444444] hover:bg-[#FF3811] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <figure>
                            <img className='w-40 aspect-square rounded-xl' src={cartp1} alt="" />
                        </figure>
                        <div className='space-y-2'>
                            <h6 className='font-semibold text-lg'>Martha Knit Top</h6>
                            <p className='font-normal text-gray-400 text-base'>Color : Green</p>
                            <p className='font-normal text-gray-400 text-base'>Size: S</p>
                        </div>
                    </div>
                    <p className='font-semibold text-base'>$25.00</p>
                    <p className='font-semibold text-base'>22-10-2022</p>
                    <button className=" font-semibold text-base border-none  rounded-lg hover:bg-slate-600 px-4 text-white py-2 bg-[#FF3811]">Pending</button>
                </div>
            </div>

            <div className='flex items-center justify-between mb-28'>
                <div className='flex items-center cursor-pointer hover:text-[#FF3811] gap-2'>
                    <PiArrowBendUpLeftBold className='text-lg' />
                    <p>Continue Shopping</p>
                </div>
                <div className='flex items-center cursor-pointer hover:text-[#FF3811] gap-2'>
                    <FaRegTrashCan className='text-lg' />
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;
import tes1 from '../../assets/icons/tes1.png';
import tes2 from '../../assets/icons/tes2.png';
import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {


    return (
        <div className='max-w-7xl my-28 mx-auto w-[90%] md:w-[85%]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold mb-4'>Testimonial</p>
                <h1 className="text-4xl text-black font-bold">What Customer Says</h1>
                <p className='w-2/3 mx-auto mt-3 mb-12 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='flex gap-5 justify-between'>
                <div className="rounded-lg border p-9 ">
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-5">
                            <div>
                                <img src={tes1} alt="" />
                            </div>
                            <div>
                                <h6 className='font-bold text-2xl mt-2'>Awlad Hossain</h6>
                                <p className='font-normal'>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <p><FaQuoteRight className='text-[#FF381133] text-5xl' /></p>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <p className=' text-base font-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="rating mt-5 rating-md">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border p-9 ">
                    <div className='flex items-center justify-between'>
                        <div className="flex items-center gap-5">
                            <div>
                                <img src={tes2} alt="" />
                            </div>
                            <div>
                                <h6 className='font-bold text-2xl mt-2'>Awlad Hossain</h6>
                                <p className='font-normal'>Businessman</p>
                            </div>
                        </div>
                        <div>
                            <p><FaQuoteRight className='text-[#FF381133] text-5xl' /></p>
                        </div>
                    </div>
                    <div className=" mt-4">
                        <p className=' text-base font-light'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="rating mt-5 rating-md">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;
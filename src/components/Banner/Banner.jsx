import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/banner/5.jpg';
import banner2 from '../../assets/images/banner/1.jpg';
import banner3 from '../../assets/images/banner/2.jpg';
import banner4 from '../../assets/images/banner/3.jpg';
import banner5 from '../../assets/images/banner/4.jpg';
import banner6 from '../../assets/images/banner/6.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className="carousel ">
                <div id="slide1" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner1} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide2" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Affordable Price For Car Servicing</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner2} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide3" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Quality Repairs Done Right</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner3} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide4" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Expert Technicians You Can Trust</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner4} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide5" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Convenient Solutions for Your Car Needs</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide5" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner5} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide6" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Fast and Reliable Service Every Time</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide6" className="carousel-item max-h-[calc(100vh-128px)] relative w-full">
                    <img src={banner6} className="w-full object-cover rounded-xl object-center min-h-[calc(100vh-128px)]" />
                    <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                    <div className="absolute flex justify-end mr-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none mr-3 btn-circle"><FaArrowLeft className='text-lg text-white' /></a>
                        <a href="#slide1" className="btn bg-[#FFFFFF33] hover:bg-[#FF3811] border-none btn-circle"><FaArrowRight className='text-lg text-white' /></a>
                    </div>

                    <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                        <div className='max-w-lg'>
                            <h2 className='font-semibold leading-tight text-6xl'>Your One-Stop Shop for Car Maintenance</h2>
                            <p className='font-extralight my-4'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='flex gap-4 font-light mt-6'>
                                <Link className="btn border-none text-sm rounded-md text-white bg-[#FF3811]">Discover More</Link>
                                <Link className="btn btn-outline text-sm rounded-md text-white hover:bg-[#FF3811]">Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import check from '../../assets/images/checkout/checkout.png';
import step1 from '../../assets/images/checkout/step1.png';
import step2 from '../../assets/images/checkout/step2.png';
import step3 from '../../assets/images/checkout/step3.png';
import video from '../../assets/images/checkout/video.png';
import { HiDocumentChartBar } from "react-icons/hi2";
import logo from '../../assets/images/checkout/logoDeta.png';
import { Link, useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, facility, description, img, price, title } = service;

    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div id="slide1" className="carousel-item max-h-64] mb-24 relative w-full">
                <img src={check} className="w-full object-cover rounded-xl object-center min-h-64]" />
                <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                    <div className='max-w-lg'>
                        <h2 className='font-semibold leading-tight text-5xl'>Service Details</h2>
                    </div>
                </div>
                <p className=' absolute right-1/2 transform translate-x-1/2 -bottom-4 text-white font-normal bg-[#FF3811] py-2 px-12 my-4'>Home/Service Details</p>
            </div>

            <div className='grid lg:grid-cols-3 mb-28 gap-7 grid-cols-1'>
                <div className='col-span-2'>
                    <div>
                        <figure><img className='h-80 w-full object-cover object-center rounded-xl' src={img} alt="" /></figure>
                        <h3 className='mt-11 mb-6 font-bold text-3xl text-[#151515]'>{title} Service</h3>
                        <p className='font-light leading-relaxed text-[#737373] text-sm'>{description}</p>
                        {/* facility is here */}
                        <div className='grid grid-cols-2 my-7 gap-5'>
                            {
                                facility?.map((f, idx) => <div key={idx} className="card bg-[#F3F3F3] rounded-lg border-t-2 border-[#FF3811] p-5 text-primary-content">
                                    <div className="card-body">
                                        <h2 className="text-[#444444] font-bold text-xl">{f?.name}</h2>
                                        <p className='font-light text-[#737373]'>{f?.details}</p>

                                    </div>
                                </div>)
                            }

                        </div>
                        <p className='font-light leading-relaxed text-[#737373] text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    {/* 3 Simple Steps */}
                    <div>
                        <h3 className='mt-11 mb-6 font-bold text-3xl text-[#151515]'>3 Simple Steps to Process</h3>
                        <p className='font-light leading-relaxed text-[#737373] text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

                        <div className='grid grid-cols-3 my-7 gap-5'>
                            <div className="card border-[#F3F3F3] rounded-lg border-t-2  text-primary-content">
                                <div className="card-body flex items-center justify-center text-center">
                                    <img src={step1} alt="" />
                                    <h2 className="text-black uppercase mt-2 mb-1 font-bold text-xl">Step One</h2>
                                    <p className='font-light text-[#737373]'>It uses a dictionary of over 200 .</p>

                                </div>
                            </div>
                            <div className="card border-[#F3F3F3] rounded-lg border-t-2  text-primary-content">
                                <div className="card-body flex items-center justify-center text-center">
                                    <img src={step2} alt="" />
                                    <h2 className="text-black uppercase mt-2 mb-1 font-bold text-xl">Step Two</h2>
                                    <p className='font-light text-[#737373]'>It uses a dictionary of over 200 .</p>

                                </div>
                            </div>
                            <div className="card border-[#F3F3F3] rounded-lg border-t-2  text-primary-content">
                                <div className="card-body flex items-center justify-center text-center">
                                    <img src={step3} alt="" />
                                    <h2 className="text-black uppercase mt-2 mb-1 font-bold text-xl">Step three</h2>
                                    <p className='font-light text-[#737373]'>It uses a dictionary of over 200 .</p>

                                </div>
                            </div>


                        </div>

                        <img src={video}></img>
                    </div>
                </div>
                <div>
                    <div className='bg-[#F3F3F3] rounded-lg p-9'>
                        <h4 className='text-black text-xl font-bold'>Services</h4>
                        <div className='bg-[#FF3811] cursor-pointer mt-5 justify-between p-4 flex items-center rounded-md'>
                            <p className='text-white text-base font-bold'>Full Car Repair</p>
                            <button href="#slide1" className=" border-none mr-3"><FaArrowRight className='text-xl text-white' /></button>
                        </div>
                        <div className='bg-white cursor-pointer mt-5 justify-between p-4 flex items-center rounded-md'>
                            <p className='text-[#151515] text-base font-bold'>Engine Repair</p>
                            <button href="#slide1" className=" text-[#FF3811] border-none mr-3"><FaArrowRight className='text-xl' /></button>
                        </div>
                        <div className='bg-white cursor-pointer mt-4 justify-between p-4 flex items-center rounded-md'>
                            <p className='text-[#151515] text-base font-bold'>Automatic Services</p>
                            <button href="#slide1" className=" text-[#FF3811] border-none mr-3"><FaArrowRight className='text-xl' /></button>
                        </div>
                        <div className='bg-white cursor-pointer mt-4 justify-between p-4 flex items-center rounded-md'>
                            <p className='text-[#151515] text-base font-bold'>Engine Oil Change</p>
                            <button href="#slide1" className=" text-[#FF3811] border-none mr-3"><FaArrowRight className='text-xl' /></button>
                        </div>
                        <div className='bg-white cursor-pointer mt-4 justify-between p-4 flex items-center rounded-md'>
                            <p className='text-[#151515] text-base font-bold'>Battery Charge</p>
                            <button href="#slide1" className=" text-[#FF3811] border-none mr-3"><FaArrowRight className='text-xl' /></button>
                        </div>
                    </div>
                    <div className='bg-[#151515] mt-7 text-white rounded-lg p-9'>
                        <h4 className=' text-xl font-bold'>Download</h4>

                        <div className='flex items-center mt-6 justify-between'>
                            <div className="flex items-center gap-3">
                                <div>
                                    <HiDocumentChartBar className='text-3xl' />
                                </div>
                                <div>
                                    <h6 className='font-medium text-base mt-2'>Our Brochure</h6>
                                    <p className='font-normal mt-1 text-[#A2A2A2] text-sm'>Download</p>
                                </div>
                            </div>
                            <div>
                                <button href="#slide1" className="bg-[#FF3811] p-4 rounded-md border-none mr-3"><FaArrowRight className='text-xl  text-white' /></button>
                            </div>
                        </div>
                        <div className='flex items-center mt-4 justify-between'>
                            <div className="flex items-center gap-3">
                                <div>
                                    <HiDocumentChartBar className='text-3xl' />
                                </div>
                                <div>
                                    <h6 className='font-medium text-base mt-2'>Company Details</h6>
                                    <p className='font-normal mt-1 text-[#A2A2A2] text-sm'>Download</p>
                                </div>
                            </div>
                            <div>
                                <button href="#slide1" className="bg-[#FF3811] p-4 rounded-md border-none mr-3"><FaArrowRight className='text-xl  text-white' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#151515] mt-7 text-white rounded-lg p-9'>


                        <div className='flex flex-col items-center mt-6 justify-between'>

                            <img src={logo} className="w-1/2" />
                            <h4 className=' text-lg font-semibold  mt-4 mb-7 text-center'>Need Help? We Are Here
                                To Help You</h4>

                            <div className='bg-white py-3 rounded-lg px-9'>
                                <p className='text-lg font-bold text-black'><span className='text-[#FF3811]'>Car Doctor </span>Special</p>
                                <p className='text-md text-center mt-1 pb-7 text-[#FF3811] font-bold'><span className='text-[#737373]'>Save up to  </span>60% off</p>
                            </div>
                            <button className="bg-[#FF3811] -top-5 text-base text-white relative px-5 py-3 rounded-md border-none">Get A Quote</button>

                        </div>

                    </div>
                    <h2 className='text-3xl my-7 text-[#151515 font-bold'>Price ${price}</h2>
                    <Link to={`/checkOut/${_id}`}>
                        <button className="btn w-full border-none text-base rounded-md text-white bg-[#FF3811]">Proceed Checkout</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetails;
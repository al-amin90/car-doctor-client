import check from '../../assets/images/checkout/checkout.png';
import { Link } from 'react-router-dom';

const AddService = () => {
    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div id="slide1" className="carousel-item max-h-64] mb-20 relative w-full">
                <img src={check} className="w-full object-cover rounded-xl object-center min-h-64]" />
                <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                    <div className='max-w-lg'>
                        <h2 className='font-semibold leading-tight text-5xl'>Add New Service</h2>
                    </div>
                </div>
                <p className=' absolute right-1/2 transform translate-x-1/2 -bottom-4 text-white font-normal bg-[#FF3811] py-2 px-12 my-4'>Home/Service</p>
            </div>

            <div>
                <form className=" mb-28 bg-[#F3F3F3] p-20 rounded-lg">
                    <div className=" flex gap-5 mt-3">
                        <input type="text" name='Service Name' placeholder="Service Name" className="input w-full text-sm bg-white border-none input-bordered" required />
                        <input type="password" name="password" placeholder="Service Price" className="input w-full text-sm bg-white border-none input-bordered" required />
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <input type="text" name='Service Name' placeholder="Text here" className="input w-full text-sm bg-white border-none input-bordered" required />
                        <input type="password" name="password" placeholder="Service Type" className="input w-full text-sm bg-white border-none input-bordered" required />
                    </div>
                    <div className="mt-5">
                        <textarea name="" id="" className='w-full text-sm p-4 rounded-lg' placeholder='Product Description' cols="30" rows="10"></textarea>
                    </div>

                    <div className=" mt-5">
                        <button className="btn bg-[#FF3811] w-full text-white">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
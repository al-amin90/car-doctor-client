import axios from 'axios';
import useAuth from '../../Utilis/useAuth';
import check from '../../assets/images/checkout/checkout.png';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { baseURL } from '../../Utilis/url';

const AddService = () => {
    const service = useLoaderData()
    const location = useLocation()
    const { user } = useAuth()

    const { _id, price, img, title } = service;
    console.log(service);

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const order = {
            customerName: name,
            email,
            message,
            title,
            date,
            img,
            service: _id,
            price: price
        }

        axios.post(`${baseURL}/bookings`, { ...order })
            .then(res => {
                if (res.data.insertedId) {
                    alert("added Successfully")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div id="slide1" className="carousel-item max-h-64] mb-20 relative w-full">
                <img src={check} className="w-full object-cover rounded-xl object-center min-h-64]" />
                <div className='min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute'></div>

                <div className='flex justify-between absolute text-white pl-20 top-1/2 transform -translate-y-1/2'>
                    <div className='max-w-lg'>
                        <h2 className='font-semibold leading-tight text-5xl'>Check Out</h2>
                    </div>
                </div>
                <p className=' absolute right-1/2 transform translate-x-1/2 -bottom-4 text-white font-normal bg-[#FF3811] py-2 px-12 my-4'>Home/Checkout</p>
            </div>

            <div>
                <form onSubmit={handleBookService} className=" mb-28 bg-[#F3F3F3] p-20 rounded-lg">
                    <div className=" flex gap-5 mt-3">
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input w-full text-sm bg-white border-none input-bordered" required />
                        <input type="date" name="date" placeholder="Last Name" className="input w-full text-sm bg-white border-none input-bordered" required />
                    </div>
                    <div className=" flex gap-5 mt-5">
                        <input type="text" name='price' defaultValue={`$` + price} placeholder="Due Amount" className="input w-full text-sm bg-white border-none input-bordered" required />
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input w-full text-sm bg-white border-none input-bordered" required />
                    </div>
                    <div className="mt-5">
                        <textarea name="message" id="" className='w-full text-sm p-4 rounded-lg' placeholder='Your Message' cols="30" rows="10"></textarea>
                    </div>

                    <div className=" mt-5">
                        <button type='submit' className="btn bg-[#FF3811] w-full text-white">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;
import cartDet from "../../assets/images/checkout/cart.png";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";
import useAuth from "../../Utilis/useAuth";
import { baseURL } from "../../Utilis/url";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CartDetails = () => {
    const { user } = useAuth();
    const [carts, setCarts] = useState(null)

    useEffect(() => {
        axios.get(`${baseURL}/bookings?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setCarts(res.data)
            })

        // fetch(`${baseURL}/bookings?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setCarts(data));
    }, [])

    console.log(carts);

    const handleDelete = id => {
        fetch(`${baseURL}/booking/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = carts.filter(cart => cart._id !== id);
                    setCarts(remaining)
                    alert("delete successfully")
                }
            })
    }

    const handleConfirm = id => {
        axios.patch(`${baseURL}/booking/${id}`, { status: "confirm" })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    const remaining = carts.filter(cart => cart._id !== id);
                    const updated = carts.find(cart => cart._id === id);
                    updated.status = 'confirm'
                    const newCarts = [updated, ...remaining]
                    setCarts(newCarts)
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="max-w-7xl mx-auto w-[90%] md:w-[85%]">
            <div
                id="slide1"
                className="carousel-item max-h-64] mb-20 relative w-full"
            >
                <img
                    src={cartDet}
                    className="w-full object-cover rounded-xl object-center min-h-64]"
                />
                <div className="min-h-full min-w-full rounded-xl bg-gradient-to-r from-[#151515] to-[#15151500] absolute"></div>

                <div className="flex justify-between absolute text-white pl-28 top-1/2 transform -translate-y-1/2">
                    <div className="max-w-lg">
                        <h2 className="font-semibold leading-tight text-4xl">
                            Cart Details
                        </h2>
                        <p className="text-[#FF3811] font-medium ">
                            Home - Product Details
                        </p>
                    </div>
                </div>
            </div>

            <div>
                {carts?.map((cart) => (
                    <div key={cart._id} className="flex items-center mb-12 justify-between">
                        <div className="flex items-center gap-7">
                            <button onClick={() => handleDelete(cart._id)} className="p-2 h-fit bg-[#444444] hover:bg-[#FF3811] rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 text-white w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            <figure>
                                <img
                                    className="w-40 aspect-square object-cover object-center rounded-xl"
                                    src={cart?.img}
                                    alt=""
                                />
                            </figure>
                            <div className="space-y-2">
                                <h6 className="font-semibold text-lg">{cart?.title}</h6>
                                <p className="font-normal text-gray-400 text-base">
                                    Color : Green
                                </p>
                                <p className="font-normal text-gray-400 text-base">Size: S</p>
                            </div>
                        </div>
                        <p className="font-semibold text-base">${cart?.price}</p>
                        <p className="font-semibold text-base">{cart?.date}</p>
                        {
                            cart.status === 'confirm' ?
                                <button className=" font-semibold text-base border-none  rounded-lg hover:bg-slate-600 px-4 text-white py-2 bg-[#54ff11]">
                                    Confirmed
                                </button>
                                :
                                <button onClick={() => handleConfirm(cart?._id)} className=" font-semibold text-base border-none  rounded-lg hover:bg-slate-600 px-4 text-white py-2 bg-[#FF3811]">
                                    Pending
                                </button>
                        }

                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mb-28">
                <div className="flex items-center cursor-pointer hover:text-[#FF3811] gap-2">
                    <PiArrowBendUpLeftBold className="text-lg" />
                    <p>Continue Shopping</p>
                </div>
                <div className="flex items-center cursor-pointer hover:text-[#FF3811] gap-2">
                    <FaRegTrashCan className="text-lg" />
                    <p>Clear Shopping Cart</p>
                </div>
            </div>
        </div>
    );
};

export default CartDetails;

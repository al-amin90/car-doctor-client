import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { FaArrowRight } from "react-icons/fa6";

const Service = () => {

    const { isError, error, isPending, data: services } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('/services.json')
            return res.json()
        }
    })

    if (isPending) {
        return <div className='flex items-center justify-center my-20'>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#FF3811"
                secondaryColor="#FF3811"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />

        </div>
    }

    if (isError) {
        return <p>{error.message}</p>
    }

    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold mb-4'>Service</p>
                <h1 className="text-4xl text-black font-bold">Our Service Area</h1>
                <h2 ></h2>
                <p className='w-2/3 capitalize mx-auto mt-3 mb-14'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(ser => (
                        <div key={ser.service_id} className="rounded-lg border p-5 ">
                            <figure><img className='rounded-lg object-cover object-center h-52 w-full' src={ser?.img} alt="Shoes" /></figure>
                            <div className="">
                                <h2 className="pt-5 text-xl font-bold">{ser?.title}</h2>
                                <div className="flex text-[#FF3811] text-lg font-semibold justify-between items-center">
                                    <p>Price : ${ser?.price}</p>
                                    <button className="btn btn-circle text-[#FF3811] text-lg bg-transparent"><FaArrowRight /></button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center mt-11 mb-28 justify-center'>
                <button className="btn btn-outline text-sm rounded-md text-[#FF3811]">More Services</button>
            </div>
        </div>
    );
};

export default Service;
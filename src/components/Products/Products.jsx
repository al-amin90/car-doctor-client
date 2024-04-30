import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCard from './ProductCard';
import { MutatingDots } from 'react-loader-spinner';

const Products = () => {
    const { data: products, isPending, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('/Products.json')
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
        <div className='max-w-7xl my-28 mx-auto w-[90%] md:w-[85%]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold mb-4'>Popular Products</p>
                <h1 className="text-4xl text-black font-bold">Browse Our Products</h1>
                <h2 ></h2>
                <p className='w-2/3 mx-auto mt-3 mb-14 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products?.map(prod => <ProductCard
                        prod={prod}
                        key={prod.service_id}></ProductCard>)
                }
            </div>
            <div className='flex items-center mt-11 mb-28 justify-center'>
                <button className="btn btn-outline text-sm rounded-md text-[#FF3811]">More Products</button>
            </div>
        </div>
    );
};

export default Products;
import React from 'react';

const ProductCard = ({ prod }) => {
    return (
        <div className="rounded-lg border p-5 ">
            <figure className='h-52 flex items-center justify-center w-full rounded-lg bg-[#F3F3F3]'>
                <img className=' object-cover object-center ' src={prod?.img} alt="Shoes" />
            </figure>
            <div className="text-center mt-6">
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div>
                <h2 className="text-2xl my-1 font-bold">{prod?.title}</h2>
                <p className='text-[#FF3811] text-lg font-semibold'>Price : ${prod.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
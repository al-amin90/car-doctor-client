import tram from '../../assets/icons/check.svg';
import grop from '../../assets/icons/group.svg';
import delivery from '../../assets/icons/deliveryt.svg';
import mic from '../../assets/icons/person.svg';
import setting from '../../assets/icons/Wrench.svg';
import clock from '../../assets/icons/Grou.svg';

const Features = () => {
    return (
        <div className='max-w-7xl my-28 mx-auto w-[90%] md:w-[85%]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold mb-4'>Core Features</p>
                <h1 className="text-4xl text-black font-bold">Why Choose Us</h1>
                <p className='w-2/3 mx-auto mt-3 mb-12 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='flex justify-between items-center'>

                <div className='rounded-md border flex flex-col items-center justify-center p-6'>
                    <img src={grop} alt="" />
                    <h4 className='text-[#444444] mt-3 font-bold'>Expert Team</h4>
                </div>

                <div className='rounded-md bg-[#FF3811]  flex flex-col items-center justify-center p-6'>
                    <img src={clock} alt="" />
                    <h4 className='text-white mt-3 font-bold'>Timely Delivery</h4>
                </div>

                <div className='rounded-md border flex flex-col items-center justify-center p-6'>
                    <img src={mic} alt="" />
                    <h4 className='text-[#444444] mt-3 font-bold'>24/7 Support</h4>
                </div>
                <div className='rounded-md border flex flex-col items-center justify-center p-6'>
                    <img src={setting} alt="" />
                    <h4 className='text-[#444444] mt-3 font-bold'>Best Equipment</h4>
                </div>
                <div className='rounded-md border flex flex-col items-center justify-center p-6'>
                    <img src={tram} alt="" />
                    <h4 className='text-[#444444] mt-3 font-bold'>100% Guranty</h4>
                </div>
                <div className='rounded-md border flex flex-col items-center justify-center p-6'>
                    <img src={delivery} alt="" />
                    <h4 className='text-[#444444] mt-3 font-bold'>Timely Delivery</h4>
                </div>
            </div>
        </div>
    );
};

export default Features;
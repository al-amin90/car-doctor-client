import calender from '../../assets/calender.png';
import phone from '../../assets/phone.png';
import location from '../../assets/loca.png';

const ContactBanner = () => {
    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className="p-6 py-12 rounded-lg bg-[#151515] text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col px-14 py-12 lg:flex-row items-center justify-between ">
                        <div className="flex items-center gap-5">
                            <div>
                                <img src={calender} alt="" />
                            </div>
                            <div>
                                <p className='font-normal'>We are open monday-friday</p>
                                <h6 className='font-bold text-2xl mt-2'>7:00 am - 9:00 pm</h6>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img src={phone} alt="" />
                            </div>
                            <div>
                                <p className='font-normal'>Have a question?</p>
                                <h6 className='font-bold text-2xl mt-2'>+2546 251 2658</h6>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img src={location} alt="" />
                            </div>
                            <div>
                                <p className='font-normal'>Need a repair? our address</p>
                                <h6 className='font-bold text-2xl mt-2'>Liza Street, New York</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;
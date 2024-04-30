import person from '../../assets/images/about_us/person.jpg';
import parts from '../../assets/images/about_us/parts.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
            <div className="hero my-28">
                <div className="flex flex-col lg:flex-row">
                    <div className='flex-1 relative mr-36'>
                        <img src={person} className="w-full rounded-lg" />
                        <img src={parts} className="absolute top-1/2 -right-20 border-8 border-white rounded-md w-2/3" />
                    </div>
                    <div className='flex-1 flex-grow'>
                        <p className='text-[#FF3811] font-bold mb-4'>About Us</p>
                        <h1 className="text-5xl md:w-10/12 text-black font-bold">We are qualified <br /> & of experience in this field</h1>
                        <p className="pt-6 md:w-11/12 font-light text-sm leading-snug">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-5 md:w-11/12 font-light text-sm leading-snug">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <Link className="btn border-none px-5 text-sm rounded-md text-white bg-[#FF3811]">Get More Info</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import sing from '../../assets/images/login/login.svg';
import Navbar2 from '../Shared/Navbar2/Navbar2';
import google from "../../assets/icons/goo.png"
import linkdin from "../../assets/icons/link.png"
import face from "../../assets/icons/Facebook.png"
import { useNavigate } from 'react-router-dom';

const SingUp = () => {
    const navigate = useNavigate()


    return (
        <div>
            <Navbar2></Navbar2>
            <div className='max-w-7xl mx-auto w-[90%] md:w-[85%]'>
                <div className="mb-16">
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="flex items-center justify-center flex-1 lg:text-left">
                            <img className='w-full  ' src={sing} alt="" />
                        </div>
                        <div className="card  flex-1 p-16 ml-24 shrink-0 w-full border">
                            <h2 className='text-center font-semibold mb-10 text-3xl'>Sign Up</h2>

                            <form className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-base font-semibold">Name</span>
                                    </label>
                                    <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="text-base font-semibold">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-3">
                                    <label className="label">
                                        <span className="text-base font-semibold">Confirm Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white">Sing Up</button>
                                </div>
                            </form>
                            <div className='text-base text-center'>
                                <p className='text-[#444444] my-5'>Or Sign Up with</p>
                                <div className='flex mb-7 items-center justify-center gap-3'>
                                    <figure><img src={google} className="cursor-pointer" /></figure>
                                    <figure><img src={linkdin} className="cursor-pointer" /></figure>
                                    <figure><img src={face} className="cursor-pointer" /></figure>
                                </div>
                                <p className='text-[#A2A2A2]'>Already have an account? <span onClick={() => navigate("/login")} className='text-[#FF3811] cursor-pointer'>Login</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
import sing from '../../assets/images/login/login.svg';
import Navbar2 from '../Shared/Navbar2/Navbar2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Utilis/useAuth';
import SocialMediaLogIn from '../../components/SocialMediaLogIn/SocialMediaLogIn';
import axios from 'axios';
import { baseURL } from '../../Utilis/url';

const Login = () => {
    const navigate = useNavigate()
    const { userLogin } = useAuth()
    const location = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target

        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {

                if (result.user) {
                    alert("Login in successfully")
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

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
                            <h2 className='text-center font-semibold mb-10 text-3xl'>Login</h2>

                            <form onSubmit={handleSubmit} className="">
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
                                    <button className="btn bg-[#FF3811] text-white">Sing In</button>
                                </div>
                            </form>
                            <div className='text-base text-center'>
                                <SocialMediaLogIn></SocialMediaLogIn>
                                <p className='text-[#A2A2A2]'>Already have an account? <span onClick={() => navigate("/SingUp")} className='text-[#FF3811] cursor-pointer'>Sing Up</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
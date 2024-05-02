import google from "../../assets/icons/goo.png"
import linkdin from "../../assets/icons/link.png"
import face from "../../assets/icons/Facebook.png"
import useAuth from "../../Utilis/useAuth";

const SocialMediaLogIn = () => {
    const { handleGoogleProvider } = useAuth()

    const handleGoogle = () => {
        handleGoogleProvider()
            .then(result => {
                if (result.user) {
                    alert("Google Sing in successfully")
                }
            })
    }

    return (
        <div>
            <p className='text-[#444444] my-5'>Or Sign Up with</p>
            <div className='flex mb-7 items-center justify-center gap-3'>
                <figure onClick={handleGoogle}><img src={google} className="cursor-pointer" /></figure>
                <figure><img src={linkdin} className="cursor-pointer" /></figure>
                <figure><img src={face} className="cursor-pointer" /></figure>
            </div>
        </div>
    );
};

export default SocialMediaLogIn;
import error from '../../assets/icons/error.png';
import Navbar2 from '../Shared/Navbar2/Navbar2';

const Eroorpage = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className='flex items-center h-[calc(100vh-128px)] justify-center'>
                <img src={error} className="w-[45rem]" />
            </div>
        </div>
    );
};

export default Eroorpage;
import team1 from '../../assets/images/team/1.jpg';
import team2 from '../../assets/images/team/2.jpg';
import team3 from '../../assets/images/team/3.jpg';
import social from '../../assets/icons/social.png';


const OurTeam = () => {
    return (
        <div className='max-w-7xl my-28 mx-auto w-[90%] md:w-[85%]'>
            <div className='text-center'>
                <p className='text-[#FF3811] font-bold mb-4'>Team</p>
                <h1 className="text-4xl text-black font-bold">Meet Our Team</h1>
                <h2 ></h2>
                <p className='w-2/3 mx-auto mt-3 mb-12 capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
                <div className="rounded-lg border p-5 ">
                    <figure className='h-52 flex items-center justify-center w-full rounded-lg bg-[#F3F3F3]'>
                        <img className='w-full rounded-lg object-cover object-center ' src={team1} alt="Shoes" />
                    </figure>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl my-1 font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                        <figure className='flex items-center justify-center mt-2'>
                            <img src={social} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="rounded-lg border p-5 ">
                    <figure className='h-52 flex items-center justify-center w-full rounded-lg bg-[#F3F3F3]'>
                        <img className='w-full rounded-lg object-cover object-center ' src={team2} alt="Shoes" />
                    </figure>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl my-1 font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                        <figure className='flex items-center justify-center mt-2'>
                            <img src={social} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="rounded-lg border p-5 ">
                    <figure className='h-52 flex items-center justify-center w-full rounded-lg bg-[#F3F3F3]'>
                        <img className='w-full rounded-lg object-cover object-center ' src={team3} alt="Shoes" />
                    </figure>
                    <div className="text-center mt-6">
                        <h2 className="text-2xl my-1 font-bold">Car Engine Plug</h2>
                        <p className='text-[#737373] text-lg font-semibold'>Engine Expert</p>
                        <figure className='flex items-center justify-center mt-2'>
                            <img src={social} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
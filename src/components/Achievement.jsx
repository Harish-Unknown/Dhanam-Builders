import React,{useEffect}  from 'react'
import { PiBuildingsBold } from "react-icons/pi";
import { BsCurrencyRupee } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { MdOutlineLandscape } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Achievement() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div name='Milestones' className='flex flex-col md:flex-row justify-around items-center p-[20px] brightness-[95%] bg-[#D7CEB2]'>
            <div data-aos="fade-right" className='flex flex-col lg:flex-row justify-around items-center w-full'>
                <div className='flex flex-col mb-[70px] bg-[#8F6593] transition-all duration-500 hover:scale-105 custom-box-shadow w-[220px] h-[220px] rounded-lg lg:mb-0 justify-center items-center '>
                    <div className='p-[30px] bg-[#D9D9D9] rounded-[360px] mb-3'>
                        <PiBuildingsBold className='text-[40px]' />
                    </div>
                    <h1 className='text-[18px] text-[#1A181B] font-[800] m-1'>25+</h1>
                    <h5 className='text-[18px] text-[#1A181B] font-[800] m-1 text-center w-[70%] lg:w-[100%]'> Years of Experience</h5>
                </div>
                <div className='flex flex-col mb-[70px] bg-[#8F6593] transition-all duration-500 hover:scale-105 custom-box-shadow w-[220px] h-[220px] rounded-lg md:mb-0  justify-center items-center'>
                    <div className='p-[35px] bg-[#D9D9D9] rounded-[360px] mb-3'>
                        <GrProjects className='text-[30px]' />
                    </div>
                    <h1 className='text-[18px] text-[#1A181B] font-[800] m-1'>30+</h1>
                    <h5 className='text-[18px] text-[#1A181B] font-[800] m-1 text-center w-[70%] lg:w-[100%]'>Number of Projects</h5>
                </div>
            </div>
            <div data-aos="fade-left" className='flex flex-col lg:flex-row justify-around items-center w-full'>
                <div className='flex flex-col mb-[70px] bg-[#8F6593] transition-all duration-500 hover:scale-105 custom-box-shadow w-[220px] h-[220px] rounded-lg lg:mb-0  justify-center items-center'>
                    <div className='p-[30px] bg-[#D9D9D9] rounded-[360px] mb-3'>
                        <MdOutlineLandscape className='text-[40px]' />
                    </div>
                    <h1 className='text-[18px] text-[#1A181B] font-[800] m-1'>150000+</h1>
                    <h5 className='text-[18px] text-[#1A181B] font-[800] m-1 text-center w-[70%] lg:w-[100%]'>Sq.ft Construction</h5>
                </div>
                <div className='flex flex-col justify-center bg-[#8F6593] transition-all duration-500 hover:scale-105 custom-box-shadow w-[220px] h-[220px] rounded-lg items-center'>
                    <div className='p-[30px] bg-[#D9D9D9] rounded-[360px] mb-3'>
                        <BsCurrencyRupee className='text-[40px]' />
                    </div>
                    <h1 className='text-[18px] text-[#1A181B] font-[800] m-1'>50+ </h1>
                    <h5 className='text-[18px] text-[#1A181B] font-[800] m-1 text-center w-[70%] lg:w-[100%]'>Crore Values</h5>
                </div>
            </div>
        </div>
    )
}

export default Achievement

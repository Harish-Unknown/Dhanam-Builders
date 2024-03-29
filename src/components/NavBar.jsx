import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'
import { MdPhoneInTalk } from "react-icons/md";
import logo from '/images/Dhanam_Builders_Logo.png'

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMenu = () => {
        setClick(false);
    }

    const content = <>
        <div className='lg:hidden block absolute top-24 w-full left-0 right-0   shadow-xl bg-[#372739]  transition'>
            <ul className='text-center text-xl p-10'>
                <Link smooth duration={300} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>About</li>
                </Link>
                <Link smooth duration={300} to="Projects" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Projects</li>
                </Link>
                <Link smooth duration={300} to="Milestones" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Milestones</li>
                </Link>
                <Link smooth duration={300} to="Testimonials" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Testimonials</li>
                </Link>
                <Link smooth duration={300} to="Contact" style={{ textDecoration: 'none', color: '#fff' }}>
                    <li className='my-3 font-[600] text-[18px] py-3 text-[#E3E4DB] hover:cursor-pointer hover:bg-[#8F6593] hover:rounded' onClick={closeMenu}>Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav className='bg-[#372739] fixed w-full top-0 z-50'>
            <div className='h-[100px] font-bold flex justify-between z-50 text-[#E3E4DB] py-[12px] px-10 lg:px-20'>
                <div className='flex items-center'>
                    <span className='text-3xl font-bold'><img src={logo} className='w-[110px]' alt='' /></span>
                </div>
                <div className='md:hidden flex justify-center items-center'>
                    <h5>Dhanam Builders</h5>
                </div>
                <div className='lg:flex md:flex lg: flex-1  justify-center font-normal hidden items-center'>
                    <div className='flex'>
                        <ul className='flex gap-8 font-[600] lg:gap-12 items-center text-[15px] lg:text-[18px]'>
                            <Link smooth duration={300} to="About" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>About</li>
                            </Link>
                            <Link smooth duration={300} to="Projects" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Projects</li>
                            </Link>
                            <Link smooth duration={300} to="Milestones" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Milestones</li>
                            </Link>
                            <Link smooth duration={300} to="Testimonials" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Testimonials</li>
                            </Link>
                            <Link smooth duration={300} to="Contact" style={{ textDecoration: 'none', color: '#fff' }}>
                                <li className='hover:text-gray-400 text-[#E3E4DB] transition cursor-pointer'>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <MdPhoneInTalk className='text-3xl m-2' />
                    <div className='m-2 hidden md:block'>
                        <h5>Sales Enquiry</h5>
                        <p>+91 95661 55702</p>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>
                <button className='block md:hidden transition' onClick={handleClick}>
                    {click ? <FaTimes className='text-2xl' /> : <CiMenuFries className='text-2xl font-bold' />}
                </button>
            </div>
        </nav>
    )
}

export default NavBar
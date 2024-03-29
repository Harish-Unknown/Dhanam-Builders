import React from 'react';
import logo from '/images/Dhanam_Builders_Logo.png';
import { FaFacebook, FaInstagram, FaMailBulk, FaRupeeSign } from "react-icons/fa";
import { FaSquareXTwitter, FaYoutube, FaWhatsapp, FaLocationDot, FaPhone, FaBuildingColumns } from "react-icons/fa6";

function Footer() {
    return (

        <div name='Contact' className="w-full p-8 bg-[#1A181B]">
            <div className="flex flex-col lg:flex-row justify-around items-center">
                <div className="flex flex-col justify-center items-center">
                    <a href="#" className="flex items-center justify-center">
                        <img src={logo} className="w-[120px] md:w-[150px] me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Dhanam Builders</span>
                    </a>
                    {/* <div className="flex my-3 w-[300px] flex-wrap  items-center justify-evenly">
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaFacebook className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaInstagram className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaSquareXTwitter className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaYoutube className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaWhatsapp className='text-2xl' />
                        </a>

                    </div> */}

                </div>
                <div className='flex w-auto flex-col md:flex-row items-center justify-center'>

                    <div className='w-3/4 p-3 mx-5'>
                        <h2 className="mb-6 text-md font-bold text-gray-400 uppercase">Contact Info</h2>
                        <ul className="text-gray-200 font-medium">
                            <div className='flex justify-center items-start'>
                                <FaLocationDot className='text-[1.3rem] ml-[-17px] mr-3' />
                                <li className="mb-4">Door.No.11/192, Kalaignar Salai 1st Street, Kovilambakam, Chennai - 600117.</li>
                            </div>
                            <div className='flex justify-start items-start'>
                                <FaPhone className='text-[1.2rem] mr-3 ml-1' />
                                <li className="mb-4">Phone: +91 95661 55702</li>
                            </div>
                            <div className='flex justify-start items-start'>
                                <FaMailBulk className='fontSize-[35px] ic mr-3' />
                                <li className='w-auto'>dhanambuilders1995@gmail.com</li>
                            </div>
                        </ul>
                    </div>
                    <div className="flex my-3 w-[300px] flex-wrap  items-center justify-evenly">
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaFacebook className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaInstagram className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaSquareXTwitter className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaYoutube className='text-2xl' />
                        </a>
                        <a href="#" className="text-gray-200 m-2 hover:text-gray-600">
                            <FaWhatsapp className='text-2xl' />
                        </a>

                    </div>
                    {/* <div className='w-3/4 p-3 mx-5'>
                        <h2 className="mb-6 text-md font-bold text-gray-400 uppercase">MSME</h2>
                        <div className='flex justify-start items-start'>
                            <FaBuildingColumns className='text-[18px] text-gray-200 mr-3' />
                            <p className="mb-6 text-gray-200 font-medium">MSME NO: XXXXXXXX</p>
                        </div>
                        <h2 className="mb-6 text-md font-bold text-gray-400 uppercase">GST</h2>
                        <div className='flex justify-start items-start'>
                            <FaRupeeSign className='text-[18px] text-gray-200 mr-3' />
                            <p className="text-gray-200 font-medium">GSTIN: XXXXXXXX</p>
                        </div>
                        
                    </div> */}
                </div>

            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="flex w-full items-center justify-center">
                <span className="text-sm text-gray-200 text-center mx-1">© 2024 <a href="#" className="hover:underline">Dhanam Builders™</a>. All Rights Reserved.
                </span>

            </div>
        </div>
    );
}

export default Footer;

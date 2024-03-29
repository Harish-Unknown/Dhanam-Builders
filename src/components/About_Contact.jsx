import React from 'react'

function About_Contact() {
    return (
        <div name='About' className='p-10 bg-[#ede3dc] md:p-[70px] realtive'>
            <div className='about mb-5 lg:mb-0 lg:absolute lg:mt-[10vh] lg:pl-[50vw] left-0 right-0 w-100 bg-[#8F6593] p-10 text-white'>
                <h1 className='my-3 text-gray-800 text-xl font-[700]'>About Us</h1>
                <p className='leading-8'>Dhanam Builders, situated in Chennai, specializes in constructing small-scale residential properties. Our dedicated team collaborates closely with clients to craft personalized homes tailored to their desires and requirements. Whether it's traditional or contemporary designs, we emphasize quality and meticulousness in every project to ensure utmost customer satisfaction. Through transparent communication and dependable service, we strive to surpass expectations and deliver homes that resonate with our clients' distinct aspirations. At Dhanam Builders, we're committed to transforming dreams into reality, one home at a time.</p>
            </div>
            <div className='p-5 w-[100%] lg:w-[45%] bg-[#CDCDCD] relative z-10'>
                <div className='absolute top-0 right-0 bg-[#8F6593] w-12 h-12'></div>
                <h1 className='text-2xl font-bold p-3'>Enquiry Form</h1>
                <form action="https://getform.io/f/panvlxpa" method="POST" >
                    <input type='text' placeholder='Name' name="name" className='m-3 px-3 w-[90%] py-2 placeholder-gray-700 focus:outline-none resize-none' />
                    <div className='flex'>
                        <input type='text' placeholder='Phone' name="phone" className='m-3 px-3 w-[42%] py-2 placeholder-gray-700 focus:outline-none resize-none' />
                        <input type='text' placeholder='Budget' name="budget" className='m-3 px-3 w-[42%] py-2 placeholder-gray-700 focus:outline-none resize-none' />
                    </div>
                    <textarea id="message" placeholder="Message" name="message" className="m-3 py-2 px-3 w-[90%] h-32 placeholder-gray-700 focus:outline-none resize-none"></textarea>
                    <button className='text-white text-[18px] bg-[#8F6593] px-5 py-2 my-3 mx-auto block'>Contact Us</button>
                </form>
            </div>
        </div>

    )
}

export default About_Contact

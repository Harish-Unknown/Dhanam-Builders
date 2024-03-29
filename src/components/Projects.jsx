import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRupeeSign } from 'react-icons/fa';
import Box from '@mui/material/Box';

const customArrowStyles = `
    .slick-prev:before, .slick-next:before {
        color: #000; 
        font-size: 20px; 
    }
`;


const SwiperSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const setting = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const data = [
        {
            title: 'Project 001',
            img: '/images/carousel-01.jpg'
        },
        {
            title: 'Project 002',
            img: '/images/carousel-02.jpg'
        },
        {
            title: 'Project 003',
            img: '/images/carousel-03.jpg'
        },
        {
            title: 'Project 004',
            img: '/images/carousel-04.jpg'
        },
        {
            title: 'Project 005',
            img: '/images/carousel-05.jpg'
        }
    ];

    return (
        <div name='Projects' className='bg-[#ece9e7] py-5'>
            <style>{customArrowStyles}</style>
            <div className='flex flex-col xl:flex-row'>
                <div className='w-full xl:w-1/3 '>
                    <div className='p-4 text-center'>
                        <h1 className='text-3xl mb-2 md:text-4xl font-bold'>Current Projects</h1>
                    </div>
                    <div className='w-3/4 mx-auto pb-5'>
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div key={index} className='flex p-2'>
                                    <Card sx={{backgroundColor: '#f1e7ec', display: 'flex', borderRadius: '15px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                            <CardContent sx={{ flex: '1 0 auto' }}>
                                                <Typography variant="h6" className='p-2' fontWeight="bold">
                                                    {d.title}
                                                </Typography>
                                                <Typography className='p-2'>
                                                    Name of the Project
                                                </Typography>
                                                <Typography className='p-2 mt-4'>
                                                    Project Value
                                                </Typography>
                                                <Typography className='flex items-center text-[#9D3C72] p-2' fontWeight="bold">
                                                    <FaRupeeSign /> 50 Crores
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '50%' }}
                                            image={d.img} // Use the image URL from your data
                                            alt="Project Image"
                                        />
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="xl:flex hidden items-center justify-center">
                    <svg width="2" className='ml-5' height="90%" viewBox="0 0 2 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="0%" x2="1" y2="100%" stroke="#747264" />
                    </svg>
                </div>
                <div className='w-3/4 xl:w-1/2 mx-auto mb-4 xl:mb-0'>
                    <div className='p-4 text-center'>
                        <h1 className='text-3xl mb-2 md:text-4xl font-bold'>Delivered Projects</h1>
                    </div>
                    <Slider {...setting}>
                        {data.map((d, index) => (
                            <div key={index} className='flex p-2'>
                                <Card sx={{ backgroundColor: '#f1e7ec', display: 'flex', borderRadius: '15px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography variant="h6" className='p-2' fontWeight="bold">
                                                {d.title}
                                            </Typography>
                                            <Typography className='p-2'>
                                                Name of the Project
                                            </Typography>
                                            <Typography className='p-2 mt-4'>
                                                Project Value
                                            </Typography>
                                            <Typography className='flex items-center text-[#9D3C72] p-2' fontWeight="bold">
                                                <FaRupeeSign /> 50 Crores
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '50%' }}
                                        image={d.img} // Use the image URL from your data
                                        alt="Project Image"
                                    />
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SwiperSlider;

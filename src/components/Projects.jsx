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
        autoplaySpeed: 5000,
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
        autoplaySpeed: 5000,
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
            title: 'Velachery, Ram Nagar, 17th Street',
            type: '3-Floored Villa ( Pile Foundation / Framed Structure )',
            work: 'Material + Labour',
            area: '2500 sq.ft',
            value: '55 Lakhs',
            img: '/images/carousel-01.jpg'
        },
        {
            title: 'Pudupakkam, Vanavil Estates',
            type: '2-Floored Villa ( Framed Structure )',
            work: 'Material + Labour',
            area: '1500 sq.ft',
            value: '30 Lakhs',
            img: '/images/carousel-02.jpg'
        },
        {
            title: 'Adambakkam, Parthasarathy Nagar, 11th Street',
            type: '1st Floor Renovation ( Load Bearing Structure )',
            work: 'Material + Labour',
            area: '1000 sq.ft',
            value: '25 Lakhs',
            img: '/images/carousel-03.jpg'
        }
    ];

    const data1 = [
        {
            title: 'Arasankazhani, GTK Foundation',
            type: '3-Floored Villa ( Framed Structure )',
            work: 'Material + Labour',
            area: '3000 sq.ft',
            value: '75 Lakhs',
            img: '/images/carousel-05.jpg'
        },
        {
            title: 'Medavakkam, Vadakkupattu',
            type: 'G+2, Apartment ( 7 Units )',
            work: 'Material + Labour',
            area: '6000 sq.ft',
            value: '1.5 Crores',
            img: '/images/carousel-06.jpg'
        },
        {
            title: 'Puzhuthivakkam, Balaji Nagar',
            type: 'G+3, Individual House ( 4 Portions )',
            work: 'Material + Labour',
            area: '3000 sq.ft',
            value: '50 Lakhs',
            img: '/images/carousel-04.jpg'
        },
        {
            title: 'Medavakkam, Munuswamy Nagar',
            type: '1-Floored Individual House',
            work: 'Material + Labour',
            area: '1000 sq.ft',
            value: '20 Lakhs',
            img: '/images/carousel-02.jpg'
        },
        {
            title: 'Nanganallur, 42nd Street',
            type: 'G+3, Villa',
            work: 'Material + Labour',
            area: '5000 sq.ft',
            value: '50 Lakhs',
            img: '/images/carousel-03.jpg'
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
                    <div className='w-[85%] mx-auto pb-5'>
                        <Slider {...settings}>
                            {data.map((d, index) => (
                                <div key={index} className='flex p-2'>
                                    <Card sx={{ backgroundColor: '#f1e7ec', display: 'flex', flexDirection: 'column', borderRadius: '15px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '300px', width: '100%' }}>
                                            <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                                <Typography className='p-2 text-start' fontSize="19px" fontWeight="900">
                                                    {d.title}
                                                </Typography>
                                                <Typography className='p-2' fontSize="17px" fontWeight="bold">
                                                    {d.type}
                                                </Typography>
                                                <Typography className='p-2 text-[16px]'>
                                                    <span className='font-bold'>Contract: </span> {d.work}
                                                </Typography>
                                                <Typography className='p-2 text-[16px]'>
                                                    <span className='font-bold'>Builtup Area: </span>  {d.area}
                                                </Typography>
                                                <Typography className='flex items-center text-[#9D3C72] p-2' fontSize="20px" fontWeight="900">
                                                    <span className='text-black'>Project Value: </span> <FaRupeeSign /> {d.value}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <CardMedia
                                            component="img"
                                            image={d.img}
                                            alt="Project Image"
                                            style={{ height: '170px', objectFit: 'cover' }}
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
                <div className='w-3/4 xl:w-[57%] mx-auto mb-4 xl:mb-0'>
                    <div className='p-4 text-center'>
                        <h1 className='text-3xl mb-2 md:text-4xl font-bold'>Delivered Projects</h1>
                    </div>
                    <Slider {...setting}>
                        {data1.map((d, index) => (
                            <div key={index} className='flex p-2'>
                                <Card sx={{ backgroundColor: '#f1e7ec', display: 'flex', flexDirection: 'column', borderRadius: '15px', boxShadow: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '300px', width: '100%' }}>
                                        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                            <Typography className='p-2 text-start' fontSize="19px" fontWeight="900">
                                                {d.title}
                                            </Typography>
                                            <Typography className='p-2' fontSize="17px" fontWeight="bold">
                                                {d.type}
                                            </Typography>
                                            <Typography className='p-2 text-[16px]'>
                                                <span className='font-bold'>Contract: </span> {d.work}
                                            </Typography>
                                            <Typography className='p-2 text-[16px]'>
                                                <span className='font-bold'>Builtup Area: </span>  {d.area}
                                            </Typography>
                                            <Typography className='flex items-center text-[#9D3C72] p-2' fontSize="20px" fontWeight="900">
                                                <span className='text-black'>Project Value: </span> <FaRupeeSign /> {d.value}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        image={d.img}
                                        alt="Project Image"
                                        style={{ height: '170px', objectFit: 'cover' }}
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

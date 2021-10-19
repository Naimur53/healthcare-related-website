import React from 'react';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Slider from 'react-slick';
import AboutYoga from '../AboutYoga/AboutYoga';
import Service from '../Service/Service';
import WhyLove from '../WhyLove/WhyLove';
import './Home.css'
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };
    return (
        < >
            <div>
                <Slider {...settings}>
                    <div className='slider-element first-slide '>
                        <div className='h-100 d-flex justify-content-center align-items-center '>
                            <div className=" slider-content d-md-flex align-items-center  h-100 w-100 p-5">
                                <div className="h-50  w-75">
                                    <h3 className='display-4 mb-4'>Find your best yoga accessories</h3>
                                    <h4 className='fw-light'>Yoga builds a strong bond between mind and body. Strengthening your mind and body can help build a bulletproof mindset </h4>
                                    <div className='d-inline-block'>
                                        <Nav.Link as={HashLink} className='btn bg-pink text-white px-5 py-2 mt-3' to='/home/#services'>services</Nav.Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider-element second-slide  '>
                        <div className='h-100 d-flex justify-content-center align-items-center '>
                            <div className=" slider-content d-md-flex align-items-center  h-100 w-100 p-5">
                                <div className=" h-50  w-75">
                                    <h3 className='display-4 mb-4'>Know About Yoga and get your accessories</h3>
                                    <h4 className='fw-light'>Yoga is much more than a trendy way to exercise, which is mostly what it's known as in the west. </h4>
                                    <div className='d-inline-block'>
                                        <Nav.Link as={HashLink} className='btn bg-pink text-white px-5 py-2 mt-3' to='/home/#services'>services</Nav.Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider-element third-slide  '>
                        <div className=" slider-content d-md-flex align-items-center  h-100 w-100 p-5">
                            <div className="  h-50  w-75">
                                <h3 className='display-4 mb-4'>Learn about spa and feel better today</h3>
                                <h4 className='fw-light'>Treatments Offered Like at a traditional day spa, luxurious treatments like massage, salt glow   </h4>
                                <div className='d-inline-block'>
                                    <Nav.Link as={HashLink} className='btn bg-pink text-white px-5 py-2 mt-3' to='/home/#services'>services</Nav.Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <Service></Service>
            <AboutYoga></AboutYoga>
            <WhyLove></WhyLove>

        </ >
    );
};

export default Home;
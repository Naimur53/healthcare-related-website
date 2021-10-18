import React from 'react';
import Slider from 'react-slick';
import About from '../About/About';
import Service from '../Service/Service';
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
                            <div className="slider-content text-center h-50 w-75 p-5">
                                <h3>Find your yoga accessories</h3>
                            </div>
                        </div>

                    </div>
                    <div className='slider-element second-slide  '>
                    </div>
                    <div className='slider-element third-slide  '>
                    </div>
                </Slider>
            </div>
            <Service></Service>
            <About></About>

        </ >
    );
};

export default Home;
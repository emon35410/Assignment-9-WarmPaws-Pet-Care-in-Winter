import React from 'react';
import BannerImg from "../assets/Frame 2.png";

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div
                className="hero min-h-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: `url(${BannerImg})`,
                }}>
                {/* Overlay for better text readability */}
                <div className="hero-overlay bg-opacity-40"></div>

                <div className="hero-content text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:max-w-2xl">
                        <h1 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                            Simple Steps to Maintain Your Pet’s Coat and Well-being
                        </h1>
                        <p className="mb-5 text-sm sm:text-base md:text-lg">
                            We make tails wag with playful energy and delight,
                            we help hearts purr with contentment and love,
                            offering caring, compassionate, and dedicated pet care.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

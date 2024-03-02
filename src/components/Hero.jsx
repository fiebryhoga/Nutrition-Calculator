import React from 'react';
import home from '../assets/images/home.png';

const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto flex justify-center items-center px-8 py-4 sm:px-10 md:px-16 lg:px-24">
            <div className="hero h-full bg-transparent">
                <div className="hero-content flex-col md:flex-row md:py-32">
                    <img className='max-w-[300px] lg:max-w-[450px]' src={home} alt="" />
                    <div className='flex flex-col justify-center items-center md:gap-4 lg:gap-8'>
                        <h1 className="text-3xl text-center sm:text-4xl md:text-4xl font-bold text-green-900 lg:text-6xl lg:font-extrabold">Nutrition Calculator</h1>
                        <p className="py-6 text-justify tracking-wide text-medium text-xs px-3 leading-5 md:text-sm lg:text-base lg:px-12">Nutrition Calculator adalah <b className='text-green-800'>web perhitungan gizi</b> yang komprehensif dengan fitur lengkap dan data terkini sesuai dengan standar <b className='text-green-800'>TKPI</b>, membantu Anda dengan cepat dan akurat merumuskan asupan nutrisi harian untuk gaya hidup sehat.</p>
                        <button className="btn btn-primary text-green-900 hover:scale-105 font-bold">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;

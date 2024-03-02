import React from 'react';
import kebutuhan from '../assets/images/kebutuhan.jpg'

const HomeCard = () => {
    return (
        <div className="max-w-[1640px] mx-auto flex flex-col justify-center items-center px-8 py-4 sm:px-10 md:px-16 lg:px-24">
            <div>
                <h2>Menawarkan Keunggulan Fitur</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-4'>
                <div className="card w-96 shadow-xl shadow-gray-300 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-green-800 hover:shadow-2xl ">
                    <figure><img className='rounded-t-lg' src={kebutuhan} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl shadow-gray-300 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-green-800 hover:shadow-2xl ">
                    <figure><img className='rounded-t-lg' src={kebutuhan} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl shadow-gray-300 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 hover:shadow-green-800 hover:shadow-2xl ">
                    <figure><img className='rounded-t-lg' src={kebutuhan} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Life hack</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn now!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCard;

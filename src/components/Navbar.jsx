import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UilSearchAlt, UilBars, UilTimes } from "@iconscout/react-unicons";

import logo from "../assets/images/logo.png";


const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className=" max-w-[1640px] mx-auto flex justify-between items-center px-8 py-4 sm:px-10 md:px-16 lg:px-24">

            {/* Bagian logo yang melakukan link ke layout atau Home Page */}
            <div className="flex flex-row justify-between items-center gap-8">
                <Link className="flex justify-center items-center" to="/Home">
                    <div className="flex justify-center items-center gap-0">
                        <img className="w-10" src={logo} alt="" />
                        <h1 className="text-green-900 font-extrabold tracking-wider hidden sm:flex">
                            utri<span className="text-yellow-600">C</span>al
                        </h1>
                    </div>
                </Link>
            </div>

            {/* Bagian Menu */}
            <div className=' flex-row justify-between items-center gap-4  lg:gap-6 hidden md:flex'>
                <ul className='px-6 text-sm font-semibold hover:text-green-800'>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                </ul>

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn text-center text-sm font-semibold hover:text-green-800">Nutrition</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu w-52 bg-transparent gap-1 rounded-md p-1 px-2">
                        <Link to='*'>
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Menu Makan</a></li>
                        </Link>
                        <Link to='*'>
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Menu Harian</a></li>
                        </Link>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn text-center text-sm font-semibold hover:text-green-800">Check Up</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu w-52 bg-transparent gap-1 rounded-md p-1 px-2">
                        <Link to='*'>
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Kebutuhan Energi</a></li>
                        </Link>


                        <Link to='*'>
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>IMT</a></li>
                        </Link>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn text-center text-sm font-semibold hover:text-green-800">More</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu w-52 bg-transparent gap-1 rounded-md p-1 px-2">
                        <Link to="*">
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Tentang Kami</a></li>

                        </Link>
                        <Link to="*">
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Kebijakan Cookie</a></li>

                        </Link>
                        <Link to="*">
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Documentasi</a></li>

                        </Link>
                        <Link to="*">
                            <li className='mb-1 border border-gray-200 py-1 rounded-md px-2 cursor-pointer hover:text-green-800 hover:border-green-800 font-medium'><a>Referensi Sumber</a></li>

                        </Link>

                    </ul>
                </div>




            </div>
            <div className="bg-transparent justify-center  items-center flex flex-row px-2 w-[200px] p-1 border border-green-800 rounded-lg sm:w-[270px] md:w-[280px] lg:w-[400px]">
                <UilSearchAlt className="text-green-800 " size={20} />
                <input
                    className="w-full ml-2 text-sm justify-center items-center placeholder:text-sm focus-within:outline-none"
                    type="text"
                    placeholder="cari bahan"
                />
            </div>

            {/* Nav Mobile */}

            <div onClick={() => setNav(!nav)} className=" cursor-pointer md:hidden">
                <UilBars size={25} className="text-green-800" />
            </div>

            {nav ? (
                <div className="bg-black opacity-25 fixed w-full h-screen z-10 top-0 right-0"></div>
            ) : (
                ""
            )}

            <div
                className={
                    nav
                        ? "fixed top-0 w-full sm:w-[36%] md:w-[32%] lg:w-[28%]   right-0 h-screen bg-white z-10 transition-all ease-in-out duration-700"
                        : "fixed top-0 w-full sm:w-[36%] md:w-[32%] lg:w-[28%]   left-[100%] h-screen bg-white z-10 transition-all ease-in-out duration-700"
                }
            >
                <div className="flex flex-row justify-between items-center px-8 py-4">

                    <div className="flex flex-row justify-center items-center">
                        <img className="w-10" src={logo} alt="" />
                        <h1 className="text-green-900 font-extrabold tracking-wider">
                            utri<span className="text-yellow-600">C</span>al
                        </h1>
                    </div>
                    <UilTimes
                        onClick={() => setNav(!nav)}
                        size={30}
                        className="  text-yellow-600 top-6 cursor-pointer"
                    />
                </div>


                <nav className="flex flex-col gap-4 px-9 pt-8">
                    <div className="collapse collapse-arrow bg-transparent rounded-md border border-green-800 py-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-sm text-green-800 font-semibold px-4">
                            Home
                        </div>

                    </div>
                    <div className="collapse collapse-arrow bg-transparent rounded-md border border-green-800 py-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm text-green-800 font-semibold px-4">
                            Nurition
                        </div>
                        <div className="collapse-content">
                            <ul className="pt-4 ">
                                <li className="border-t border-t-green-800 py-2 flex flex-col justify-center text-xs font-semibold">
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Menu Makan</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Menu Makan</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Menu Makan</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-transparent rounded-md border border-green-800 py-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm text-green-800 font-semibold px-4">
                            Check Up
                        </div>
                        <div className="collapse-content">
                            <ul className="pt-4 ">
                                <li className="border-t border-t-green-800 py-2 flex flex-col justify-center text-xs font-semibold">
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">IMT</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Kebutuhan Energi</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-transparent rounded-md border border-green-800 py-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm text-green-800 font-semibold px-4">
                            More
                        </div>
                        <div className="collapse-content">
                            <ul className="pt-4 ">
                                <li className="border-t border-t-green-800 py-2 flex flex-col justify-center text-xs font-semibold">
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Tentang Kami</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Kebijakan Cookie</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Dokumentasi</Link>
                                    <Link className="py-1 px-4 hover:bg-gray-200" to="*">Referensi Sumber</Link>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>




            <Outlet />
        </div>
    )
}

export default Navbar

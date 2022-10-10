import React from 'react';
import {Link} from 'react-router-dom';
import header from '../../image/header.png';
import {ArrowRightIcon} from '@heroicons/react/24/outline';


const Home = () => {
    return (
        <div>
            {/* Header section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='m-6 lg:ml-10 order-2 lg:order-1'>
                    <h2 className='text-3xl font-bold'>
                        <span className='text-pink-700'>Welcome To MCQ Exam</span>
                    </h2>
                    <p className='my-5'>
                        <span className='text-sky-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestias! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil temporibus voluptatem nam aspernatur nulla perferendis, veniam neque minima repellat eaque modi aliquam saepe inventore.</span>
                    </p>
                    <Link>
                        <button className='flex items-center gap-x-1 bg-pink-700 text-pink-50 px-4 py-1 rounded-md hover:bg-sky-700 focus:bg-sky-700'>
                            <span>Let's Start </span>
                            <ArrowRightIcon className='w-4'></ArrowRightIcon>
                        </button>
                    </Link>
                </div>
                <div className='order-1 lg:order-2'>
                    <img src={header} alt="header_image" className='w-full' />
                </div>
            </div>

            {/* Category section */}
            <div>

            </div>
        </div>
    );
};

export default Home;
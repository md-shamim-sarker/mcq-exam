import React from 'react';
import {} from '@heroicons/react/24/outline';
import Logo from '../../image/logo.png';

const Footer = () => {
    return (
        <div className='bg-pink-700 text-pink-50 text-center py-3 mb-14 lg:mb-0'>
            <div className='flex gap-x-2 items-center justify-center'>
                <img src={Logo} alt="logo_image" className='w-10 border border-pink-50 rounded-full' />
                <span className='text-2xl font-extrabold'>MCQ EXAM</span>
            </div>
            <hr className='w-1/2 lg:w-1/3 mx-auto my-2' />
            <p className='text-sm'>All Rights Reserved | Md. Shamim Sarker | 2022</p>
            <div className='flex justify-center gap-x-3 mt-3 text-xl'>
                <i className="fa-brands fa-square-facebook hover:text-sky-600"></i>
                <i className="fa-brands fa-square-twitter hover:text-sky-600"></i>
                <i className="fa-brands fa-linkedin hover:text-sky-600"></i>
                <i className="fa-brands fa-square-github hover:text-sky-600"></i>
            </div>
        </div>
    );
};

export default Footer;
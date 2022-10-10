import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../image/logo.png';
import {ChartPieIcon, HomeIcon, QuestionMarkCircleIcon, UserGroupIcon} from '@heroicons/react/24/outline';

const Navbar = () => {
    return (
        <div className='bg-pink-500 text-pink-50 py-2'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div className='text-2xl font-extrabold'>
                    <Link className='flex gap-x-2 items-center' to={"/"}>
                        <img src={Logo} alt="logo_image" className='w-10 border border-pink-50 rounded-full' />
                        <h2>MCQ EXAM</h2>
                    </Link>
                </div>
                <div className='flex gap-x-5'>
                    <Link className='flex gap-x-1 hover:underline underline-offset-8' to={"/"}>
                        <HomeIcon className='w-5'></HomeIcon>
                        <span>Home</span>
                    </Link>
                    <Link className='flex gap-x-1 hover:underline underline-offset-8' to={"/statistics"}>
                        <ChartPieIcon className='w-5'></ChartPieIcon>
                        <span>Statistics</span>
                    </Link>
                    <Link className='flex gap-x-1 hover:underline underline-offset-8' to={"/blog"}>
                        <QuestionMarkCircleIcon className='w-5'></QuestionMarkCircleIcon>
                        <span>Blog</span>
                    </Link>
                    <Link className='flex gap-x-1 hover:underline underline-offset-8' to={"/about"}>
                        <UserGroupIcon className='w-5'></UserGroupIcon>
                        <span>About</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
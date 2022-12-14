import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../image/logo.png';
import {ChartPieIcon, HomeIcon, QuestionMarkCircleIcon, UserGroupIcon} from '@heroicons/react/24/outline';

const Navbar = () => {
    const activeStyles = ({isActive}) => {
        return {
            color: isActive ? 'skyblue' : 'white'
        };
    };
    return (
        <div className='bg-pink-700 text-pink-50 py-2'>
            <div className='w-4/5 mx-auto flex justify-center lg:justify-between items-center'>

                {/* Site Logo for both desktop and mobile */}
                <div className='text-2xl font-extrabold'>
                    <NavLink className='flex gap-x-2 items-center' to={"/"}>
                        <img src={Logo} alt="logo_image" className='w-10 border border-pink-50 rounded-full' />
                        <h2>MCQ EXAM</h2>
                    </NavLink>
                </div>

                {/* For Desktop Device */}
                <div className='hidden lg:flex gap-x-5'>
                    <NavLink style={activeStyles} className='flex gap-x-1 hover:underline underline-offset-8' to={"/home"}>
                        <HomeIcon className='w-5'></HomeIcon>
                        <span>Home</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex gap-x-1 hover:underline underline-offset-8' to={"/statistics"}>
                        <ChartPieIcon className='w-5'></ChartPieIcon>
                        <span>Statistics</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex gap-x-1 hover:underline underline-offset-8' to={"/blog"}>
                        <QuestionMarkCircleIcon className='w-5'></QuestionMarkCircleIcon>
                        <span>Blog</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex gap-x-1 hover:underline underline-offset-8' to={"/about"}>
                        <UserGroupIcon className='w-5'></UserGroupIcon>
                        <span>About</span>
                    </NavLink>
                </div>

                {/* For Mobile Device */}
                <div className='w-screen flex justify-around lg:hidden fixed bottom-0 bg-pink-600 py-1'>
                    <NavLink style={activeStyles} className='flex flex-col justify-center items-center' to={"/home"}>
                        <HomeIcon className='w-7'></HomeIcon>
                        <span>Home</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex flex-col justify-center items-center' to={"/statistics"}>
                        <ChartPieIcon className='w-7'></ChartPieIcon>
                        <span>Statistics</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex flex-col justify-center items-center' to={"/blog"}>
                        <QuestionMarkCircleIcon className='w-7'></QuestionMarkCircleIcon>
                        <span>Blog</span>
                    </NavLink>
                    <NavLink style={activeStyles} className='flex flex-col justify-center items-center' to={"/about"}>
                        <UserGroupIcon className='w-7'></UserGroupIcon>
                        <span>About</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
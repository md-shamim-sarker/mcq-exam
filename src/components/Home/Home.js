import React from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import header from '../../image/header.png';
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Topic from '../Topic/Topic';

const Home = () => {
    const topics = useLoaderData().data;
    return (
        <div>
            {/* Header section */}
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div className='m-6 lg:ml-10 order-2 lg:order-1'>
                    <h2 className='text-3xl font-bold'>
                        <span className='text-pink-700'>Welcome To MCQ Exam</span>
                    </h2>
                    <p className='my-5'>
                        <span className='text-sky-800'>Research shows that testing ourself with MCQ Exam is more effective than rereading our notes. From math to medicine to modern languages, MCQ Exam App is used by students in over 100 different subjects.</span>
                    </p>
                    <Link to={'/home'}>
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

            {/* Topic section */}
            <div id='topic' className='grid grid-cols-1 lg:grid-cols-4 gap-y-5 lg:gap-x-5 m-5 mb-16'>
                {
                    topics.map(topic => <Topic
                        key={topic.id}
                        topic={topic}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;
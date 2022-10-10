import {ArrowRightIcon} from '@heroicons/react/24/outline';
import React from 'react';
import {Link} from 'react-router-dom';

const Topic = ({topic}) => {
    const {id, logo, name, total} = topic;
    return (
        <div className='bg-pink-300 p-5 leading-10 rounded-md'>
            <img src={logo} alt="topic_img" className='w-full bg-[#423901] rounded-md mb-2' />
            <h2 className='text-2xl font-bold'>Topic: {name}</h2>
            <p>Total Questions: {total}</p>
            <Link to={`/${id}`}>
                <button className='flex items-center gap-x-1 bg-pink-700 text-pink-50 px-4 py-1 rounded-md hover:bg-sky-700 leading-6'>
                    <span>Start Quizes</span>
                    <ArrowRightIcon className='w-4'></ArrowRightIcon>
                </button>
            </Link>
        </div>
    );
};

export default Topic;
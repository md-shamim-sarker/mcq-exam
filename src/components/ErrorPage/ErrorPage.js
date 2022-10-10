import React from 'react';
import crying from '../../image/error_emoji.gif';

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center bg-[#FAFAFA]'>
            <div className='flex flex-col items-center'>
                <img src={crying} alt="error_crying" className='w-36' />
                <h2 className='text-2xl text-pink-700 font-bold'>404 | Not Found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;
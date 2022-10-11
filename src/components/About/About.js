import React from 'react';
import photo from '../../image/shamim.jpg';

const About = () => {
    return (
        <div className='w-full h-[70vh] flex flex-col justify-center items-center my-10'>
            <img src={photo} alt="my_photo" className='w-52 rounded-full' />
            <h2 className='text-center mt-5 text-lg'>
                <span className='font-bold text-xl'>Name: Md. Shamim Sarker</span> <br />
                Address: Aditmari, Lalmonirhat <br />
                Email: shamimspro@gmail.com <br />
                Phone: +8801723795366
            </h2>

        </div>
    );
};

export default About;
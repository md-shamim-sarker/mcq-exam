import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizInfo = useLoaderData().data;
    const {logo, name, total} = quizInfo;
    const quizes = quizInfo.questions;
    return (
        <div className='my-7'>
            {/* Quiz Information */}
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={logo} alt="logo_image" className='w-40 bg-orange-700' />
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>The topic of quiz: {name}</h2>
                    <p className='font-semibold'>Total questions are: {total}</p>
                    <p>The weight of each question is equal.</p>
                </div>
            </div>
            <hr className='w-11/12 lg:w-3/5 mx-auto bg-pink-900 h-1 my-3' />

            {/* Quizes */}
            <div>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;
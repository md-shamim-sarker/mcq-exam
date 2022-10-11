import React from 'react';
import Option from '../Option/Option';
import {EyeIcon} from '@heroicons/react/24/solid';

const Quiz = ({quiz, correctAnswerHandler, userAnswerHandler, showCorrectAnswer, serial}) => {
    const {question, options} = quiz;
    return (
        <div className='w-11/12 lg:w-3/5 mx-auto my-3'>
            <div className='flex justify-between mb-4 mt-8'>
                <div>
                    <span className='font-bold'>Question No {serial + 1}:</span> {question}
                </div>
                <div onClick={() => showCorrectAnswer(quiz.correctAnswer)} title='Show Answer'>
                    <EyeIcon className='w-6 text-pink-700 hover:text-blue-600 cursor-pointer'></EyeIcon>
                </div>
            </div>
            <div onClick={() => correctAnswerHandler(quiz)} className='grid grid-cols-1 lg:grid-cols-2 gap-2 border bg-pink-200 p-3 rounded-3xl'>
                {
                    options.map(option => <Option
                        key={options.indexOf(option)}
                        option={option}
                        userAnswerHandler={userAnswerHandler}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;
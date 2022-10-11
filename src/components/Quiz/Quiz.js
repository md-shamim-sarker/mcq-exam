import React from 'react';
import Option from '../Option/Option';

const Quiz = ({quiz, correctAnswerHandler, userAnswerHandler}) => {
    const {question, options} = quiz;

    return (
        <div className='w-11/12 lg:w-3/5 mx-auto my-3'>
            <h2><span className='font-bold'>Question:</span> {question}</h2>
            <div onClick={() => correctAnswerHandler(quiz)} className='ml-5'>
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
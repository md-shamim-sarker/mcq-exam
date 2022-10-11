import React from 'react';

const Option = ({option, userAnswerHandler}) => {

    return (
        <div onClick={userAnswerHandler} className='bg-pink-50 mt-1 px-4 py-1 cursor-pointer hover:bg-pink-400 rounded-3xl'>
            {option}
        </div>
    );
};

export default Option;
import React from 'react';

const Option = ({option, optionHandler}) => {

    return (
        <div onClick={optionHandler} className='bg-pink-200 mt-1 px-2 py-1 cursor-pointer hover:bg-pink-400'>
            {option}
        </div>
    );
};

export default Option;
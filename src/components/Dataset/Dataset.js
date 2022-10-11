import React from 'react';

const Dataset = ({quiz}) => {
    const {id, name, total} = quiz;
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-x-5 lg:gap-x-36 border border-collapse px-2 border-gray-700 text-center'>
            <div className=''>{id}</div>
            <div className=''>{name}</div>
            <div className=''>{total}</div>
        </div>
    );
};

export default Dataset;
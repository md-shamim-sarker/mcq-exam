import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import Dataset from '../Dataset/Dataset';

const Statistics = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    return (
        <div className='w-full flex justify-center flex-col items-center mt-5'>
            <div className='text-center my-3'>
                <h2 className='text-3xl font-bold'>Statistics</h2>
                <h3 className='text-xl font-bold'>Line Chart</h3>
            </div>

            <div className='w-full lg:w-4/5 h-96 '>
                <ResponsiveContainer width="90%" height="100%">
                    <LineChart data={quizes}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='my-10'>
                <h2 className='text-center text-2xl font-bold my-5'>Data Set</h2>
                <div className='w-full'>
                    <div className='w-11/12 mx-auto grid grid-cols-3 gap-x-5 lg:gap-x-36 border border-collapse px-10 border-gray-700 font-bold'>
                        <div>Serial</div>
                        <div>Topic</div>
                        <div>Questions</div>
                    </div>

                    {
                        quizes.map(quiz => <Dataset
                            key={quiz.id}
                            quiz={quiz}
                        ></Dataset>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Statistics;
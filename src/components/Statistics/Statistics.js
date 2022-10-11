import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

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
                    {
                        quizes.map(quiz => <ul>
                            <li className='flex justify-between gap-x-24 px-7 border border-slate-700'>
                                <div>{quiz.name}</div>
                                <div>{quiz.total}</div>
                            </li>
                        </ul>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Statistics;
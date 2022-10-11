import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Statistics = () => {
    const quizes = useLoaderData().data;
    return (
        <div className='w-auto flex justify-center flex-col items-center mt-5'>
            <div className='text-center my-3'>
                <h2 className='text-3xl font-bold'>Statistics</h2>
                <h3 className='text-xl font-bold'>Line Chart</h3>
            </div>
            <div className='my-5'>
                <LineChart width={600} height={300} data={quizes}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Statistics from '../components/Statistics/Statistics';
import Main from '../layout/Main';

const Routers = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/statistics",
                    element: <Statistics></Statistics>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                },
                {
                    path: "/about",
                    element: <About></About>
                }
            ]
        },
        {
            path: "/*",
            element: <ErrorPage></ErrorPage>
        }
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routers;
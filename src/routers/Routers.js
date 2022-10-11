import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from '../components/About/About';
import Blog from '../components/Blog/Blog';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Quizes from '../components/Quizes/Quizes';
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
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>
                },
                {
                    path: "/home",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>
                },
                {
                    path: "/:id",
                    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                    element: <Quizes></Quizes>
                },
                {
                    path: "/statistics",
                    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
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
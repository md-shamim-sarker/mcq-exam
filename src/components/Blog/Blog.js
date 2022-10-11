import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 lg:w-4/5 mx-auto text-slate-700 my-8'>
            <h1 className='text-3xl font-bold text-center mb-5'>Question & Answer</h1>
            <hr className='h-1 bg-pink-700 mb-3' />
            <h2 className='text-2xl font-bold'>Question 1: What is the purpose of react router?</h2>
            <p className='mb-5'><strong>Answer: </strong>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>

            <h2 className='text-2xl font-bold'>Question 2: How does context api works?</h2>
            <p className='mb-5'><strong>Answer: </strong>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. React.createContext() is all we need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>

            <h2 className='text-2xl font-bold'>Question 3: What is useRef() hook in react?</h2>
            <p><strong>Answer: </strong>The useRef Hook allows us to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. Use useRef if we need to manage focus, text selection, trigger imperative animations or integrating third-party libraries. useRef returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its current property.</p>

        </div>
    );
};

export default Blog;
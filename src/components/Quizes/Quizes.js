import React, {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizes = () => {
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [userAnswer, setUserAnswer] = useState("");
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const quizes = useLoaderData().data.questions;
    const quizInfo = useLoaderData().data;
    const {logo, name, total} = quizInfo;

    const correct = () => toast("Correct Answer!");
    const wrong = () => toast("Wrong Answer!");
    const correctAns = (correctAns) => toast("Correct answer is: " + correctAns);

    const correctAnswerHandler = (quizes) => {
        const correctAns = quizes.correctAnswer;
        const newCorrectAns = correctAns.replace(/\s+/g, ' ').trim();
        setCorrectAnswer(newCorrectAns);
    };

    const userAnswerHandler = (event) => {
        const userAns = event.target.innerText;
        const newUserAns = userAns.replace(/\s+/g, ' ').trim();
        setUserAnswer(newUserAns);
    };

    const showCorrectAnswer = (ca) => {
        correctAns(ca);
    };

    useEffect(() => {
        if(correctAnswer !== "" && userAnswer !== "") {
            if(correctAnswer === userAnswer) {
                correct();
                setCorrectCount(correctCount + 1);
            } else {
                wrong();
                setWrongCount(wrongCount + 1);
            }
        }
    }, [correctAnswer, userAnswer]);

    return (
        <div className='my-7'>
            {/* Quiz Information */}
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={logo} alt="logo_image" className='w-40 bg-orange-700' />
                </div>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>The topic of quiz: {name}</h2>
                    <p className='font-semibold'>Total questions are: {total}</p>
                    <p>The weight of each question is equal.</p>
                </div>
            </div>
            <hr className='w-11/12 lg:w-3/5 mx-auto bg-pink-700 h-1 my-3' />

            {/* Result Card */}
            <div className='fixed right-0 top-1/3 bg-pink-700 text-pink-50 p-5 mr-3 rounded-md'>
                <h2 className='text-2xl font-bold'>Total Result</h2>
                <hr />
                <h2>Correct Answer: {correctCount}</h2>
                <h2>Wrong Answer: {wrongCount}</h2>
            </div>

            {/* Quizes */}
            <div>
                {
                    quizes.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                        correctAnswerHandler={correctAnswerHandler}
                        userAnswerHandler={userAnswerHandler}
                        showCorrectAnswer={showCorrectAnswer}
                    ></Quiz>)
                }
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Quizes;
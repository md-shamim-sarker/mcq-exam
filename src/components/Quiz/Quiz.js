import React, {useState} from 'react';
import Option from '../Option/Option';

const Quiz = ({quiz}) => {
    const {question, options} = quiz;
    const [correct, setCorrect] = useState("");

    const answerHandler = (quiz) => {
        setCorrect(quiz.correctAnswer);
    };

    const optionHandler = (event) => {
        if(event.target.innerText === correct) {
            alert('Correct');
        } else {
            alert("wrong");
        }
    };

    return (
        <div className='w-11/12 lg:w-3/5 mx-auto my-3'>
            <h2><span className='font-bold'>Question:</span> {question}</h2>
            <div onClick={() => answerHandler(quiz)} className='ml-5'>
                {
                    options.map(option => <Option
                        key={options.indexOf(option)}
                        option={option}
                        optionHandler={optionHandler}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Quiz = () => {
//     const [questions, setQuestions] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [answers, setAnswers] = useState([]);
//     const [score, setScore] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/quiz")
//             .then(res => setQuestions(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleAnswer = (option) => {
//         setAnswers([...answers, option]);
//         if (currentIndex + 1 < questions.length) {
//             setCurrentIndex(currentIndex + 1);
//         } else {
//             submitAnswers();
//         }
//     };

//     const submitAnswers = () => {
//         axios.post("http://localhost:5000/api/quiz/submit", { answers })
//             .then(res => setScore(res.data.score))
//             .catch(err => console.log(err));
//     };

//     return (
//         <div>
//             {score !== null ? (
//                 <h2>Your Score: {score} / {questions.length}</h2>
//             ) : (
//                 questions.length > 0 && (
//                     <div>
//                         <h2>{questions[currentIndex].question}</h2>
//                         {questions[currentIndex].options.map((option, i) => (
//                             <button key={i} onClick={() => handleAnswer(option)}>
//                                 {option}
//                             </button>
//                         ))}
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };

// export default Quiz;


import { useEffect, useState } from "react";
import axios from "axios";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(null);

    useEffect(() => {
        axios.get("hhttps://quiz-react-app-bk5.vercel.app/quiz")
            .then(res => setQuestions(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleAnswer = (option) => {
        setAnswers([...answers, option]);
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            submitAnswers();
        }
    };

    const submitAnswers = () => {
        axios.post("https://quiz-react-app-bk5.vercel.app/quiz/submit", { answers })
            .then(res => setScore(res.data.score))
            .catch(err => console.log(err));
    };

    return (
        <div className="quiz-container">
            {score !== null ? (
                <div className="score-container">
                    <h2>Your Score: {score} / {questions.length}</h2>
                </div>
            ) : (
                questions.length > 0 && (
                    <div className="question-container">
                        <h2>{questions[currentIndex].question}</h2>
                        <div className="options-container">
                            {questions[currentIndex].options.map((option, i) => (
                                <button key={i} onClick={() => handleAnswer(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Quiz;

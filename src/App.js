import React, { useState } from 'react';
import {classData, studentData, currentUser} from './data.js'; // import hardcoded data

export default function App() {
	/* const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	]; */

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [img, setImg] = useState(studentData[0].img.default);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < studentData.length) {
			setCurrentQuestion(nextQuestion);
			setImg(studentData[nextQuestion].img.default);
		} else {
			setShowScore(true);
		}
	};
	let random = currentQuestion;
	if(studentData.length - currentQuestion < 4 ){
		random = studentData.length - currentQuestion;
	}

	const questions = [{
		answerOptions: [
			{ answerText: studentData[currentQuestion].name, isCorrect: true },
			{ answerText: studentData[random + 1].name, isCorrect: false },
			{ answerText: studentData[random + 2].name, isCorrect: false },
			{ answerText: studentData[random + 3].name, isCorrect: false },
		],
	}]

	questions[0].answerOptions.sort((a, b) => (a.answerText > b.answerText) ? 1 : -1);
	return (

		


		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {studentData.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{studentData.length}
						</div>
						<div >
						<img src={img}  />
						</div>
					</div>
					<div className='answer-section'>
						{questions[0].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

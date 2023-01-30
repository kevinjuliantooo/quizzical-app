import React from "react";
import { useEffect } from "react";
import Quiz from "./Quiz";

export default function Quizzes() {

    const [quizzesData, setQuizzesData] = React.useState([])
    const [isAnswerChecked, setAnswerChecked] = React.useState(false)
    const [correctAnswer, setCorrectAnswer] = React.useState(0)

    React.useEffect(function() {
        if(isAnswerChecked == false){
            fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => modifiedQuizzesData(data.results)) 
        }
    }, [isAnswerChecked])

    // React,useEffect(function() {
    //     setAnswerChecked(prev => !prev)
    // }, [])

    function modifiedQuizzesData(data){

        data.map(quiz => {
            quiz.choices = shuffleChoice([quiz.correct_answer, ...quiz.incorrect_answers])
        })

        setQuizzesData(data)
    }

    function shuffleChoice(choices){
        
        choices.forEach((item, index) => {
            const randomIndex = Math.floor(Math.random() * (index+1))
            return [choices[index], choices[randomIndex]] = [choices[randomIndex], item]
        })

        return choices

    }

    const quizzes = quizzesData.map((quiz, index) => {
        
        return (<Quiz
            key={index}
            question={quiz.question}
            correctAnswer={quiz.correct_answer}
            choicesAnswer={quiz.choices}
            isAnswerChecked = {isAnswerChecked}
            onChosen={() => handleChosenAnswer}
        />)}
    )

    function handleChosenAnswer(event){
        
        const [question, chosenAnswer] = [event.target.name, event.target.value]
        quizzesData.map(item => {if (item.question == question) return item.chosenAnswer = chosenAnswer })
        
    }


    function handlerAnswerChecked(){
        setAnswerChecked(prev => !prev)
        getCorrectAnswer()
    }

    function getCorrectAnswer(){
        let correct = 0

        quizzesData.forEach(quiz => {
            if (quiz.chosenAnswer == quiz.correct_answer) {
                ++correct
            }
        })

        setCorrectAnswer(correct)

    }


    return(
        <div className="quizzes">
            {quizzes}
            <div className="container-action">
                {isAnswerChecked ? 
                    <div className="container-action"> 
                        <p>You scored {correctAnswer}/5 correct answers</p> 
                        <button className="button-play-again" onClick={handlerAnswerChecked}>Play again</button> 
                    </div>
                    : <button className="button-check-answer" onClick={handlerAnswerChecked}>Check Answer</button>}
                 
            
            </div>
            
        </div>
    )
}
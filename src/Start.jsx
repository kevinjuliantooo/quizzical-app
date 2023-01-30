import React from "react";

export default function Start(props){
    return(
        <div className="start">
            <h1>Quizzical</h1>
            <p>Some description if need</p>
            <button className='btn-start' onClick={props.isStarted}>Start Quiz</button>
        </div>
    )
}
import React from "react";
import MultipleAnswer from "./MultipleAnswer";

export default function Quiz(props){

    const isAnswerChecked = props.isAnswerChecked
    const [chosenChoice, setChosenChoice] = React.useState("")

    const answers = props.choicesAnswer.map((item, index) => {
        let labelClass = ""
        // let isChecked = undefined
        const [isChecked, setIsChecked] = React.useState(false)
        let isDisabled = null

        if (item == chosenChoice) {
            labelClass = "chosen-answer"
        }

        if(isAnswerChecked){
            
            if (item === props.correctAnswer){
                labelClass = "correct-answer"
            }

            if (chosenChoice === item && item !== props.correctAnswer){
                labelClass = "incorrect-answer"
            }
            isDisabled = true
        }
        
        return(
            <MultipleAnswer 
                key={index}
                type="radio" 
                id={item}
                name={props.question}
                value={item}
                onChange={() => {setChosenChoice(item)}}
                onClick={props.onChosen(item)}
                checked={isChecked}
                disabled={isDisabled}
                labelClass={labelClass}
            />
        )

        })


    return(
        <div className="quiz" >
            <p className="question">{props.question}</p>
                <div className="answers-row">
                    {answers}
                </div>
                <hr />
                
        </div>
        
    )
}
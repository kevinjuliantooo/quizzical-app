import React from "react";

export default function MultipleAnswer(props){

    return(
        <div className="answer">
            <input
                type="radio" 
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onClick={props.onClick}
                checked={props.checked}
                disabled={props.disabled}
            />
            <label className={props.labelClass} htmlFor={props.value}>{props.value}</label>
        </div>
    )
}
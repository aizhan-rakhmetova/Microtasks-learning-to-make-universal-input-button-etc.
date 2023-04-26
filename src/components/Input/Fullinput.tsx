import React, {ChangeEvent, useState} from 'react';
import {Input} from "./Input";

type FullInputType = {
    addMessage: (message: string)=>void
}
export function Fullinput (props: FullInputType) {
    let[message, setMessage] = useState('');
    console.log(message);
    console.log(message);

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.currentTarget.value);
    }

    const onClickButtonHandler = () =>{
        props.addMessage(message);
        setMessage(""); //обнулять поисковый запрос , and this should be used: value={message}
    }


    return (
        <div>
            <input value={message} onChange = {onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
};


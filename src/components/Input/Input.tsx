import React, {ChangeEvent} from 'react';

type InputType = {
    message: string
    setMessage: ( message: string)=>void
}

export function Input (props: InputType) {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMessage(event.currentTarget.value);

    }
    return (
        <input value={props.message} onChange = {onChangeInputHandler}/> //to обнулять поисковый запрос wee have value
    );
};

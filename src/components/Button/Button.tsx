import React from 'react';

type ButtonPropsType = {
    title: string
    callBack: ()=>void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () =>{
        props.callBack();
    }

    return (
        <span>
            <button onClick={ onClickHandler}>Channel {props.title}</button>
        </span>
    );
};


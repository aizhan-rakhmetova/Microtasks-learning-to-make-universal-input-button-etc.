import React from 'react';

type Button2Type = {
    name: string
    callBack: ()=>void
}
export function Button2(props: Button2Type) {
    const onClickButtonHandler = () =>{
        props.callBack();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};


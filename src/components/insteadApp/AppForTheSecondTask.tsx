import React, {useState} from 'react';
import {Fullinput} from "../Input/Fullinput";
import {Input} from "../Input/Input";
import {Button2} from "../Button/Button2";

export function AppForTheSecondTask () {
    let [server, setServer] = useState( [
        {server: 'message1'},
        {server: 'message2'},
        {server: 'message3'},
    ])
    let[message, setMessage] = useState('');

    const addMessage = (message: string) => {
        let newMessage = {server: message}
        setServer([newMessage, ...server ]);

    }

    const onClickButtonHandler = () => {
        addMessage(message);
        setMessage(""); //обнулять поисковый запрос , and this should be used: value={message}

    }

    return (
        <div>
            <div>
                {/*<Fullinput addMessage={addMessage}/>*/}
                <Input message={message} setMessage={setMessage}/>
                <Button2 name = "+" callBack={onClickButtonHandler} />
            </div>
            {server.map( (el, index)=>{
                return(
                    <div key = {index}>{el.server}</div>
                )
            })}
        </div>
    )
}


import React from 'react';
import {Button} from "../Button/Button";

export function InsteadApp() {
    const Function1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Function2 = (subscriber: string) => {
        console.log(subscriber)
    }

    const Function3 = () => {
        console.log("I am a stupid button")
    }

    return (
        <div>
            <Button title = {"1"} callBack={() =>Function1("Aizhan", 24)}/>
            <Button title = {"2"} callBack={()=>Function2("Aisara")}/>
            <Button title = {"3"} callBack={Function3}/>
        </div>
    );
}

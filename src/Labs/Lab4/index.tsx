import React from 'react';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from "./PassingFunctions";
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';

export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Lab 4</h1>
            <p>Assignment 4</p>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject/>
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
        </div>
    );
}

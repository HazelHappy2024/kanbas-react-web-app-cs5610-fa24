import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CounterRedux from "./CounterRedux";
import AddRedux from "./AddRedux";

export default function ReduxExamples() {
    const { message } = useSelector((state: any) => state.helloReducer);
    return (
        <div id="wd-hello-redux">
            <h2>Redux Examples</h2>
            <h3>Hello Redux</h3>
            <h4>{message}</h4> <hr />
            <CounterRedux /> <hr />
            <AddRedux /> <hr />
        </div>
        
    );
};

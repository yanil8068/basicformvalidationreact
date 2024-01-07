import React,{ useContext } from "react";
import { ConterContext } from "../context/Counter";
const Counter = ()=>{
    const counterContext = useContext(ConterContext);
    console.log(counterContext);
    return (
        <div>
            <button onClick={()=>
                counterContext.setCount(counterContext.count + 1)
            }>
                increment
            </button>
            <button onClick={()=>counterContext.setCount(counterContext.count - 1)}>
                decrement
            </button>
        </div>
    );
};
export default Counter;
import { useState } from "react";

export default function First() {
    return (
        <>
            <h1>My First Component</h1>
        </>
    );
}

export function First1() {
    return (
        <>
            <h1>My second component</h1>
        </>
    );
}

export function StateComponent() {
    let [count, setCount] = useState(0);
    console.log(count);
    //console.log(setCount);

    function increase(){
        setCount(count+1)
    }

    function decrease(){
        setCount(count-1)
    }

    function reset(){
        setCount(0);
    }

    return (
        <>
            <h1>State Component</h1>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    );
}


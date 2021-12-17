import React, {useState} from "react";

const Counter = () => {

    function calc() {
        const res = Math.trunc(Math.random() * 20);
        return res;
    }
    const [counter, setCounter] = useState(() => calc());

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>{counter}</h1>

            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>



    )
}

export default Counter;
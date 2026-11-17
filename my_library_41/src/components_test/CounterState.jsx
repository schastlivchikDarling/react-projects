import {useState} from 'react';

function CounterState() {
    const initValue = 0;
    const [count, setCount] = useState(initValue);
// значение состояния и сеттер на его изменение   начальное значение

    function increment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count<= 0 ? 0 : count - 1);
    }
    function reset(){
        setCount(0);
    }

    function set100(){
        setCount(100);
    }

    function increment3Times(){
        // setCount(count+1);
        // setCount(count+1);  //  error
        // setCount(count+1);

        setCount((prevState) => prevState + 1);
        setCount((x) => x + 1);
        setCount((prevState) => prevState + 1);
    }

    return (
        <div>
        <h2>
            Счетчик : {count}
        </h2>

        <button onClick={decrement}>-</button>

        <button onClick={increment}>+</button>

        <button onClick={reset}>Reset</button>

        <button onClick={set100}>100</button>

        <button onClick={increment3Times}>Increment 3 Times</button>


    </div>
    );
}

export default CounterState;
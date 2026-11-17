import App1 from "../App1.jsx";

function HelloButton() {

    // function sayHello() {
    //     console.log('Hello, REACT');
    // }
    //
    // return <button onClick={sayHello()}>Нажми меня</button>;

    return (
        <button onClick={() =>{
            console.log('Hello');
        }}>Нажми меня</button>
    )

}

export default HelloButton;
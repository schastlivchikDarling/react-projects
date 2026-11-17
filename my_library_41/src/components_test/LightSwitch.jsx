import {useState} from 'react';

function LightSwitch(){
    const [isOn,setIsOn] = useState(false);

    function toggleLight(){
        setIsOn(prevState => !prevState);
    }

    return (
        <div>
            <h2>    Свет: {isOn? "ON" : "OFF"}</h2>
            <button onClick={toggleLight}>Switch</button>
        </div>
    )
}
export default LightSwitch;
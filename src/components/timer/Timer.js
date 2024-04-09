import {useEffect, useState} from "react";

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const timeChange = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }
    useEffect(() => {
        setInterval(timeChange, 1000);
    });
    return (
        <>
            <div>
                <h3>{currentTime}</h3>
            </div>
        </>
    );
}
export default Timer;
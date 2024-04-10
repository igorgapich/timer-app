import {useEffect, useState} from "react";
import styled from 'styled-components';

const randomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);
const TimerDiv = styled.div`
    background-color: ${randomColor()};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`;
const TimerH = styled.h1`
  color: ${randomColor()};
`;
const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [bgColor, setBgColor] = useState(randomColor());
    const [textColor, setTextColor] = useState(randomColor());
    const timeChange = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }
    useEffect(() => {
        setInterval(timeChange, 1000);
        setInterval()

    });
    return (
        <>
            <TimerDiv bgColor={bgColor}>
                <TimerH textColor={textColor}>{currentTime}</TimerH>
            </TimerDiv>
        </>
    );
}
export default Timer;
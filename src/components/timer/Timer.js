import {useEffect, useState} from "react";
import styled from 'styled-components';

const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

const TimerDiv = styled.div`
    background-color: ${props => props.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
const TimerH = styled.h1`
    color: ${props => props.textColor};
`;
const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [bgColor, setBgColor] = useState(randomColor());
    const [textColor, setTextColor] = useState(randomColor());
    const timeChange = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            timeChange();
            setBgColor(randomColor());
            setTextColor(randomColor());
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="container-time">
                <TimerDiv bgColor={bgColor}>
                    <TimerH textColor={textColor}>{currentTime}</TimerH>
                </TimerDiv>
            </div>
        </>
    );
}
export default Timer;
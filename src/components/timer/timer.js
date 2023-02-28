import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const TimerWrapper = styled.div`
font-weight: 500;
font-size: 1.5em;
padding-left: 10px;
text-align: start;
`

export default function Timer(props) {
    const [seconds, setSeconds] = useState(props.seconds)
    const [deadline, setDeadline] = useState(new Date(new Date().getTime() + seconds * 1000))

    const getTimeLeft = () => {
        const difference = deadline - new Date().getTime();
        console.log(difference);
        setSeconds(Math.ceil((difference / 1000) % 60));
        return difference;
    }

    const handleClick = () => {
        setSeconds(props.seconds)
        setDeadline(new Date(new Date().getTime() + props.seconds * 1000));
    }

    const isInitialMount1 = useRef(true);
    const isInitialMount2 = useRef(true);

    useEffect(() => {
      if (isInitialMount1.current) {
         isInitialMount1.current = false;
      } else {
        const timerId = setInterval(() => {
            const left = getTimeLeft();
            if (left <= 0) {
                clearInterval(timerId);
                props.setTestingState(false);
            }
        }, 1000)

        return () => {
            clearInterval(timerId);
        } 
      }
    }, [deadline]);

    useEffect(() => {
        if (isInitialMount2.current) {
            isInitialMount2.current = false;
        } else {
            if (props.testingState) {
                handleClick();
            }
        }
    }, [props.testingState])

    return (
        <TimerWrapper>
            {seconds}
            {/* <button onClick={handleClick}>Start timer!</button> */}
        </TimerWrapper>
    )
}
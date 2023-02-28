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

    const isInitialMount = useRef(true);

    useEffect(() => {
      if (isInitialMount.current) {
         isInitialMount.current = false;
      } else {
        const timerId = setInterval(() => {
            const left = getTimeLeft();
            if (left <= 0) {
                clearInterval(timerId);
            }
        }, 1000)

        return () => {
            clearInterval(timerId);
        } 
      }
    }, [deadline]);

    return (
        <TimerWrapper>
            {seconds}
            {/* <button onClick={handleClick}>Start timer!</button> */}
        </TimerWrapper>
    )
}
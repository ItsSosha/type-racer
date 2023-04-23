import styled from "styled-components";
import Timer from "../timer/timer";
import TypingTest from "../typingTest/typingTest";
import { faker } from "@faker-js/faker"
import { useState } from "react";
import Results from "../results/results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

const MainWrapper = styled.main`
align-self: center;
width: 100%;
margin: 45px 0 45px;
flex-grow: 1;
display: flex;
flex-direction: column;

@media (max-width: 480px) {
    font-size: 0.8em;
}
`

const words = faker.random.words(100);

const RestartButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 25px auto;
min-width: 120px;
width: 10%;
border-radius: 10px;
height: 2rem;
border: 3px solid ${props => props.theme.text};
color: ${props => props.theme.text};
cursor: pointer;

&:hover {
    border: 3px solid ${props => props.theme.main};
    color: ${props => props.theme.main};
}

`

export default function Main() {
    const [isTesting, setIsTesting] = useState(false);
    const [isShowingResults, setIsShowingResults] = useState(false)
    const [testStatistics, setTestStatistics] = useState({
        rightTypings: 0,
        errorTypings: 0,
        totalErrors: 0,
        lettersWritten: 0,
        totalTypings: 0
    });

    const content = isShowingResults 
        ? <>
            <Results testStatistics={testStatistics}/>
            <RestartButton onClick={() => {
                setIsShowingResults(prevResultState => !prevResultState) 
                setTestStatistics({
                    rightTypings: 0,
                    errorTypings: 0,
                    totalErrors: 0,
                    lettersWritten: 0,
                    totalTypings: 0
                })
                }}>
                <FontAwesomeIcon icon={faArrowRotateRight}/>
            </RestartButton>
        </>
        : <TypingTest words={words} 
            testingState={isTesting} 
            setTestingState={setIsTesting} 
            testStatistics={testStatistics}
            setTestStatistics={setTestStatistics}
            isShowingResults={isShowingResults}
            setIsShowingResults={setIsShowingResults}/> 

    return (
        <MainWrapper>
            {content}
        </MainWrapper>
    )
}
import styled, { keyframes } from "styled-components";
import { useState, useRef, useEffect, useMemo } from "react";
import Timer from "../timer/timer";

const caretAnimation = keyframes`
0% {
opacity: 1;
}
50% {
opacity: 0;
}
100% {
opacity: 1;
}
`

const TestWrapper = styled.div`
width: 100%;
font-size: 2.5em;
height: 2em;
display: flex;
position: relative;
align-items: center;
overflow: hidden;
outline: none;
padding: 80px 0;
`

const WordsContainer = styled.div`
min-width: 100%;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-${props => props.left}ch, -50%);
user-select: none;
transition: .125s linear;
white-space: nowrap;
`

const Caret = styled.div`
position: absolute;
height: 1.2em;
width: 3px;
border-radius: 3px;
background-color: black;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
animation: ${caretAnimation} 1.5s ease-in-out infinite;
`

const StyledUserInput = styled.div`
position: absolute;
color: ${props => props.font};
top: 50%;
left: 50%;
transform: translate(-${props => props.right}ch, -50%);
user-select: none;
transition: .125s linear;
white-space: nowrap;
z-index: 2;
`

const LetterError = styled.span`
padding: 0;
color: ${props => props.theme.error};
`

const LetterRight = styled.span`
padding: 0;
color: ${props => props.theme.text};
`

export default function TypingTest({words, testingState, setTestingState, testStatistics, setTestStatistics, isShowingResults, setIsShowingResults}) {
    const [userInput, setUserInput] = useState('');
    const [caps, setCaps] = useState('');
    const testRef = useRef(null);

    const lettersArr = words.split('');

    const createLetterSpans = arr => {
        return arr.map(letter => {
            return (
                <span>{letter}</span>
            )
        })
    }

    const memoizedElements = useMemo(() => {
        return createLetterSpans(lettersArr)
    }, [words]);

    const handleKeyDown = e => {
        if (!testingState && e.key.length !== 1 && e.key !== " ") {
            return;
        } else if (!testingState) {
            setTestingState(true);
        } 

        if (e.key == "CapsLock") {
            setCaps(e.getModifierState('CapsLock') ? true : false);
        } else if (e.key == "Backspace" && testStatistics.lettersWritten > 0) {
            setUserInput(prevUserInput => {
                setTestStatistics(prevTestStatistics => {
                    if (prevUserInput[prevUserInput.length - 1] === lettersArr[prevTestStatistics.lettersWritten - 1]) {
                        return {
                            ...prevTestStatistics,
                            rightTypings: prevTestStatistics.rightTypings - 1,
                            lettersWritten: prevTestStatistics.lettersWritten - 1
                        }
                    } else {
                        return {
                            ...prevTestStatistics,
                            errorTypings: prevTestStatistics.errorTypings - 1,
                            lettersWritten: prevTestStatistics.lettersWritten - 1
                        }
                    }
                })
                return prevUserInput.slice(0, prevUserInput.length - 1)
            });

        } else if (e.key.length == 1) {

            if (lettersArr[testStatistics.lettersWritten] === " " && e.key !== lettersArr[testStatistics.lettersWritten]) {
                setTestStatistics(prevTestStatistics => ({
                    ...prevTestStatistics,
                    totalErrors : prevTestStatistics.totalErrors + 1,
                    totalTypings: prevTestStatistics.totalTypings + 1
                }));
                return;
            }

            setUserInput(prevUserInput => prevUserInput + e.key);

            if (e.key !== lettersArr[testStatistics.lettersWritten]) {
                setTestStatistics(prevTestStatistics => ({
                    ...prevTestStatistics,
                    errorTypings: prevTestStatistics.errorTypings + 1,
                    totalErrors : prevTestStatistics.totalErrors + 1,
                    lettersWritten: prevTestStatistics.lettersWritten + 1,
                    totalTypings: prevTestStatistics.totalTypings + 1
                }))
            } else {
                setTestStatistics(prevTestStatistics => ({
                    ...prevTestStatistics,
                    rightTypings: prevTestStatistics.rightTypings + 1,
                    lettersWritten: prevTestStatistics.lettersWritten + 1,
                    totalTypings: prevTestStatistics.totalTypings + 1
                }))
            }
        }
    }

    useEffect(() => {
        testRef.current.focus();
    }, [])

    const letters = lettersArr.map((letter, index) => {
        if (index < testStatistics.lettersWritten) {
            if (userInput[index] == letter) {
                if (letter == " ") {
                    return (
                        <span>&nbsp;</span>
                    ) 
                } else {
                    return (
                        <LetterRight>{userInput[index]}</LetterRight>
                    )
                }
            } else {
                return (
                    <LetterError>{letter}</LetterError>
                )
            }
        }
    })

    return (
        <>
            <Timer seconds={30} testingState={testingState} setTestingState={setTestingState} isShowingResults={isShowingResults} setIsShowingResults={setIsShowingResults}/>
            <TestWrapper ref={testRef} tabIndex={0} onKeyDown={handleKeyDown}>
                <CapsWarning isCapsPressed={caps}/>
                <Caret />
                <StyledUserInput right={testStatistics.lettersWritten}>
                    {letters}
                </StyledUserInput>
                <WordsContainer left={testStatistics.lettersWritten}>
                    {memoizedElements}
                </WordsContainer>
            </TestWrapper>
        </>
    )
}


const CapsWarningWrapper = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-weight: 300;
    font-size: 14px;
    color: ${props => props.theme.text}
`

function CapsWarning({isCapsPressed}) {
    return (
        <CapsWarningWrapper>
            {isCapsPressed ? <span>Caps Lock!</span> : null}
        </CapsWarningWrapper>
    )
}
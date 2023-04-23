import styled, { keyframes } from "styled-components"

const resultsShow = keyframes`
0% {
    opacity: 0;
    transform: scale(0.25);
}
100% {
    opacity: 1;
    transform: scale(1);
}
`

const ResultsWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 2.5rem;
height: 50%;
opacity: 0;
animation: .5s linear ${resultsShow} forwards;
text-align: center;

& > div {
    width: max-content;
    min-width: 20%;
}

@media (max-width: 768px) {
    flex-direction: column;
}
`

const Text = styled.div`
font-size: 1.5rem;
color: ${props => props.theme.text};
`

export default function Results({testStatistics}) {

    const {totalTypings, rightTypings, errorTypings, totalErrors} = testStatistics;

    const wpm = Math.trunc(rightTypings * (60 / 30) / 5);
    // const accuracy = Math.trunc(rightTypings / totalTypings * 100);
    const accuracy = 100 - Math.trunc(totalErrors / totalTypings * 100);

    return(
        <ResultsWrapper>
            <div id="wpm"><div>{wpm}</div><Text>WPM</Text></div>
            <div id="count"><div>{rightTypings}/{errorTypings}</div><Text>Accurate/Inaccurate</Text></div>
            <div id="accuracy"><div>{accuracy}%</div><Text>Accuracy</Text></div>
        </ResultsWrapper>
    )
}
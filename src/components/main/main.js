import styled from "styled-components";
import Timer from "../timer/timer";
import TypingTest from "../typingTest/typingTest";
import { faker } from "@faker-js/faker"

const MainWrapper = styled.main`
align-self: center;
width: 100%;
margin: 45px 0 auto;
`

const words = faker.random.words(100);

export default function Main() {
    return (
        <MainWrapper>
            <Timer seconds={30}/>
            <TypingTest words={words}/>       
        </MainWrapper>
    )
}
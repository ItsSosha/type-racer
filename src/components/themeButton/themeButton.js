import styled from "styled-components";
import { lighten } from "polished";

const ButtonWrapper = styled.div`
display: flex;
justify-content: start;
align-items: center;
padding: 5px 15px;
font-size: 14px;
width: 100%;
height: 2em;
user-select: none;
cursor: pointer;

&:hover {
    background-color: ${lighten(0.08, "#F5DEB3")};
}
`

const ThemePreview = styled.div`
background-color: ${props => props.theme.background};
display: flex;
justify-content: space-evenly;
align-items: center;
border-radius: 1em;
margin-left: auto;
width: 23%;
max-width: 4.5em;
height: 100%;

& > div {
    height: 0.8em;
    width: 0.8em;
    border-radius: 50%;
}

& > div:nth-child(1) {
    background-color: ${props => props.theme.main};
}

& > div:nth-child(2) {
    background-color: ${props => props.theme.secondary};
}

& > div:nth-child(3) {
    background-color: ${props => props.theme.text};
}
`



export default function ThemeButton({theme}) {
    return (
        <ButtonWrapper>
            <span>{theme.name}</span>
            <ThemePreview theme={theme} >
                <div></div>
                <div></div>
                <div></div>
            </ThemePreview>
        </ButtonWrapper>
    )
}
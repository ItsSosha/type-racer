import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFill, faLanguage } from "@fortawesome/free-solid-svg-icons"
import HeaderButton from "./headerButton";

const HeaderWrapper = styled.header`
display: flex;
flex-direction: row;
align-items: stretch;
margin-top: 25px;
margin: 25px 0 45px;
height: 3em;

h1 {
    margin: 0 45px 0 10px;
    cursor: pointer;
}
`

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Type Racer</h1>
            <HeaderButton icon={faFill} text={"theme"} />
            <HeaderButton icon={faLanguage} text={"language"} />
        </HeaderWrapper>
    )
}
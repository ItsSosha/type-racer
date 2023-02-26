import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFill, faLanguage, faFlagCheckered } from "@fortawesome/free-solid-svg-icons"
import HeaderButton from "./headerButton";

const HeaderWrapper = styled.header`
display: flex;
width: 100%;
flex-direction: row;
align-items: stretch;
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
            <h1 tabIndex={0}>Type<span style={{width: '0.5ch', display: 'inline-block'}}></span><FontAwesomeIcon icon={faFlagCheckered} size={"xs"} /><span style={{width: '0.5ch', display: 'inline-block'}}></span>Racer</h1>
            <HeaderButton icon={faFill} text={"theme"} />
            <HeaderButton icon={faLanguage} text={"language"} />
        </HeaderWrapper>
    )
}
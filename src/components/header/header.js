import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFill, faLanguage, faFlagCheckered } from "@fortawesome/free-solid-svg-icons"
import HeaderButton from "./headerButton";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const HeaderWrapper = styled.header`
display: flex;
width: 100%;
flex-direction: row;
align-items: stretch;
margin: 25px 0 45px;
height: 3em;

h1 {
    align-self: center;
    margin: 0 45px 0 10px;
    cursor: pointer;
    color: ${props => props.theme.text}
}

@media (max-width: 768px) {
    h1 {
        font-size: 1.5em;
    }        
}
`

export default function Header({handleModalOpen}) {

    const themeContext = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <h1 tabIndex={0}>Type<span style={{width: '0.5ch', display: 'inline-block'}}></span><FontAwesomeIcon style={{color: `${themeContext.main}`}} icon={faFlagCheckered} size={"xs"} /><span style={{width: '0.5ch', display: 'inline-block'}}></span>Racer</h1>
            <HeaderButton icon={faFill} text={"theme"} handleClick={() => handleModalOpen(prevModalState => !prevModalState)} />
            <HeaderButton icon={faLanguage} text={"language"} />
        </HeaderWrapper>
    )
}
import styled from "styled-components";
import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { darken, lighten } from "polished";
import ThemeButton from "../themeButton/themeButton";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalWrapper = styled.div`
position: fixed;
display: flex;
justify-content: center;
inset: 0;
background-color: rgba(0, 0, 0, 0.5);
opacity: 0;
z-index: 3;
transition: all .5s linear;
pointer-events: none;

& > div:first-child {
    transform: translateY(-300px);
}

&.show {
    opacity: 1;
    pointer-events: visible;
}

&.show > div:first-child {
    transform: translateY(0);
}
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 75vh;
    min-width: 240px;
    width: 40%;
    background-color: ${props => props.theme.background};
    border-radius: 10px;
    align-self: center;
    transition: all .5s ease-out;
    border: 3px ${props => darken(0.225, props.theme.background)} solid;
    overflow: hidden;
 
`

const Search = styled.input`
display: block;
width: 100%;
height: 2em;
padding: 1em 1em 1em 0;
border-top-right-radius: 10px;
background-color: rgba(0, 0, 0, 0);
outline: none;
border: none;
font-size: 1rem;
font-family: inherit;
color: ${props => props.theme.secondary};

&::placeholder {
    color: inherit
}

`

const Options = styled.div`
max-height: 100%;
width: 100%;
overflow-y: auto;

&::-webkit-scrollbar {
    width: 7px;
    transition: all 0.125s ease;
}

&::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.secondary};
    border-radius: 3px;
}

&::-webkit-scrollbar-thumb:hover {
    background-color: ${props => lighten(0.5, props.theme.text)};
}

&::-webkit-scrollbar-thumb:active {
    background-color: ${props => lighten(0.8, props.theme.main)};
}

`

export default function Modal({isShown, handleModalClose, handleThemeChange, themes}) {

    const [input, setInput] = useState('');

    const names = Object.keys(themes);

    const selectedTheme = useContext(ThemeContext);

    const themeButtons = names.filter(name => name.includes(input)).map(theme => {
        return (
            <ThemeButton themePreview={{...themes[theme], name: theme}} handleThemeChange={e => {
                handleThemeChange(e.currentTarget.dataset.theme);
                handleModalClose(prevModalState => !prevModalState);
                localStorage.setItem('theme', theme);
            }}
            isSelected={theme === selectedTheme.name ? true : false}
            key={theme}/>
        )
    })

    const handleModalInputChange = (data) => {
        setInput(data);
    }

    return (
        <ModalWrapper className={isShown ? "show" : ""} 
            onClick={() => handleModalClose(prevModalState => !prevModalState)} >
            <ModalContent onClick={e => e.stopPropagation()}>
                <div style={{display: "flex", alignItems: "center", padding: "0.5em 0"}}>
                    <FontAwesomeIcon icon={faSearch} style={{padding: '0 0.5em'}} size={"lg"}></FontAwesomeIcon>
                    <Search placeholder={"Type to search"} onChange={(e) => handleModalInputChange(e.target.value)}/>
                </div>
                <Options>
                    {themeButtons}
                </Options>
            </ModalContent>
        </ModalWrapper>
    )
}
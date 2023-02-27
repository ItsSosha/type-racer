import styled from "styled-components";
import { useState } from "react";
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
    /* height: 75vh;
    min-width: 300px;
    width: 40%;
    background-color: wheat;
    border-radius: 10px;
    align-self: center;
    transition: all .5s ease-out;
    border: 3px ${darken(0.225, "#F5DEB3")} solid;
    overflow: hidden; */

    display: flex;
    flex-direction: column;
    height: 75vh;
    min-width: 300px;
    width: 40%;
    background-color: wheat;
    border-radius: 10px;
    align-self: center;
    transition: all .5s ease-out;
    border: 3px ${darken(0.225, "#F5DEB3")} solid;
    overflow: hidden;
 
`
const themes = [
    {
        name: "first",
        background: "#F48498",
        main: "#ACD8AA",
        secondary: "#FFE6E8",
        text: "#F2CCC3",
    },
    {
        name: "carbon",
        background: "#313131",
        main: "#F66E0D",
        secondary: "#616161",
        text: "#F5E6C8"
    }
]

const Search = styled.input`
display: block;
/* justify-content: center; */
width: 100%;
height: 2em;
padding: 1em 1em 1em 0;
border-top-right-radius: 10px;
background-color: wheat;
outline: none;
border: none;
font-size: 1rem;
font-family: inherit;

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
    background-color: #000000;
    border-radius: 3px;
}

&::-webkit-scrollbar-thumb:hover {
    background-color: ${lighten(0.5, "#000000")};
}

&::-webkit-scrollbar-thumb:active {
    background-color: ${lighten(0.8, "#000000")};
}

`

export default function Modal({isShown, handleModalClose}) {

    const themeButtons = themes.map(theme => {
        return (
            <ThemeButton theme={theme}/>
        )
    })

    return (
        <ModalWrapper className={isShown ? "show" : ""} onClick={() => handleModalClose(prevModalState => !prevModalState)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <div style={{display: "flex", alignItems: "center", padding: "0.5em 0"}}>
                    <FontAwesomeIcon icon={faSearch} style={{padding: '0 0.5em'}} size={"lg"}></FontAwesomeIcon>
                    <Search placeholder={"Type to search"}/>
                </div>
                <Options>
                    {themeButtons}
                </Options>
            </ModalContent>
        </ModalWrapper>
    )
}
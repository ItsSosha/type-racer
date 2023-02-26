import styled from "styled-components";
import { useState } from "react";

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
    height: 60vh;
    min-width: 300px;
    width: 30%;
    background-color: wheat;
    border-radius: 10px;
    align-self: center;
    transition: all .5s ease-out;
`

export default function Modal({isShown, handleModalClose}) {

    return (
        <ModalWrapper className={isShown ? "show" : ""} onClick={() => handleModalClose(prevModalState => !prevModalState)}>
            <ModalContent onClick={e => e.stopPropagation()} style={{display: "flex", justifyContent: "center"}}>
                <div style={{alignSelf: "center"}}>
                    Themes will be added here!
                </div>
            </ModalContent>
        </ModalWrapper>
    )
}
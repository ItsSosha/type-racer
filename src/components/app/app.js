import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../header/header"
import InfiniteSlider from "../infiniteSlider/infiniteSlider"
import Main from "../main/main"
import Footer from "../footer/footer"
import Modal from "../modal/modal"

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${props => props.theme.background};
transition: background 1s ease ;
color: ${props => props.theme.secondary}
`


const AppContent = styled.div`
background: ${props => props.theme.background};
display: flex;
flex-direction: column;
margin: 0 auto;
min-height: 100vh;
max-width: 1250px;
padding: 25px;
transition: inherit;
`

const themes = {
    first: {
        name: "first",
        background: "#F48498",
        main: "#ACD8AA",
        secondary: "#FFE6E8",
        text: "#F2CCC3",
        error: "#E72D2D"
    },
    carbon: {
        name: "carbon",
        background: "#313131",
        main: "#F66E0D",
        secondary: "#616161",
        text: "#F5E6C8",
        error: "#E72D2D"
    },
    cheesecake: {
        name: "cheesecake",
        background: "#fdf0d5",
        main: "#8e2949",
        secondary: "#d91c81",
        text: "#3a3335",
        error: "#5cf074"
    }
}

export default function App() {
    const initialTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'first';
    const [isShown, setIsShown] = useState(false);
    const [theme, setTheme] = useState(initialTheme);

    return (
        <ThemeProvider theme={themes[theme]}>
            <AppWrapper>
                <AppContent>
                    <Header handleModalOpen={setIsShown}/>
                    <Modal isShown={isShown} 
                        handleModalClose={setIsShown} 
                        handleThemeChange={setTheme}
                        themes={themes}/>
                    <InfiniteSlider key={theme} delay={1}>
                        <p>How fast can you type? &nbsp;</p>
                        <p>How fast can you type? &nbsp;</p>
                        <p>How fast can you type? &nbsp;</p>
                        <p>How fast can you type? &nbsp;</p>
                        <p>How fast can you type? &nbsp;</p>
                        <p>How fast can you type? &nbsp;</p>
                    </InfiniteSlider>
                    <Main />
                    <Footer />
                </AppContent>
            </AppWrapper>
        </ThemeProvider>
    )
}
import { useState } from "react"
import styled from "styled-components"
import Header from "../header/header"
import InfiniteSlider from "../infiniteSlider/infiniteSlider"
import Main from "../main/main"
import Footer from "../footer/footer"
import Modal from "../modal/modal"

const AppWrapper = styled.div`
color: #000000;
display: flex;
flex-direction: column;
margin: 0 auto;
min-height: 100vh;
max-width: 1250px;
padding: 25px;
`

export default function App() {
    const [isShown, setIsShown] = useState(false);

    return (
        <AppWrapper>
            <Header handleModalOpen={setIsShown}/>
            <Modal isShown={isShown} handleModalClose={setIsShown}/>
            <InfiniteSlider>
                <p>How fast can you type? &nbsp;</p>
                <p>How fast can you type? &nbsp;</p>
                <p>How fast can you type? &nbsp;</p>
                <p>How fast can you type? &nbsp;</p>
                <p>How fast can you type? &nbsp;</p>
                <p>How fast can you type? &nbsp;</p>
            </InfiniteSlider>
            <Main />
            <Footer />
        </AppWrapper>
    )
}
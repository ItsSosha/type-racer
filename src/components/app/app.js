import { useState } from "react"
import styled from "styled-components"
import Header from "../header/header"

const AppWrapper = styled.div`
color: #000000;
margin: 0 auto;
display: flex;
min-height: 100vh;
max-width: 1250px;
padding: 25px;
`

export default function App() {
    return (
        <AppWrapper>
            <Header />
        </AppWrapper>
    )
}
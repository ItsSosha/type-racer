import styled from "styled-components";
import FooterButton from "./footerButton";

const FooterWrapper = styled.div`
width: 100%;
`

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterButton text='repo'/>
        </FooterWrapper>
    )
}
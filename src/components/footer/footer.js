import styled from "styled-components";
import FooterButton from "./footerButton";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.footer`
width: 100%;
display: flex;
column-gap: 3ch;
`

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterButton text='repo' icon={faCode} link={"https://github.com/ItsSosha/type-racer"}/>
        </FooterWrapper>
    )
}
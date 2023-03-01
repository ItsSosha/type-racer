import styled from "styled-components";
import FooterButton from "./footerButton";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const FooterWrapper = styled.div`
width: 100%;
`

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterButton text='repo' icon={faCode} link={"#"}/>
        </FooterWrapper>
    )
}
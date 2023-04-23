import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFooterButton = styled.a`
display: flex;
align-items: center;
column-gap: 1ch;
text-decoration: none;
color: inherit;
`

export default function FooterButton({icon, text, link}) {
    return (
        <StyledFooterButton href={link}>
            <FontAwesomeIcon icon={icon}/>
            <span>{text}</span>
        </StyledFooterButton>
    )
}
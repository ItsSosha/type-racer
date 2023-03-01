import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledFooterButton = styled.a`
display: grid;
grid-auto-flow: column;
align-items: center;
width: max-content;
grid-column-gap: 1ch;
cursor: pointer;
color: inherit;
text-decoration: none;
`

export default function FooterButton({icon, text, link}) {
    return (
        <StyledFooterButton href={link}>
            <FontAwesomeIcon icon={icon}/>
            <span>{text}</span>
        </StyledFooterButton>
    )
}
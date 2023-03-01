import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode } from "@fortawesome/free-solid-svg-icons"

const StyledFooterButton = styled.div`
display: grid;
grid-auto-flow: column;
align-items: center;
width: max-content;
grid-column-gap: 1ch;
`

export default function FooterButton({icon, text}) {
    return (
        <StyledFooterButton>
            <FontAwesomeIcon icon={faCode} />
            <span>{text}</span>
        </StyledFooterButton>
    )
}
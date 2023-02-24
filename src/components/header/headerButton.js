import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const StyledButton = styled.div`
display: flex;
width: 4em;
cursor: pointer;
align-items: center;
svg + span {
    align-self: end;
    font-size: 12px;
    visibility: hidden;
}

svg:hover + span {
    visibility: visible;
    transition: all 0.250s ease;
}
`

export default function HeaderButton({icon, text}) {
    console.log(icon);
    return (
    <StyledButton>
        <FontAwesomeIcon icon={icon} size={"lg"}/>
        <span>{text}</span>
    </StyledButton>
    )
}
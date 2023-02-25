import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const StyledButton = styled.div`
display: flex;
width: 4em;
margin-right: 10px;
cursor: pointer;
align-items: center;
svg + span {
    align-self: end;
    font-size: 13px;
    visibility: hidden;
}

// svg:hover + span {
//     visibility: visible;
//     transition: all 0.250s ease;
// }

&:hover svg + span {
        visibility: visible;
        transition: all 0.250s ease;
    }
`

export default function HeaderButton({icon, text}) {
    return (
    <StyledButton>
        <FontAwesomeIcon icon={icon} size={"xl"}/>
        <span>{text}</span>
    </StyledButton>
    )
}
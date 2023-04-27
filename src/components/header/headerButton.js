import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components";

const StyledButton = styled.div`
display: flex;
width: 4em;
margin-right: 10px;
cursor: pointer;
align-items: center;
user-select: none;
color: ${props => props.theme.main};

svg {
    width: auto;
}

svg + span {
    align-self: end;
    font-size: 13px;
    visibility: hidden;
}


&:hover svg + span {
        visibility: visible;
        transition: all 0.250s ease;
    }


@media (max-width: 768px) {

    & {
        width: auto;
    }

    svg {
        height: 1.2rem;
    }

    svg + span {
        display: none;
    }
}

`

export default function HeaderButton({icon, text, handleClick}) {
    return (
    <StyledButton tabIndex={0} onClick={handleClick}>
        <FontAwesomeIcon icon={icon} size={"xl"} />
        <span>{text}</span>
    </StyledButton>
    )
}
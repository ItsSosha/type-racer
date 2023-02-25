import styled, { keyframes } from "styled-components";
import { Children } from "react";

const sliderAnimation = keyframes`
0% {
    transform: translate3d(0, 0, 0);
}
100% {
    transform: translate3d(-50%, 0, 0);
}
`

const SliderWrapper = styled.div`
max-width: 100%;
overflow: hidden;
position: relative;

&:before,
&:after {
    content: '';
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    height: 100%;
    position: absolute;
    top: 0;
    width: 15%;
    z-index: 2;
}

&:before {
    left: 0;
}

&:after {
    right: 0;
    transform: rotate(180deg);
}

`

const ItemsContainer = styled.div`
white-space: nowrap;
overflow: hidden;
display: inline-block;
min-width: 100%;
animation: ${sliderAnimation} 10s linear infinite;

p {
    display: inline-block;
}
`

export default function InfiniteSlider({children}) {
    const itemsAmount = Children.count(children);

    return (
        <SliderWrapper>
            <ItemsContainer itemsAmount={itemsAmount}>
                {children}
                {children}
            </ItemsContainer>
        </SliderWrapper>
    )
}
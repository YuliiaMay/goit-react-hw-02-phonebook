import React from "react";
import { Wrapper } from "./Section.styled";

const Section = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Section;
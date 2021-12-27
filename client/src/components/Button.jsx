import { useState, useEffect } from "react";
import styled from "styled-components";

const Button = ({
    text,
    bc,
}) => {
    const [BACKGROUND_COLOR, setBACKGROUNDCOLOR] = useState("");
    const [COLOR, setCOLOR] = useState("");
    const [HOVER_COLOR, setHOVERCOLOR] = useState("");
    const BACKGROUND_COLOR_ONE = "#4770A6";
    const COLOR_ONE = "white";
    const HOVERCOLOR_ONE = "#5581bb";
    const BACKGROUND_COLOR_TWO = "#FFF";
    const COLOR_TWO = "#4770A6";
    const HOVERCOLOR_TWO = "#dbdada";
    const BACKGROUND_COLOR_THREE = "red";
    const COLOR_THREE = "white";
    const HOVERCOLOR_THREE  = "#ff7b7b";

    useEffect(() => {
        const handleColor = () => {
            if (bc === "color-2") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_ONE);
                setCOLOR(COLOR_ONE);
                setHOVERCOLOR(HOVERCOLOR_ONE);
            } else if (bc === "color-1") {
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_TWO);
                setCOLOR(COLOR_TWO);
                setHOVERCOLOR(HOVERCOLOR_TWO);
            }
            else{
                setBACKGROUNDCOLOR(BACKGROUND_COLOR_THREE);
                setCOLOR(COLOR_THREE);
                setHOVERCOLOR(HOVERCOLOR_THREE);
            }
        };

        handleColor();
    }, [BACKGROUND_COLOR, COLOR, HOVER_COLOR]);

    return (
        <MyButton
            backgroundcolor={BACKGROUND_COLOR}
            hover={HOVER_COLOR}
            color={COLOR}
        >
            {text}
        </MyButton>
    );
};

export default Button;

const MyButton = styled.button`
    font-size:.8rem;
    font-weight:500;
    z-index: 1;
    border-radius: .5em;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    background-color: ${(prop) => prop.backgroundcolor};
    color: ${(prop) => prop.color};
    padding: 8px 10px;
    &:hover {
        background-color: ${(prop) => prop.hover};
        border-radius: 0em;
    }
    @media (max-width: 800px) {
        padding: 6px 8px;
    }
`;
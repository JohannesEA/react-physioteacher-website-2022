import styled from "styled-components";
import { useState, useEffect } from "react";

const Text = ({ text, color }) => {
  const [textColor, setTextColor] = useState("");
  const COLORONE = "white";
  const COLORTWO = "black";

  useEffect(() => {
    const setColor = () => {
      if (color === "color-1") {
        setTextColor(COLORONE);
      } else if (color === "color-2") {
        setTextColor(COLORTWO);
      } else {
        setTextColor(color);
      }
    };
    setColor();
  }, [textColor]);

  return <Container color={textColor}>{text}</Container>;
};

export default Text;

const Container = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.color};
  transition: all 0.3s ease;
  margin: 0 auto 1em 1em;

  @media (max-width: 800px) {
    max-width: 22em;
    font-size: 1.2rem;
    margin: 0 auto 1em auto;

  }

  @media (max-width: 400px) {
    max-width: 20em;
    font-size: 1rem;
  }

  @media (max-width: 350px) {
    max-width: 18em;
  }

  @media (max-width: 300px) {
    max-width: 16em;
  }

  @media (max-width: 250px) {
    max-width: 14em;
  }
`;

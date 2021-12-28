import styled from "styled-components";

const IconBox = ({ src, alt, text }) => {

  return (
    <Container>
      <ImageContainer>
      <Image src={src} alt={alt} />
      </ImageContainer>
      {/* <Title>{title}</Title> */}
      <Text>{text}</Text>
    </Container>
  );
};

export default IconBox;

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-height: 20em;
  max-width: 20em;
  margin: .5em auto;
  color: var(--color-1);
  background-color: white;

  &:hover{
    color: black;
  }

`;

const ImageContainer = styled.div`
  display: flex;
  border-radius: .5em .5em 0 0;
`;

const Image = styled.img`
max-height: 2em;
max-width: 2em;
border-radius: .5em .5em 0 0;

@media (max-width: 800px){
    max-height: 1.5em;
    max-width: 1.5em;

}
  
`;

const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;


const Title = styled.h1`
  font-size: 1.2rem;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
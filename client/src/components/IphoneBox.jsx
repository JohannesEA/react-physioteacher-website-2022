import styled from "styled-components";

const ImageBox = ({ src, alt, text }) => {
  return (
    <Container>
      <ImageContainer>
      <Image src={src} alt={alt} />
      </ImageContainer>
      <Text>{text}</Text>
    </Container>
  );
};

export default ImageBox;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-height: 25em;
  max-width: 25em;
  margin: 0 auto;
  color: var(--color-3);

  &:hover{
    color: black;
  }

`;

const ImageContainer = styled.div`
  display: flex;
  border-radius: .5em .5em 0 0;
`;

const Image = styled.img`
max-height: 24em;
max-width: 24em;
border-radius: .5em .5em 0 0;

@media (max-width: 800px){
    max-height: 22em;
    max-width: 22em;

}

@media (max-width: 400px){
    max-height: 20em;
    max-width: 20em;
}

@media (max-width: 350px){
    max-height: 18em;
    max-width: 18em;
}

@media (max-width: 300px){
    max-height: 16em;
    max-width: 16em;
}

@media (max-width: 250px){
    max-height: 14em;
    max-width: 14em;
}

  
`;

const Text = styled.p`
  font-size: 1rem;

  @media (max-width: 800px) {
    font-size: 0.8rem;
  }
`;

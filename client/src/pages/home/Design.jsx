import styled from "styled-components";
import {IMAGES} from "../../data/data";
import ImageSlider from "../../components/imageslider/ImageSlider";
import Title from "../../components/Title"


const Design = () => {

  return (
<Container id="design">

  <Title color="color-2" text="Design" data-aos="fade-up"></Title>

        <ImageContainer id="design" data-aos="fade-up">
        <ImageSlider images={IMAGES} slidesToShow={5} />
      </ImageContainer>


</Container>

  );

};

export default Design;

const Container = styled.div`
margin-top:2em;
flex-direction: column;
text-align: center;
`;


const ImageContainer = styled.div`
    padding: 2em 0;
    transition: all .3s ease;
`;



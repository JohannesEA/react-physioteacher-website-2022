import styled from "styled-components";
import ImageBox from "../../components/IphoneBox"
import Title from "../../components/Title";
import Text from "../../components/Text";
import Button from "../../components/Button";
import getWindowDimensions from "../../commonFunctions/Dimentions";
import {Link} from "react-scroll";


const AppInfo = () => {
    const { width } = getWindowDimensions();

    const onClick = () => {
      window.location.href = 'https://johanneseandresen.netlify.app/'; 
    }

    return (
        <Container id="about">

{width > 800  ? <><Left>
        <Title color="color-2" text="App" />
        <Text text="Vi ønsker å optimalisere ortopediske, revmatiske og kroniske pasienter sin gjennomførelse og oppfølgning til behandlingen som de får hos terapeuter rundt om i landet ved hjelp av en app. Denne appen skal fungere som et supplerende tiltak til allerede eksisterende behandling og klinikker kan anbefale appen til sine pasienter for å tilby et bedre oppfølgingstilbud. Under ser du vår visjon for hvordan vi ønsker appdesignet skal se ut." color="color-2"/>

      </Left>
      <Right 
>
      <ImageBox
        src="/assets/images/img8.png"
        alt="mojo-logo"
        text="Forside"
      />
      {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}
      </Right></> : <>
      <Right >
      <Title color="color-2" text="App" />

      <ImageBox
        src="/assets/images/img8.png"
        alt="mojo-logo"
        text="Forside"
      />
      {/* <ImageBox
        src="/assets/images/headshot-magnus.png"
        alt="mojo-logo"
        text="Magnus"
      /> */}

      </Right>
      <Left>
      <Text text="Vi ønsker å optimalisere ortopediske, revmatiske og kroniske pasienter sin gjennomførelse og oppfølgning til behandlingen som de får hos terapeuter rundt om i landet ved hjelp av en app. Denne appen skal fungere som et supplerende tiltak til allerede eksisterende behandling og klinikker kan anbefale appen til sine pasienter for å tilby et bedre oppfølgingstilbud. Under ser du vår visjon for hvordan vi ønsker appdesignet skal se ut." color="color-2"/>

      </Left>
      </>} 
 
            
        </Container>
    )
}

export default AppInfo;

const Container = styled.div`
  margin-top: 3em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  transition: grid-template-columns .3s ease ;
  

/* grid-column-gap: 50px; */



@media (max-width: 800px){
flex-direction: column;
grid-template-columns: 1fr;
}
`;
const Left = styled.div`
display: grid;
grid-template-rows: repeat(3, 1fr);
max-height:70vh;
align-items: center;
@media (max-width: 800px){
    grid-template-rows: 1fr;
}
`;

const ButtonContainer = styled.div`
margin: 0 auto;
`;

const Right = styled.div`
text-align: center;
margin-top: 1em;

`;




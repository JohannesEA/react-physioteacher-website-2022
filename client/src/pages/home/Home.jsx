import styled from "styled-components";
// import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
// import About from "./About";
// import Contact from "./Contact";
import Hero from "./Hero";
// import Portfolio from "./Portfolio";
// import Services from "./Services";


const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Hero/>
            {/* <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Footer/> */}
        </Container>
    )
}

export default Home;

const Container = styled.div``;

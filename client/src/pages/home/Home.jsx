import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import About from "./About";
import Design from "./Design";
import Contact from "./Contact";
import Hero from "./Hero";
import AppInfo from "./AppInfo";
// import Services from "./Services";


const Home = () => {
    return (
        <Container>
            <Navbar/>
            <Hero/>
            <About/>
            <AppInfo/>
            <Design/>
            <Contact/>
            <Footer/>
    
        </Container>
    )
}

export default Home;

const Container = styled.div``;

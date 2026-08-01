import { Container } from "@mui/material";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import About from "../../components/Layout/Sections/About";
import Feedbacks from "../../components/Layout/Sections/Feedbacks";
import Contact from "../../components/Layout/Sections/Contact";
import Register from "../../components/Auth/Register";

export default function LandingPage()
{
    return <>
    <Header/>
     <Container sx={{my:4, minHeight:"100vh", alignItems:"center"} }> 
         <About/>
         <Feedbacks/>
         <Contact/>
      </Container>
      <Footer/>
    </>
}
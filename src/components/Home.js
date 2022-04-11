import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Carousel } from "react-bootstrap";
import Cards from "./FPCards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";

import "./home.css";

function Home () {
    return(
        <div>
             <Row  >
                    <h1  style={{textAlign: "center"}} >Clickonix: Online Electronics Shop</h1>
            </Row>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/home">ClickOnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container fluid>
                  <Carousel>
                        <Carousel.Item><img className="d-block w-100 h-90" src="assets/alexa.jpg" alt="First slide" />
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100 h-90" src="assets/laptop.jpg" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100 h-90" src="assets/onePlus.jpg" alt="Third slide" />
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100 h-90" src="assets/xiomi.jpg" alt="Second slide" />
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100 h-90" src="assets/zebranics.jpg" alt="Third slide" />
                        </Carousel.Item>
                    </Carousel>
                   
            <div><Footer /></div>
            </Container>
        </div>
        
    );
}

export default Home;
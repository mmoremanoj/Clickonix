import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import UserProfile from "./User";
import "./config/socketconfig"
import { socket } from "./config/socketconfig";

function Login () {
    const navigate = useNavigate("");
    const [user, setUser] = useState({});
    useEffect( () => {
        function checkLog() {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
        }
        //Runs on every render
        checkLog();
    }, []);

    const [email, setEmail] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [pass, setPass] = useState("");
    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const handleLogin = async () => {
        const data = {
            email : email,
            password : pass
        };
        const url = "http://localhost:8080/login";
        const result = await axios.post(url, data);
        const l = result.data.length;
        console.log(l);
        if(l!==1)
        {
            alert("check login credentials");
        }
        else
        {
            var list = result.data;
            var user = list[0];
            window.sessionStorage.setItem("user", JSON.stringify(user));
            socket.emit("user", user.email);
            if(user.role==="seller")
            {
                navigate("/myProds");
            }
            else if(user.role==="buyer")
            {
                navigate("/allProds");
            }
        }
        
    }
    const myStyle={
        
            backgroundImage: "url('https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg')",
            height:'100vh',
            marginTop:'00px',
            fontSize:'15px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

    }

    if(user)
    {
        if(user.role==="seller")
        {
            navigate("/myProds");
        }
        else if(user.role==="buyer")
        {
            navigate("/allProds");
        }
    }
    else
    {
        return(
            
        <div>
            <div style={myStyle}> <Row  >
           <h1  style={{textAlign: "center"}} >Clickonix: Online Electronics Shop</h1>
             </Row>  <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="/">ClickOnix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                <div>
                    <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                                <input className="ip" type="text" placeholder="Enter email address .. " value={email} onChange={handleEmail}/>
                                <br/>
                                <input className="ip" type="text" placeholder="Enter your password .. " value={pass} onChange={handlePass}/>
                                <br/>
                                <input className="btn" type="button" placeholder="Login " value="Login" onClick={handleLogin}/>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
                </div>
            
               
        </div>
        );   
    }
}

export default Login;
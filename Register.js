import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate, Redirect } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Image } from "react-bootstrap";
import "./register.css";
import axios from "axios";
import UserProfile from "./User";


function Register () {

    const navigate = useNavigate();
    var [user, setUser] = useState({});

    useEffect( () => {
        function checkLog() {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
        }
        //Runs on every render
        checkLog();
      }, []);

    const [fname, setfname] = useState("");
    const handleFname = (e) => {
        setfname(e.target.value);
    }

    const [lname, setLname] = useState("");
    const handleLname = (e) => {
        setLname(e.target.value);
    }

    const [email, setEmail] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const [mobile, setMobile] = useState("");
    const handleMobile = (e) => {
        setMobile(e.target.value);
    }

    const [pass, setPass] = useState("");
    const handlePass = (e) => {
        setPass(e.target.value);
    }

    const [checkPass, setcPass] = useState("");
    const CheckPass = (e) => {
        setcPass(e.target.value);
        
    }

    let [role, setRole] = useState("");
    const getRole = (e) => {
        setRole(e.target.value);
        console.log(role);
    }

    const handleSubmit = async () => {
        if(checkPass.localeCompare(pass)!==0)
        {
            alert("check your pass");
        }
        else
        {
            const data = {
                fname : fname,
                lname : lname,
                email : email,
                mobile : mobile,
                password : pass,
                role : role,
            };
            console.log(data);
            const url = "http://localhost:8080/register"
            const ret = await axios.post(url,data);
            navigate("/login");
        }
        
    }
    
    const myStyle={
        
        backgroundImage: "url('https://cityelectronicsagt.com/wp-content/uploads/2021/09/my_nasco.png')",
        height:'100vh',
        marginTop:'00px',
        fontSize:'15px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginBottom:'10px',

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
        return (

            <div style={myStyle} >
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
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container>
            <div>
                <Row>
                    <Col></Col>
                    <Col style={{textAlign: "right"}}>
                    
                    <br/>
                        <input className="ip" placeholder="first name" type="text" onChange={handleFname} value={fname}/>
                        <br/>
                        <br/>
                        <input className="ip" placeholder="last name" type="text" onChange={handleLname} value={lname}/>
                        <br/>
                        <br/>
                        <input className="ip" placeholder="your email" type="text" onChange={handleEmail} value={email}/>
                        <br/>
                        <br/>
                        <input className="ip" placeholder="your mobile" type="text" onChange={handleMobile} value={mobile}/>
                        <br/>
                        <br/>
                        <input className="ip" placeholder="Your password" type="password" onChange={handlePass} value={pass}/>
                        <br/>
                        <br/>
                        <input className="ip" placeholder="Re-enter your password" type="password" onChange={CheckPass} value={checkPass}/>
                        <br/>
                        <br/>
                        <input classname="rd" type="radio" value="seller" onClick={getRole}/>Seller
                        <input classname="rd" type="radio" value="buyer" onClick={getRole}/>Buyer
                        <br/>
                        <br/>
                        <input className="btn" type="button" value="Submit" onClick={handleSubmit}/>
                    
                    </Col>
                    <Col></Col>
                </Row>
                </div>
            </Container>
        </div>
        );
    }
}

export default Register;
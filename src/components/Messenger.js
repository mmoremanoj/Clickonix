import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "./config/socketconfig";

function Messenger () {
    
    const [online, setOnline] = useState([]);
    const [receMess, setrecMess] = useState("");
    const [dispList, setList] = useState([]);
    const [inMess, setinMess] = useState("");
    const handleinput = (e) => {
        setinMess(e.target.value);
    }

    const [inpMess, setinpMess] = useState("");
    const handleinpMess = (e) => {
        setinpMess(e.target.value);
    }

    const sendU = () => {
        socket.emit("user", inMess);
        
    } 

    const sendM = () => {
        console.log(inMess);
        const ext = inMess+"//"+inpMess+"//"+to;
        console.log(ext);
        socket.emit("message", ext);
        const newList = [ext, ...dispList];
        setList(newList);
        setinpMess("");
    }

    const [to, setTo] = useState("");
    const getTo = (e) => {
        setTo(e.target.value);
        alert(to, "to");
    }

    const getOld = async () => {
        const url = "http://localhost:8080/getMessages";
        const data = {
            to : to,
            from : inMess
        };
        console.log(data);
        const result = await axios.post(url, data);
        const list = result.data;
        console.log(list);
        const newlist = [...dispList, list];
        setList(newlist);
        
    }

    useEffect(() => {
        socket.on("online", (data) => {
            const result = JSON.parse(data);
            console.log(result); 
            setOnline(result); 
        });

        
        socket.on("message", (data) => {
            console.log(data);
            setrecMess(data);
            const newList = [data, ...dispList];
            setList(newList);
        });
    }, []);

    return(
        <div>
            <h1>Messenger /myMessenger</h1>
            <div>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">ClickOnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/addProds">Add Products</Nav.Link>
                <Nav.Link href="/allProds">All Products</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <input type="text" value={inMess} placeholder="username" onChange={handleinput}/>
                            <input type="button" value="Usename" onClick={sendU} />
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                        <Row>
                            <h2>List of online people ..</h2>

                            {online.map((item, index) => (
                                <div><input type="radio" onClick={getTo} value={item.username}/><h3>{item.username}</h3></div>
                            ))}

                        </Row>
                        </Col>
                        <Col>
                        
                            <input type="text" placeholder="your message here" onChange={handleinpMess} value={inpMess}/>
                            <input type="button" value="send Message" onClick={sendM}/>
                            <input type="button" value="get Old Message" onClick={getOld}/>
                            {dispList.map((item, index) => (
                                <p>{item}</p>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Messenger;
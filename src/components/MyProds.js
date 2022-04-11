import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import "./login.css";
import UserProfile from "./User";
import Pid from "./Pid";

function MyProds () {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    
    useEffect( () => {
        async function getData() {
            const users = JSON.parse(window.sessionStorage.getItem("user"));
            setUser(users);
            const idata = {
                "id" : users.custid       
            };
            console.log(idata);
            const url = "http://localhost:8080/getProductBySid";
            const result = await axios.post(url, idata);
            console.log(result.data);
            const list = result.data;
            const newList = [...list];
            setProducts(newList);
            console.log(products);
            console.log(user);
        }
        //Runs on every render
        getData();
      }, []); 

    //const handleEdit = () => {
        //console.log(prodid);
        //Pid.setPid(pid);
        //console.log(pid);
        
    //};

    function handleEdit(id) {
        Pid.setPid(id);
        alert(id);
        console.log(id);
        navigate("/editProd")
    }

    return(
        <div>
            <h1>myProds - Seller Opts</h1>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">ClickOnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/addProd">Add Products</Nav.Link>
                <Nav.Link href="/allProds">All Products</Nav.Link>
                <Nav.Link href="/messenger">Live Chat</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <div>
                <Container>
                    <Row>
            {products.map((item, index) => (
                <div><><Col></Col><Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={"http://localhost:8080/"+item.pic} />
                        <Card.Body>
                            <Card.Title>{item.pname}</Card.Title>
                            <Card.Subtitle>{item.pdisc}</Card.Subtitle>
                            <Card.Text>{item.price}</Card.Text>
                            <input type="button" value="Edit" onClick={() => handleEdit(item.prid)}/>
                        </Card.Body>
                    </Card>
                </Col><Col></Col></>
                </div>
                
            ))}
            </Row>
            </Container>
            </div>
        </div>
    );
}

export default MyProds;
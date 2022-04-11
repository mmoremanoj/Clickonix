import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import UserProfile from "./User";
import "./config/socketconfig"
import { socket } from "./config/socketconfig";
import Pid from "./Pid";

function AllProducts () {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({});
    const [cartlen, setLength] = useState("0 items in cart");
    const [quant, setQuant] = useState("0");
    const handleQuans = (e) => {
        setQuant(e.target.value);
    }
    const [something, setSome] = useState([]);
    
    useEffect( () => {
        async function getData() {
            const llist = JSON.parse(window.sessionStorage.getItem("cart"));
            if(llist)
            {
                setSome(llist);
            }
            else
            {
                setSome([]);
            }
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
            const url = "http://localhost:8080/getAllProds";
            const result = await axios.get(url);
            console.log(result.data);
            const list = result.data;
            setProducts(list);
            console.log(products);
        }
        //Runs on every render
        getData();
      }, []);

      const cart = something;
      var newlist = [];
      function handleCart(id) {
        const data = {
            pid : id,
            q : quant
        };
        console.log(data);
        cart.push(data);
        window.sessionStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart);
        console.log(cart.length);
        setLength(cart.length+" items in cart");
        setQuant("0");
    }

    const gotoCart = () => {
        navigate("/cart");
    }

    return (
        <div>
            <h1>/allProds -- Buyer side</h1>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">ClickOnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/messenger">Messenger</Nav.Link>
                <Nav.Link href="/allProds">All Products</Nav.Link>
                <p>No of items in cart is : </p>
                <input type="button" value={cartlen} onClick={gotoCart}/>
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
                            <input type="button" value="Add to Cart" onClick={() => handleCart(item.prid)}/>
                            <input type="text" value={quant} placeholder="Enter Quantity / " onChange={handleQuans}/>{item.pquant}
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

export default AllProducts;
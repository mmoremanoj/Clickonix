import Pid from "./Pid";
import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";


function EditProd () {

    const navigate = useNavigate();
    let id;
    var product = {}
    var pname;
    var pdisc;
    var pprice;
    var pquant;
    var pcat;

    const [name, setName] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const [disc, setDisc] = useState("");
    const handleDiscChange = (e) => {
        setDisc(e.target.value);
    }

    const [cat, setCat] = useState("");
    const handleCatChange = (e) => {
        setCat(e.target.value);
    }

    const [price, setPrice] = useState("");
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const [quant, setQuant] = useState("");
    const handleQuantsChange = (e) => {
        setQuant(e.target.value);
    }
    var iid;
    var ssid;
    var data = {};
    var ppic
    useEffect( () => {
        async function getProd(){
            const url = "http://localhost:8080/getSingleProduct";
            const id = Pid.getPid();
            const idata = {
                id : id
            };
            console.log(idata);
            const result = await axios.post(url,idata);
            console.log(result.data);
            product = result.data;
            setName(product.pname);
            setCat(product.pcat);
            setDisc(product.pdisc);
            setPrice(product.price);
            setQuant(product.pquant);
        }
        getProd();
      }, []);

    

    const handleEdit = async () => {
        product.pname = name;
        product.pcat = cat;
        product.pdisc = disc;
        product.price = price;
        product.pquant = quant;
        const url = "http://localhost:8080/updateProducts";
        console.log(product);
        await axios.post(url, product);
        navigate("/myProds");
    }

    return (
        <div>
            <h1>EditProd /editProd</h1>
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
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <input type="text" value={name} placeholder="name" onChange={handleNameChange}/>
                        <input type="text" value={disc} placeholder="disc" onChange={handleDiscChange}/>
                        <input type="text" value={cat} placeholder="Cat" onChange={handleCatChange}/>
                        <input type="text" value={price} placeholder="price" onChange={handlePriceChange}/>
                        <input type="text" value={quant} placeholder="quants" onChange={handleQuantsChange}/>
                        <input type="button" value="confirm" onClick={handleEdit}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default EditProd;
import { useNavigate } from "react-router-dom";
import { Nav, Container, NavDropdown, Navbar, Row, Col, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function AddProd () {

    const [user, setUser] = useState({});
    useEffect( () => {
        async function getData() {
            const user = JSON.parse(window.sessionStorage.getItem("user"));
            setUser(user);
            console.log(user);
        }
        //Runs on every render
        getData();
    }, []); 

    const [selectedPic, setPhoto] = useState(null);
    const handleFileinput = (e) => {
        setPhoto(e.target.files[0]);
    };

    const navigate = useNavigate();
    const [pname, setPname] = useState("");
    const handleName = (e) => {
        setPname(e.target.value);
    };

    const [disc, setDisc] = useState("");
    const handleDisc = (e) => {
        setDisc(e.target.value);
    };

    const [cat, setCat] = useState("");
    const handleCat = (e) => {
        setCat(e.target.value);
    };

    const [quant, setQ] = useState("");
    const handleQuant = (e) => {
        setQ(e.target.value);
    };

    const [price, setPrice] = useState("");
    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleAdd = async () => {
        console.log(quant);
        const id = user.custid;
        console.log(id);
        const formData = new FormData();
        formData.append("prname", pname)
        formData.append("prdisc", disc)
        formData.append("prcat", cat)
        formData.append("prprice", price)
        formData.append("prquant", quant)
        formData.append("prpic", selectedPic)
        formData.append("prsid", id)
        console.log(selectedPic);
        console.log(formData);
        const url = "http://localhost:8080/addProduct";
        await axios.post(url, formData);
        navigate("/myProds");
    };

    return(
        <div>
            <h1>Seller Addprods - /addProd</h1>
            <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#home">ClickOnix</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="/myProds">My Products</Nav.Link>
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
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <input type="text" value={pname} placeholder="name" onChange={handleName}/>
                            <input type="text" value={disc} placeholder="disc" onChange={handleDisc}/>
                            <input type="text" value={cat} placeholder="cat" onChange={handleCat}/>
                            <input type="text" value={quant} placeholder="quant" onChange={handleQuant}/>
                            <input type="text" value={price} placeholder="price" onChange={handlePrice}/>
                            <input type="file" required name="Photo" onChange={handleFileinput}/>
                            <input type="button" value="Add Product" onClick={handleAdd}/>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default AddProd;
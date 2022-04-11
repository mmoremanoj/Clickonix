import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home.js"
import Register from './components/Register';
import Login from './components/Login';
import MyProds from './components/MyProds';
import EditProd from './components/EditProd';
import AddProd from './components/AddProd';
import Messenger from './components/Messenger';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Order from './components/Order';
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/editProd" element={<EditProd/>}></Route>
          <Route path="/addProd" element={<AddProd/>}></Route>
          <Route path="/myProds" element={<MyProds/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/messenger" element={<Messenger/>}></Route>
          <Route path="/allProds" element={<AllProducts/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

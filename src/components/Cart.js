import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart () {
    const navigate = useNavigate();
    const [prodlist, setPlist] = useState([]);
    var qlist = [];

    useEffect( () => {
        async function getCart() {
            console.log(JSON.parse(window.sessionStorage.getItem("cart")));
            const temp = JSON.parse(window.sessionStorage.getItem("cart"));
            var list = [];
            for(var i=0; i<temp.length; i++)
            {
                var n = temp[i].pid;
                list.push(n);
                qlist.push(temp[i].q);
            }
            console.log(list);
            const url = "http://localhost:8080/getCustomProds";
            const result = await axios.post(url, list);
            console.log(result.data);
            for(var i=0; i<result.data.length; i++)
            {
                result.data[i].pquant = qlist[i];
                console.log(result.data);
            }
            setPlist(result.data);
        }
        //Runs on every render
        getCart();
    }, []);

    const handlecheckout = () => {
        window.sessionStorage.setItem("order", JSON.stringify(prodlist));
        navigate("/order");
    }

    return (
        <div>
            <h1>Cart /cart</h1>

            {prodlist.map((item, index) => (
                <div>
                    <img src={"http://localhost:8080/"+item.pic} />
                    <h3>{item.prid}+/+/+{item.pname}+/+/+{item.pdisc}+/+/+{item.pcat}+/+/+{item.price}</h3>
                    <input type="text" value={item.pquant} />
                </div>
                
            ))}
            <input type="button" value="Checkout" onClick={handlecheckout} />

        </div>
    );
}

export default Cart;
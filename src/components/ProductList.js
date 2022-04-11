import React, { Component } from 'react';

import { useEffect } from 'react';
import axios from 'axios';


function ProductList(){
    useEffect( async () => {
        //Runs on every render


       
        const url = "http://localhost:8080/allprodcut";
        const result = await axios.get(url);
        console.log(result.data);
        const list = result.data;
console.log(list);
      }, []);


        return (
            <div>
                <h2 className='text-center'>Product List</h2>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th> Product ID</th>
                                <th> Product Desc</th>
                                <th> Product Cat</th>
                                <th> Product Price</th>
                                <th> Product Quantity</th>
                                <th> Product Name</th>
                                <th> USer ID</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.products.map(
                                    product=>
                                    <tr key = {product.id}>
                                        <td>{product.prod_desc}</td>
                                        <td>{product.category}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.name}</td>
                                        <td>{product.uid}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        );
    
}

export default ProductList;
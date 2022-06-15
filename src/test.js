
import { useState } from "react";
import axios from "axios";
import "./App.css";
import React, { useEffect, useReducer } from "react";
 function App() {
        const [listProduct,setListProduct] = useState([]); 
        const getData = () => {
            console.log("chayj roi as");
            axios.get("http://localhost:3000/hotel").then((res) => {
                console.log("chayj roi then");
                    setListProduct(res.data);
                });
        }
        useEffect(() => {
            getData()      
            console.log(listProduct.length);
        },[])
        return (
            <>
    
            <div className="display"> 
            { 
            listProduct.map((product) => (
                <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <a href={product.linkname} className="card-title">{product.name}</a>
                  <p className="card-text">{product.address}</p>
                  <a href="#" class="btn btn-primary">See more</a>
                </div>
              </div>
              
              ))
              }

            </div>
                   
            </>
        );
    }


export default App;
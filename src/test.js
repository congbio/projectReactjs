
import { useState } from "react";
import axios from "axios";
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
        },[])

        return (
            <>
            
           { console.log(listProduct)}
            <div>

            Coong gai depj

            </div>
                   
            </>
        );
    }


export default App;

import { useState } from "react";
import axios from "axios";


import React, { useEffect } from "react";
import Card from "./conten/child";
function App() {
    const [listProduct, setListProduct] = useState([]);
    const getData = () => {
        
        axios.get("http://localhost:3000/hotel").then((res) => {
            
            setListProduct(res.data);
        });
    }
    useEffect(() => {
        getData()
        
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        listProduct.map((product) => (
                            <Card
                                image={product.image}
                                name={product.name}
                                linkname={product.linkname}
                                address={product.address}
                            >

                            </Card>
                        ))

                    }
                </div>

            </div>

        </>
    );
}


export default App;
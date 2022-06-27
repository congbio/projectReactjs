import { useState } from "react";
import axios from "axios";

import React, { useEffect } from "react";
import Childroom from "./childroom";


function Showroom() {

  const [listProduct, setListProduct] = useState([]);


  const getData = () => {
    axios.get("http://localhost:3000/room").then((res) => {
      setListProduct(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="row">
        <h2>cong</h2>
        {
          console.log(listProduct)

        }
        {
          listProduct
            .map((product, index) => (
              <Childroom
                image={product.image}
                name={product.name}
                price={product.price}
                numberbed={product.numberbed}
                area={product.area}
                description={product.description}
                key={index}
              />
            ))
        }
      </div>
    </>
  );
}

export default Showroom;
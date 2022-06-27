import { useState } from "react";
import axios from "axios";

import React, { useEffect } from "react";
import Card from "./conten/child";

const priceFilters = [
	{from: 100000, to:300000},
	{from: 300000, to:500000},
	{from: 500000, to:1000000},
	{from: 1000000, to:5000000},
]
function App() {
  const [address, setaddress] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const [namehotel, setnamehotel] = useState("");
  const [listProduct, setListProduct] = useState([]);
  const [listProductSearch, setListProductSearch] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3000/hotel").then((res) => {
      setListProduct(res.data);
      setListProductSearch(res.data)
    });
  };
	
	const ProcessPrice =()=>{

	}

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setListProductSearch(listProduct
                    .filter(product => address !== "" ? product.address.includes(address) : true)
										.filter(product => namehotel !== "" ? product.name.includes(namehotel) : true)
										.filter(product => priceFilter !== "" ? product.price.replace(/[^0-9]/g, '') >= 
										  priceFilters[priceFilter].from && product.price.replace(/[^0-9]/g, '') <= priceFilters[priceFilter].to : true
                    )
                    
    )
  };
  console.log(address, ' ', priceFilter, ' ');
  console.log(listProduct);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div
            className="form row aos-init aos-animate mt-5 mb-5"
            data-aos="fade-up"
          >
            <div className="col-lg-3">
              <div className="input-icon-wrap">
                <input
                  type="text"
                  className="form-control flatpickr-input"
                  id="arrival"
                  placeholder="Province"
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input-icon-wrap">
                <input
                  type="text"
                  className="form-control flatpickr-input"
                  id="departure"
                  placeholder="Name hotel"
                  onChange={(e) => setnamehotel(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="input-icon-wrap">
                <span className="icon-person" />
                <select id="number-of-person" className="form-control" onChange={(e) => setPriceFilter(e.target.value)}>
                  <option value>Price</option>
                  <option value ='0'>100.000 - 300.000VND</option>
                  <option value ='1'>300.000 - 500.000VND</option>
                  <option value ='2'>500.000 - 1.000.000VND</option>
                  <option value ='3'>1.000.000 - 5.000.000VND</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3">
              <button
                type="submit" className="btn btn-info text-center" 
                style={{ width: "100px", height: "30px", marginLeft: "45%" }}
              >
                Find now
              </button>
            </div>
          </div>
        </form>
        <div>
          <h1>{address}</h1>
          {namehotel}
          {priceFilter}
        </div>
        <div className="row">
					{console.log(namehotel)}
          {
					listProductSearch
					.map((product, index) => (
						<Card
							image={product.image}
							name={product.name}
							price={product.price}
							linkname={product.linkname}
							address={product.address}
              key={index}
						/>
					))
          }
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import axios from "axios";

import React, { useEffect } from "react";
import Card from "./conten/child";
function App() {
	const [address, setaddress] = useState();

	const [namehotel, setnamehotel] = useState();
	const [listProduct, setListProduct] = useState([]);

	const getData = () => {
		axios.get("http://localhost:3000/hotel").then((res) => {
			setListProduct(res.data);
		});
	};

	//  const handlerChangePro = (e) =>{
	//    const  key = e.target.name;
	//    const value = e.target.value;

	//     setProvince({ ...province, [key]: value });
	//  };
	//  console.log(province);
	const handleSubmit = () => {
		alert("loading");
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className="container">
				<form>
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
								<select id="number-of-person" className="form-control">
									<option value>Price</option>
									<option value>100.000 - 200.000VND</option>
									<option value>400.000 - 500.000VND</option>
									<option value>500.000 - 1000.000VND</option>
									<option value>1000.000 - 2000.000VND</option>
								</select>
							</div>
						</div>
						<div className="col-lg-3">
							<button
								className="btn btn-primary btn-block w-100"
								onClick={() => handleSubmit()}
								style={{ width: "60px", height: "30px", marginLeft: "45%" }}
							>
								Find now
							</button>
						</div>
					</div>
				</form>

				<div className="row">
					{namehotel == ""
						? listProduct.map((product) => (
								<Card
									image={product.image}
									name={product.name}
									price={product.price}
									linkname={product.linkname}
									address={product.address}
								></Card>
						  ))
						: listProduct
								.filter((product) => product.type == namehotel)
								.map((product) => (
									<Card
										image={product.image}
										name={product.name}
										price={product.price}
										linkname={product.linkname}
										address={product.address}
									></Card>
								))}
				</div>
			</div>
		</>
	);
}

export default App;

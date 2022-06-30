import { useState, useEffect } from "react";
import axios from "axios";

const FillInfromation = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setaddress] = useState('');
	const [listProduct, setListProduct] = useState([]);
	const checkInput = () => {
		if (name == "" || email == "" || phone == "" || address == "") {
			return true;
		}

	}

	const itemroom ={};
	const checkObject = Object.values(itemroom).length === 0
	console.log(checkObject);
	
	 
	const handleSubmit = (event) => {
		
		
		event.preventDefault();
		if (checkInput() == true) {
			alert("Hãy nhập đầy đủ thông tin!");
			
			 
			
		}
		else {
			const today = new Date();
			const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
			
			const objectbooking = {
				name: name,
				email: email,
				phone: phone,
				address: address,
				namehotel: itemroom.name,
				area: itemroom.name,
				description: itemroom.description,
				image: itemroom.image,
				numberbed: itemroom.numberbed,
				price: itemroom.price,
				date:date
			}
			console.log(objectbooking);

			  
		}
		
 


	}
	

	const getData = () => {
		axios.get("http://localhost:3000/room").then((res) => {
			setListProduct(res.data);
			const idroom = localStorage.getItem('idroom');
			const itemroom = listProduct.find((item) => item.id === parseInt(idroom));
		});
	};





	useEffect(() => {
		getData();
	}, []);
	return (
		<div className="container  bg-default">
			<div className="row mt-5">
				<div className="col-md-6 shadow p-5   mt-5 mb-5 bg-white rounded">
					<form onSubmit={handleSubmit}>
						<div className="form-row">
							<h2 className="text-center">Điền thông tin</h2>
							<div className="form-group ">
								<label htmlFor="inputEmail4">Email</label>
								<input
									onChange={(e) => setName(e.target.value)}
									type="name"
									name="namehotel"
									className="form-control p-2"
									id="inputEmail4"
									placeholder="entername"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="inputEmail4">Email</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									className="form-control p-2"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>

							<div className="form-group ">
								<label htmlFor="phone">Phone</label>
								<input
									onChange={(e) => setPhone(e.target.value)}
									type="text"
									className="form-control p-2"
									id="phone"
									placeholder="Enter phone"
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Địa chỉ</label>
							<input
								onChange={(e) => setaddress(e.target.value)}
								type="text"
								className="form-control p-2 mb-2"
								id="inputAddress"
								placeholder="nhập địa chỉ "
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
				<div className="col-md-6 shadow p-5     mt-5 mb-5 bg-white rounded">


					<div className="bg-light rounded d-flex flex-column">
						<div className="p-2 ml-3">
							<h4>Detail Room</h4>
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">  Price</div>
							{console.log(itemroom.price)}
							<div className="ml-auto">{checkObject? itemroom.price :'----------' }</div>
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">  Name</div>
							{/* <div className="ml-auto">{itemroom.name}</div> */}
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">  Area</div>
							{/* <div className="ml-auto">{itemroom.area}</div> */}
						</div>
						<div className="p-2 d-flex">
							<div className="col-8"> image </div>
							{/* <div className="ml-auto"><img src="{itemroom.area}"/></div> */}
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">Copayment</div>
							<div className="ml-auto">+ $40.00</div>
						</div>
						<div className="border-top px-4 mx-3"></div>
						<div className="p-2 d-flex pt-3">
							<div className="col-8">
								Total Deductible, Coinsurance, and Copay
							</div>
							<div className="ml-auto">$40.00</div>
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">
								Maximum out-of-pocket on Insurance Policy (not reached)
							</div>
							<div className="ml-auto">$6500.00</div>
						</div>
						<div className="border-top px-4 mx-3"></div>
						<div className="p-2 d-flex pt-3">
							<div className="col-8">Insurance Responsibility</div>
							<div className="ml-auto">
								<b>$71.76</b>
							</div>
						</div>
						<div className="p-2 d-flex">
							<div className="col-8">
								Patient Balance{" "}
								<span className="fa fa-question-circle text-secondary"></span>
							</div>
							<div className="ml-auto">
								<b>$71.76</b>
							</div>
						</div>
						<div className="border-top px-4 mx-3"></div>
						<div className="p-2 d-flex pt-3">
							<div className="col-8">
								<b>Total</b>
							</div>
							<div className="ml-auto">
								<b className="green">$85.00</b>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};
export default FillInfromation;

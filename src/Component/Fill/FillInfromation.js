import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Modal } from "react-bootstrap";
import emailjs from '@emailjs/browser';



const FillInfromation = () => {
	const [name, setName] = useState(localStorage.getItem('username'));
	const [email, setEmail] = useState(localStorage.getItem('email'));
	const [phone, setPhone] = useState('');
	const [dateinput, setadateinput] = useState('');
	const [dateoutput, setdateoutput] = useState("");
	const [listProduct, setListProduct] = useState([]);
	// document.getElementById('inputEmail4').value = name;
	// document.getElementById('inputEmail4').value = name;
	var itemroom = {};
	const checkInput = () => {
		if (name == "" || email == "" || phone == "" || dateinput == "") {
			return true;
		}

	}
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);



	const getobject = () => {
		const idroom = localStorage.getItem("idroom");

		itemroom = listProduct.find((item) => item.id === parseInt(idroom));
		console.log(itemroom);
	}

	const changeStatus = () => {
		const id = localStorage.getItem("idroom");
		itemroom = { ...itemroom, status: false }
		axios.put(`http://localhost:3000/room/${id}`, itemroom).then((res) => {
			console.log('update object success!');
		});

	}



	const handleSubmit = (event) => {
		event.preventDefault();

		if (checkInput() == true) {
			alert("Hãy nhập đầy đủ thông tin!");
		}
		else {
			getobject();
			changeStatus();
			const today = new Date();
			const date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

			const objectbooking = {
				name: name,
				email: email,
				phone: phone,
				dateinput: dateinput,
				dateoutput: dateoutput,
				namehotel: itemroom.name,
				area: itemroom.name,
				price: itemroom.price,
				description: itemroom.description,
				image: itemroom.image,
				numberbed: itemroom.numberbed,
				price: itemroom.price,
				date: date,
			};
			emailjs.send('service_0janfsk', 'template_piopgc2', objectbooking, 'user_5KiMCYtNrqLlFbsDxXynH')
				.then((result) => {
					alert("Đang ký thành công !!");
					axios
						.post("http://localhost:3000/bookingroom", objectbooking)
						.then((res) => {
							console.log("post object success!");
							setShow(true)
						});
				}, (error) => {
					console.log('error.text');
				});


		}
	}


	const getData = () => {
		axios.get("http://localhost:3000/room").then((res) => {
			setListProduct(res.data);

		});


	};


	useEffect(() => {
		getData();
		getobject()

	}, []);
	return (
		<div className="container  bg-default">
			<div className="row mt-5">
				<div className="col-md-6 shadow p-5   mt-5 mb-5 bg-white rounded">
					<form onSubmit={handleSubmit}>
						<div className="form-row">
							<h2 className="text-center">Điền thông tin</h2>
							<div className="form-group ">
								<label htmlFor="inputEmail4">Tên</label>
								<input
									onChange={(e) => setName(e.target.value)}
									type="name"
									name="namehotel"
									className="form-control p-2"
									id="inputname"
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
							<label htmlFor="inputAddress">Check-in date</label>
							<input
								onChange={(e) => setadateinput(e.target.value)}
								type="date"
								className="form-control p-2 mb-2"
								id="inputAddress"
								placeholder="ngay nhan "
							/>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Check-out date</label>
							<input
								onChange={(e) => setdateoutput(e.target.value)}
								type="date"
								className="form-control p-2 mb-2"
								id="inputAddress"
								placeholder="ngay tra"
							/>
						</div>

						<button type="submit" className="btn btn-warning">
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
							<div className="col-8"> Price</div>
							{console.log('price is:', itemroom.price)}
							<div className="ml-auto"></div>
						</div>
						<div className="p-2 d-flex">
							<div className="col-8"> Name</div>
							{/* <div className="ml-auto">{itemroom.name}</div> */}
						</div>
						<div className="p-2 d-flex">
							<div className="col-8"> Area</div>
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


					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{itemroom.name}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default FillInfromation;

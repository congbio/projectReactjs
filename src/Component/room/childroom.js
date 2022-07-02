// import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const Childroom = (props) => {
	const [listProduct, setListProduct] = useState([]);


	// const [id, setID] = useState(null);

	const bookingRoom = (id) => {

		if (localStorage.getItem("username") == undefined || localStorage.getItem("username")== null && localStorage.getItem("username")=="")
		{
			alert("you have to register account!")
			window.location.assign('http://localhost:4000/register');
			
		}
		else{
			localStorage.setItem("idroom", id);
			const itemroom = listProduct.find((item) => item.id === parseInt(id));
			localStorage.setItem('itermrom', JSON.stringify(itemroom));
			window.location.assign('http://localhost:4000/checkout');

			
		}

	}
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

			<div className="col-lg-4" >
				<div className="single-location mb-3">
					<div className="card" style={{ width: '26rem' }}>
						<img src={props.image} alt="image hotel" />
						<div className="card-body">
							<h5 className="card-title"><a  >{props.name} </a></h5>
							<h6 className="card-title"><b>Giá:</b> {props.price} </h6>
							<h6 className="card-title"><b>Mô tả:</b> <span>{props.numberbed}</span> <span>{props.area}</span></h6>
							<p className="card-text"><span>{props.description}</span></p>
							<a href="#" className="btn btn-warning"
								onClick={() => bookingRoom(props.id)}>
								
									Book

							</a>
						</div>
					</div>


				</div>
			</div>
		</>
	);
};
export default Childroom;

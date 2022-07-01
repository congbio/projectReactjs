// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Childroom = (props) => {

	// const [id, setID] = useState(null);

	const bookingRoom = (id) => {

		console.log("thành công");
		localStorage.setItem("idroom", id);

	}
	return (
		<>

			<div className="col-lg-4" >
				<div className="single-location mb-3">
					<div className="card" style={{ width: '22rem' }}>
						<img src={props.image} alt="image hotel" />
						<div className="card-body">
							<h5 className="card-title"><a  >{props.name} </a></h5>
							<h6 className="card-title"><b>Giá:</b> {props.price} </h6>
							<h6 className="card-title"><b>Mô tả:</b> <span>{props.numberbed}</span> <span>{props.area}</span></h6>
							<p className="card-text"><span>{props.description}</span></p>
							<a href="#" className="btn btn-warning"
								onClick={() => bookingRoom(props.id)}>
								<Link to={"/checkout"} className="nav-link">
									Book
								</Link>

							</a>
						</div>
					</div>


				</div>
			</div>
		</>
	);
};
export default Childroom;

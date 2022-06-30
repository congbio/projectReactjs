// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Childroom = (props) => {

	// const [id, setID] = useState(null);

	const bookingRoom =(id)=>{
		
		console.log("thành công");
		localStorage.setItem("idroom", id);
		
	}
	return (
		<>
			<div className="col-lg-4" >
				<div className="single-location mb-3">
					<img src={props.image} alt="image hotel" />
					<div className="location-contents">
						<h3>
							<a  >{props.name} </a>
						</h3>
						<div className="price">
							Started from<span>{props.price}</span>{" "}
						</div>
						<div className="price">
							<span>{props.description}</span>{" "}
						</div>
						<div className="price">
							<span>{props.numberbed}</span>{" "}
						</div>
						<span>{props.area}</span> <br />
						<span>{props.numberbed}</span>
						<div className="price">
							<button
								type="button"
								onClick={() => bookingRoom(props.id)}
								className="btn btn-success"
							>
								<Link to={"/checkout"} className="nav-link">
									Book
								</Link>
							
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Childroom;

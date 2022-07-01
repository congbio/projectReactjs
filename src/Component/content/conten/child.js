import "../../../css/styleProduct.css";
import { Link } from "react-router-dom";
const Card = (props) => {
	return (
		<>
			<div  className="col-lg-4">
				<div className="single-location mb-3">
					<img src={props.image} alt="image hotel" />
					<div className="location-contents">
						<Link to={"/Booking"} className="nav-link" href="#">
							<h3>{props.name}</h3>
						</Link>

						<div className="price">
							Started from<span>{props.price}</span>{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Card;

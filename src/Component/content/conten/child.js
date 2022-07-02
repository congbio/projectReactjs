import "../../../css/styleProduct.css";
import { Link } from "react-router-dom";
const Card = (props) => {
	return (
		<>
			<div className="col-lg-4 " >
				<div className="single-location mb-3">
					<div className="card" style={{ width: '26rem' }}>
						<img src={props.image} alt="image hotel" />
						<div className="card-body">
							<h5 className="card-title"><Link to={"/Booking"} className="nav-link" href="#">
							<p class="text-info"><h4>{props.name}</h4></p>
							</Link></h5>
							<b className="card-text">  </b><span>{props.address}</span>

						</div>
					</div>


				</div>
			</div>
		</>
	);
};
export default Card;

import "../../../css/styleProduct.css";

const Card = (props) => {
	return (
		<>
			<div key={props.key} className="col-lg-4">
				<div className="single-location mb-3">
					<img src={props.image} alt="image hotel" />
					<div className="location-contents">
						<h3>
							{props.name}
						</h3>
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

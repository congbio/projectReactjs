const Childroom = (props) => {
	return (
		<>
			<div key={props.key} className="col-lg-4">
				<div className="single-location mb-3">
					<img src={props.image} alt="image hotel" />
					<div className="location-contents">
						<h3>
							<a href={props.linkname}>{props.name} </a>
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
						<span>{props.area}</span> <br/>
						<span>{props.numberbed}</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default Childroom;

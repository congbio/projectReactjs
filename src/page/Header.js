import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
	render() {
		return (
			<>
				<header className="header_area">
					<div className="container">
						<nav className="navbar navbar-expand-lg navbar-light bg-light">
							<a className="navbar-brand logo_h" href="index.html">
								{" "}
								<Link to={"/"} className="nav-link" href="#">
									<img src="Logo.png" alt="" />
								</Link>
							</a>
							<div className="">
								<div className="" id="navbarSupportedContent">
									<ul className="nav navbar-nav menu_nav">
										<li className="nav-item active">
											<Link to={"/"} className="nav-link" href="#">
												HOME
											</Link>
										</li>
										<li className="nav-item">
											<Link to={"/About"} className="nav-link" href="#">
												ABOUT US
											</Link>
										</li>
										<li className="nav-item">
											<Link to={"/Contact"} className="nav-link" href="#">
												CONTACT
											</Link>
										</li>
										<li className="nav-item">
											<Link to={"/Booking"} className="nav-link" href="#">
												BOOKING
											</Link>
										</li>
										<li className="nav-item">
											<Link to={"/login"} className="nav-link" href="#">
												LOGIN
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</header>
			</>
		);
	}
}

export default Header;

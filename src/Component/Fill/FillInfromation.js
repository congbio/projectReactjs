const FillInfromation = () => {
    return (
			<div className="container bg-default">
				<div className="col-md-6 shadow p-5 m-5 m-auto mt-5 mb-5 bg-white rounded">
					<form>
						<div className="form-row">
							<h2 className="text-center">Điền thông tin</h2>
							<div className="form-group ">
								<label htmlFor="inputEmail4">Email</label>
								<input
									type="email"
									className="form-control p-2"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>
							<div className="form-group ">
								<label htmlFor="inputPassword4">Mật Khẩu</label>
								<input
									type="password"
									className="form-control p-2"
									id="inputPassword4"
									placeholder="Password"
								/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputAddress">Địa chỉ</label>
							<input
								type="text"
								className="form-control p-2 mb-2"
								id="inputAddress"
								placeholder="nhập địa chỉ "
							/>
						</div>

						<button type="submit" className="btn btn-primary">
							Sign in
						</button>
					</form>
				</div>
			</div>
		);
}
export default FillInfromation;
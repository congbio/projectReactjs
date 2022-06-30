const FillInfromation = () => {
	return (
		<div className="container  bg-default">
			<div className="row mt-5">
				<div className="col-md-6 shadow p-5   mt-5 mb-5 bg-white rounded">
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
							<div className="form-group ">
								<label htmlFor="phone">Phone</label>
								<input
									type="password"
									className="form-control p-2"
									id="phone"
									placeholder="Enter phone"
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
				<div className="col-md-6 shadow p-5     mt-5 mb-5 bg-white rounded">
					
						
						<div class="bg-light rounded d-flex flex-column">
							<div class="p-2 ml-3">
								<h4>Order Recap</h4>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">Contracted Price</div>
								<div class="ml-auto">$186.76</div>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">Amount toward deductible</div>
								<div class="ml-auto">$0.00</div>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">Coinsurance( 0% )</div>
								<div class="ml-auto">+ $0.00</div>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">Copayment</div>
								<div class="ml-auto">+ $40.00</div>
							</div>
							<div class="border-top px-4 mx-3"></div>
							<div class="p-2 d-flex pt-3">
								<div class="col-8">
									Total Deductible, Coinsurance, and Copay
								</div>
								<div class="ml-auto">$40.00</div>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">
									Maximum out-of-pocket on Insurance Policy (not reached)
								</div>
								<div class="ml-auto">$6500.00</div>
							</div>
							<div class="border-top px-4 mx-3"></div>
							<div class="p-2 d-flex pt-3">
								<div class="col-8">Insurance Responsibility</div>
								<div class="ml-auto">
									<b>$71.76</b>
								</div>
							</div>
							<div class="p-2 d-flex">
								<div class="col-8">
									Patient Balance{" "}
									<span class="fa fa-question-circle text-secondary"></span>
								</div>
								<div class="ml-auto">
									<b>$71.76</b>
								</div>
							</div>
							<div class="border-top px-4 mx-3"></div>
							<div class="p-2 d-flex pt-3">
								<div class="col-8">
									<b>Total</b>
								</div>
								<div class="ml-auto">
									<b class="green">$85.00</b>
								</div>
							</div>
						</div>
					
				</div>
			</div>
		</div>
	);
};
export default FillInfromation;

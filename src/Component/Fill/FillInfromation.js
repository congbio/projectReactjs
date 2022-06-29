const FillInfromation = () => {
    return (
        <div className="col-md-4 container bg-default">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <div className="input-group">
                        <input type="text" className="form-control" id="username" placeholder="Username" required />
                        <div className="invalid-feedback">
                            Your username is required.
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="adress">Address</label>
                    <input type="text" className="form-control" id="adress" placeholder="1234 Main Street" required />
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-5 form-group">
                        <label htmlFor="expiration">Expire Date</label>
                        <input type="text" className="form-control" id="card-name" placeholder required />
                        <div className="invalid-feedback">
                            Expiration date required
                        </div>
                    </div>
                    <div className="col-md-5 form-group">
                        <label htmlFor="ccv-no">Security Number</label>
                        <input type="text" className="form-control" id="sec-no" placeholder required />
                        <div className="invalid-feedback">
                            Security code required
                        </div>
                    </div>
                </div>
                <hr className="mb-4" />
                <button className="btn btn-primary bt-lg btn-block" type="submit">Continue to Checkout</button>
            </form>
        </div>
    )
}
export default FillInfromation;
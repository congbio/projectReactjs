import React, { Component } from 'react';
import {Link }from 'react-router-dom';
class Header extends Component {
    render() {
        return (
  <>
        <header className="header_area">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand logo_h" href="index.html"><img src="Logo.png" alt="" /></a>
            
            
            <div className="">
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
              </button>    
              <div className="" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav">
                <li className="nav-item active"><Link to={'/'} className="nav-link" href="#">HOME</Link></li> 
                <li className="nav-item"><Link to={'/About'} className="nav-link" href="#">ABOUT US</Link></li>
                <li className="nav-item"><Link to={'/Contact'} className="nav-link" href="#">CONTACT</Link></li>
                <li className="nav-item"><Link to={'/Booking'} className="nav-link" href="#">Booking</Link></li>
              </ul>  
              </div>            
            </div>               
          <div className="col-md-5 mx-auto">
            
            <div className="input-group">
              <input className="form-control border-end-0 border rounded-pill" type="search" defaultValue="search" id="example-search-input" />
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
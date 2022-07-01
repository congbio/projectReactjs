import React, { Component } from 'react';
import '../css/AboutUS.css'
class About extends Component {

    render() {
        return (
            <div className=''>
            <div className="aboutus">
              <h1>About Us Page</h1>
              <p>Some text about who we are and what we do.</p>
              <p>Resize the browusser window to see that this page is responsive by the way.</p>
            </div>
            <br>
            </br>
            <br>
            </br>
            <h2 style={{textAlign: 'center'}}>< strong>Our Team</ strong></h2>
            <div className="rowus container">
              <div className="column-us">
                <div className="card-us">
                  <img src="image/cong.jpg" alt="CÔNG" style={{width: '100%'}} id="anh"/>
                  <div className="us-container">
                    <h2>CÔNG</h2>
                    <p className="us-title">CEO &amp; Founder</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>jane@example.com</p>
                    <p><button className="us-button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column-us">
                <div className="card-us">
                  <img src="image/imaged.png" alt="ĐEN" style={{width: '100%'}} id="anh"/>
                  <div className="us-container">
                    <h2>ĐEN</h2>
                    <p className="us-title">Art Director</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>mike@example.com</p>
                    <p><button className="us-button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column-us">
                <div className="card-us">
                  <img src="image/imagev.png" alt="VƯ" style={{width: '100%'}}  id="anh"/>
                  <div className="us-container">
                    <h2>VƯ</h2>
                    <p className="us-title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button className="us-button">Contact</button></p>
                  </div>
                </div>
              </div>
              <div className="column-us">
                <div className="card-us">
                  <img src="image/imagep.png" alt="PHƯỢNG" style={{width: '100%'}}  id="anh"/>
                  <div className="us-container">
                    <h2>PHƯỢNG</h2>
                    <p className="us-title">Designer</p>
                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                    <p>john@example.com</p>
                    <p><button className="us-button">Contact</button></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default About;
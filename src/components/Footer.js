import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Clickonix: Online Electronics Shop</h4>
            <h1 className="list-unstyled">
              <li>+91 9112490909</li>
              <li>Airoli, Mumbai</li>
              
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Our Branches</h4>
            <ui className="list-unstyled">
              <li>Airoli</li>
              <li>BKC</li>
              <li>Kharghar</li>
              <li>Hadapsar</li>
              <li>Kolhapur</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Connect with Us</h4>
            <ui className="list-unstyled">
            <li>We are happy to serve you</li>
            <li>Connect us at</li>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-envelope"></i>
             
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} CLICKONIX | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
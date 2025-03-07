import React from 'react'
import './Footer.css'
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="footer" id="contact-us">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>
            Join us for a culinary journey with dishes made from the freshest ingredients and expert craftsmanship. Savor the flavors that make every meal special
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="fb" />
              <img src={assets.linkedin_icon} alt="ln" />
              <img src={assets.twitter_icon} alt="tw" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8949256585</li>
                <li>garvitagrawal2003@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
            &copy; 2024 Garvit
        </p>
      </div>
    </>
  )
}

export default Footer

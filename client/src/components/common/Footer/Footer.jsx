import { Col, Row } from "antd";
import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="fLists">
          <Row>
            <Col md={{ span: 8 }} xs={{ span: 24 }}>
              <img
                src="https://premiumlayers.com/html/hotelbooking/img/footer-logo-one.png"
                alt="Footer Logo"
                className="footer-logo"
              />
              <div className="first-part-of-footer">
                <p>
                  Welcome to Dream Booking, your ultimate destination for
                  finding the best hotel deals worldwide. Whether you're
                  planning a business trip or a family vacation, we offer a
                  seamless booking experience tailored to your needs.
                </p>
                <p>Ghaziabad, India</p>
                <div className="social-icons">
                  <FaFacebook />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>
            </Col>

            <Col md={{ span: 8 }} xs={{ span: 12 }}>
              <h4>QUICK LINKS</h4>
              <div className="list">
                <ul className="fList">
                  <li className="fListItem">Homes</li>
                  <li className="fListItem">Apartments</li>
                  <li className="fListItem">Resorts</li>
                  <li className="fListItem">Villas</li>
                </ul>
                <ul className="fList">
                  <li className="fListItem">Contact Us</li>
                  <li className="fListItem">About Us</li>
                  <li className="fListItem">Privacy Policy</li>
                  <li className="fListItem">Terms & Conditions</li>
                </ul>
              </div>
            </Col>

            <Col md={{ span: 8 }} xs={{ span: 24 }}>
              <h4>WE ARE GLOBAL</h4>
              <div className="global-image">
                <img
                  src="https://premiumlayers.com/html/hotelbooking/img/footer-map-two.jpg"
                  alt="Global Map"
                  className="global-map"
                />
              </div>
            </Col>
          </Row>
          <div className="fText">
            Copyright &copy; {new Date().getFullYear()} Dream Booking. All
            rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const Footer: React.FC = () => {
  return (
    <div>
      <div id="contact-section" className="container-fluid footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <h4 className="footer-heading text-white mb-4">About Us</h4>
                <p className="text-white">
                  At UGM building cleaning service, we provide high-quality
                  building cleaning services for both residential and commercial
                  properties. With years of experience, we specialize in regular
                  maintenance, deep cleaning, and eco-friendly solutions. Our
                  mission is to create clean, safe, and inviting environments
                  that exceed your expectations.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <h4 className="footer-heading text-white mb-4">Quick Links</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#about-section" className="footer-link">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#whyus-section" className="footer-link">
                      Why Us?
                    </a>
                  </li>
                  <li>
                    <a href="#reviews-section" className="footer-link">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a href="#services-section" className="footer-link">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="footer-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-item">
                <h4 className="footer-heading text-white mb-4">Services</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      Home Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Office Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Deep Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Move In Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Move Out Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Ac Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      Ac Repairing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-item">
                <h4 className="footer-heading text-white mb-4">Contact Info</h4>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      <i className="fa fa-building me-2"></i> UGM Building
                      Cleaning
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      <i className="fa fa-map-marker-alt me-2"></i>
                      Mazeyd Mall Tower 2, Floor No. 20, MBZ - Abu Dhabi
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@example.com" className="footer-link">
                      <i className="fas fa-envelope me-2"></i>
                      ugm.uniworth@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+01234567890" className="footer-link">
                      <i className="fas fa-phone me-2"></i> 0501818143
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white py-3 footer-bottom">
        <div className="container text-center">
          <p className="mb-0 footer-text">
            &copy; {new Date().getFullYear()} UGM Building Cleaning. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

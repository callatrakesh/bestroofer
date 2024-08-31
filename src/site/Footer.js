import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
            <footer className="footer-main">
                <div className="cta-sec">
                    <div className="container">
                        <div className="cta">
                            <p>Just want to talk to a real person? We're here to help!</p>
                            <Link to="tel:8001234567">Call: 800-123-4567</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-nav-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <h3 className="fn-h">About Shiptrack</h3>
                                <ul className="fn-link">
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/testimonial">Testimonial</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h3 className="fn-h">Our Services</h3>
                                <ul className="fn-link">
                                    <li><Link to="/services/1">Commercial Roofing</Link></li>
                                    <li><Link to="/services/2">Residential Roofing</Link></li>
                                    <li><Link to="/services/3">Roof Repair</Link></li>
                                    <li><Link to="/services/4">Metal Roofing</Link></li>
                                    <li><Link to="/services/5">Flat Roofing</Link></li>
                                    <li><Link to="/services/6">Siding</Link></li>
                                </ul>
                            </div>
                            <div className="col-3">
                                <h3 className="fn-h">Contact us</h3>
                                <div className="fn-address">721 Lowes Alley Worthington, OH 43085</div> 
                                <div className="fn-qc">
                                    <p>Phone</p>
                                    <Link to="tel:8001234567">800-123-4567</Link>
                                </div>
                                <div className="fn-qc">
                                    <p>Email Address</p>
                                    <Link to="mailto:contactus@toproofer.com">contactus@toproofer.com</Link>
                                </div>                              
                            </div>
                            <div className="col-3">
                                <h3 className="fn-h">Follow us</h3>
                                <div className="sm-link">
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                    <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    Copyright &copy; 2024 <strong>Shiptrack</strong>. All Rights Reserved
                </div>
            </footer>
        </>
    );
}

export default Footer;
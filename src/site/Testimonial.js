import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function Testimonial(){
    return(
        <>
            <InnerPageHeading title="Testimonials"/>
            <section className="testimonial-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <ul className="testimonial-list">
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Lewis K. Gamino</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Jason M. Harden</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Vicky R. McTaggart</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Lewis K. Gamino</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Jason M. Harden</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Vicky R. McTaggart</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Lewis K. Gamino</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Jason M. Harden</p>
                                </li>
                                <li>
                                    <p className="testimonial-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                    <p className="testimonal-by">Vicky R. McTaggart</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                           <div className="panel">
                                <div className="panel-h">
                                    <h3 className="panel-title">Add Testimonial</h3>
                                </div>
                                <div className="panel-b">
                                    <form>
                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <textarea className="form-control" rows={5}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Your Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Testimonail</button>
                                    </form>
                                </div>
                           </div>
                           <div className="panel">
                            <div className="panel-h">
                                <h3 className="panel-title">Our Services</h3>
                            </div>
                            <ul className="service-list">
                                <li>
                                    <Link to="/services/1">Residential Roofing</Link>
                                </li>
                                <li>
                                    <Link to="/services/2">Commercial Roofing</Link>
                                </li>
                                <li>
                                    <Link to="/services/3">Roof Repairs</Link>
                                </li>
                                <li>
                                    <Link to="/services/4">Metal Roofing</Link>
                                </li>
                                <li>
                                    <Link to="/services/5">Flat Roofing</Link>
                                </li>
                                <li>
                                    <Link to="/services/6">Siding</Link>
                                </li>
                            </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonial;
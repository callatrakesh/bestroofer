import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function ServiceList(){
    return(
        <>
            <InnerPageHeading title="Services"/>
            <section className="hs-sec">
                <div className="container">
                    <h2>our service</h2>
                    <div className="row">
                        <div className="col-4">
                            <Link to="/services/1" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_1.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Residential Roofing</div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/services/2" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_2.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Commercial Roofing</div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/services/3" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_3.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Roof Repairs</div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/services/4" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_4.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Metal Roofing</div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/services/5" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_5.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Flat Roofing</div>
                            </Link>
                        </div>
                        <div className="col-4">
                            <Link to="/services/6" className="service-item">
                                <div className="service-img">
                                    <img src="images/service_img_6.jpg" alt="" height={203} width={360}/>
                                </div>
                                <div className="service-title">Siding</div>
                            </Link>
                        </div>
                    </div>                   
                </div>
           </section>
        </>
    );
}

export default ServiceList;
import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function ServiceListSingle(){
    return(
        <>
            <InnerPageHeading title="Services"/>
            <section className="sd-sec">
                <div className="container">
                    <div className="row">
                       <div className="col-3">
                        <ul className="sl-nav">
                            <li><Link to="/services/1">Residential Roofing</Link></li>
                            <li><Link to="/services/2">Commercial Roofing</Link></li>
                            <li><Link to="/services/3">Roof Repairs</Link></li>
                            <li><Link to="/services/4">Metal Roofing</Link></li>
                            <li><Link to="/services/5">Flat Roofing</Link></li>
                            <li><Link to="/services/6">Siding</Link></li>
                        </ul>
                       </div>
                       <div className="col-9">
                        <div className="service-details">
                            <h2>Residential Roofing</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            <div className="sd-img">
                                <img className="img-fluid" src="images/service_big_1.jpg" alt="" height={353} width={847}/>
                            </div>
                            <h3>Sub Heading H3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <h4>Benefits of TopRoofer Sub Heading H4</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        </div>
                       </div>
                    </div>
                </div>
           </section>
        </>
    );
}

export default ServiceListSingle;
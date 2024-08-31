import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function ProjectList(){
    return(
        <>
            <InnerPageHeading title="Projects"/>
            <section className="rp-sec">
                <div className="container">
                    <h2>Roofing Projects</h2>                
                    <div className="row">
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_1.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_2.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_3.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_4.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_5.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_6.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_7.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_8.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="rp-item">
                                <div className="rp-img">
                                    <img src="images/project_img_9.jpg" alt="" height={286} width={360}/>
                                </div>
                                <div className="rp-txt">
                                    <Link to="/projects/1" className="rp-title">Project Name Title Here</Link>
                                    <p className="rp-location">Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </>
    );
}

export default ProjectList;
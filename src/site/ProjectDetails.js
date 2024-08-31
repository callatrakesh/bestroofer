import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function ProjectDetails(){
    return(
        <>
            <InnerPageHeading title="Projects"/>
            <section className="pd-sec">
                <div className="container">
                    <div className="project-details">
                        <div className="lead">Etiam sit amet interdum nunc. Vivamus a nunc in velit egestas ultrices vel ut tortor. Morbi dignissim tellus ut urna tempor, eget varius mauris efficitur. Ut faucibus ipsum quis nisl elementum, nec euismod massa mattis. Nulla in nunc sed enim fermentum iaculis quis sit amet neque.</div>
                        <div className="pd-location">Area : <span>Ahmedabad</span></div>
                        <div className="projecct-gallery">
                            <div className="row">
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_1.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_2.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_3.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_4.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_5.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="project-img">
                                        <img src="../images/project_gallery_img_6.jpg" alt="" height={285} width={360}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>Donec pulvinar diam vitaea consectetur suscipit. Morbi ut libero vitae sapien tempus vestibulum. Sed cursus susci pit arcu. Nunc in sem pretium, dielit eu egestas ultricies simpley dummy conent.</p>
                        <h3>We base our work based on the following principles:</h3>
                        <ul>
                            <li>Mauris et erat egestas ante eleifend vehicula quis nec nisl.</li>
                            <li>Duis consectetur nisi vel mattis ornare.</li>
                            <li>Nam vel lorem tempus, facilisis arcu eu, consequat odio.</li>
                            <li>Etiam tristique sem et ante cursus, id vestibulum arcu euismod.</li>
                        </ul>
                        <Link to="" className="btn-link">Get instant roofing estimate</Link>
                    </div>         
                </div>
           </section>
        </>
    );
}

export default ProjectDetails;
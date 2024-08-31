import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";
import HomeWhyChooseUse from "./HomeWhyChooseUs";
import MissionAndVission from "./MissionAndVission";

function AboutUs(){
    return(
        <>
           <InnerPageHeading title="About Us"/>
           <section className="home-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Top Roofing Company City</h1>
                            <p className="intro-lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <p className="intro-txt">ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, It has survived not only five centuries, but also the leap into electronic.</p>
                            <Link to="/contact">Reach Out Us</Link>
                        </div>
                        <div className="col-6">
                            <img src="images/about_img_1.jpg" alt="" height={382} width={555}/>
                        </div>
                    </div>
                </div>
           </section>
           <HomeWhyChooseUse/>
           <MissionAndVission/>
        </>
    );
}

export default AboutUs;
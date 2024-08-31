import { Link } from "react-router-dom";
function HomeIntro(){
    return(
        <>
            <section className="home-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>APN Shiptrack International Exim LLP</h1>
                            <p className="intro-lead">APN Shiptrack International Exim LLP focuses on logistics, trading, and sourcing. We take pride in providing effective solutions that help businesses succeed. We offer a wide range of services tailored to meet the specific needs of each client.</p>
                            <p className="intro-txt">Count on us to manage the intricacies of logistics and commerce, helping you remain competitive in today's rapidly evolving market. Partner with us as your strategic ally to drive success and reach your business objectives.</p>
                            <Link to="/whyus">Why Choose Us</Link>
                        </div>
                        <div className="col-6">
                            <img src="images/about_img_1.jpg" alt="" height={382} width={555}/>
                        </div>
                    </div>
                </div>
           </section>
        </>
    )
}

export default HomeIntro;
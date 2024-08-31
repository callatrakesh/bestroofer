import { Link } from "react-router-dom";
function HomeTestimonials(){
    return(
        <>
            <section className="ht-sec">
                <div className="container">
                    <h2>What Our Customers Are Saying</h2>
                    <div className="row">
                        <div className="col-4">
                            <div className="ht-item">
                                <p className="ht-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                <p className="ht-by">Lewis K. Gamino</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ht-item">
                                <p className="ht-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                <p className="ht-by">Jason M. Harden</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ht-item">
                                <p className="ht-msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a.</p>
                                <p className="ht-by">Vicky R. McTaggart</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/testimonial" className="link-btn">View all Testimonails</Link>
                    </div>
                </div>
           </section>
        </>
    );

}

export default HomeTestimonials;
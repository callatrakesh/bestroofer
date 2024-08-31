import InnerPageHeading from "./InnerPageHeading";

function ContactUs(){
    return(
        <>
            <InnerPageHeading title="Contact Us"/>
            <section className="contact-sec">
                <div className="container">
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">Phone</label>
                                    <input type="tel" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">Street Address</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label className="form-label">Select Service</label>
                                    <select className="form-control">
                                        <option value="">Select Services</option>
                                        <option value="Roofing">Roofing</option>
                                        <option value="Metal Roofing">Metal Roofing</option>
                                        <option value="Siding">Siding</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Now</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
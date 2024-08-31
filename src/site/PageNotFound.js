import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";

function PageNotFound(){
    return(
        <>
            <InnerPageHeading title="Page Not Found"/>
            <section className="pnf-sec">
                <div className="container">
                    <div className="pnf">
                        <div className="pnf-lt">404</div>
                        <h2>Page Not Found</h2>
                        <p>The Page you were looking for could not be found.</p>
                        <Link className="btn-link" to="/">Go To Homepage</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageNotFound;
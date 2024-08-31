import { Link } from "react-router-dom";

function InnerPageHeading(props){
    return(
        <>
            <section className="page-header">
                <div className="container">
                    <div className="pahe-header-inner">
                        <h1>{props.title}</h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>{props.title}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InnerPageHeading;
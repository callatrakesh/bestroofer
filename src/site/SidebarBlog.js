import { Link } from "react-router-dom";

function SidebarBlog(){
    return(
        <>
            <div className="sidebar-item">
                <form>
                    <div className="blog-search">
                        <input type="text" className="bs-input" placeholder="Find from blogs"/>
                        <button type="submit" className="btn-bs"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="sidebar-item">
                <h3>Categories</h3>
                <ul className="category-list">
                    <li><Link to="">Residential Roofing <span>(10)</span></Link></li>
                    <li><Link to="">Commercial Roofing <span>(21)</span></Link></li>
                    <li><Link to="">Roof Repair <span>(15)</span></Link></li>
                    <li><Link to="">Metal Repair <span>(16)</span></Link></li>
                    <li><Link to="">Flat Repair <span>(18)</span></Link></li>
                    <li><Link to="">Siding <span>(05)</span></Link></li>
                </ul>
            </div>
            <div className="sidebar-item">
                <h3>Recent Post</h3>
                <ul className="rp-list">
                    <li>
                        <Link to="">Roof - why this is so important during the Winter period</Link>
                        <p>Posted on 26th May, 2020</p>
                    </li>
                    <li>
                        <Link to="">What is the best material for my new roof? Any Suggestion</Link>
                        <p>Posted on 25th May, 2020</p>
                    </li>
                    <li>
                        <Link to="">Spring Season - It's Time Your Roof Clean</Link>
                        <p>Posted on 24th May, 2020</p>
                    </li>
                </ul>
            </div>
            <div className="sidebar-item">
                <h3>Tags</h3>
                <div className="tags-list">
                    <Link to="">Roofing</Link> 
                    <Link to="">website</Link> 
                    <Link to="">commercial metal roof </Link>
                    <Link to="">responsive Template </Link>
                    <Link to="">siding roof</Link>
                </div>
            </div>
        </>
    );
}

export default SidebarBlog;
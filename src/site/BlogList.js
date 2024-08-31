import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";
import SidebarBlog from "./SidebarBlog";
function BlogList(){
    return(
        <>
            <InnerPageHeading title="Blogs"/>
            <section className="blog-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="blog-list">
                                <div className="blog-item">
                                    <div className="post-img">
                                        <img className="img-fluid" src="./images/post_img_1.jpg" alt="" height={405} width={750}/>
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>Posted on <span>26th May, 2020</span></li>
                                            <li>From <Link to="/">Post Category</Link></li>
                                        </ul>
                                        <h3 className="post-title"><Link to="/blog/1">Roof - why this is so important during the Winter period</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                        <Link to="/blog/1" className="read-more-link">Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="post-img">
                                        <img className="img-fluid" src="./images/post_img_2.jpg" alt="" height={405} width={750}/>
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>Posted on <span>26th May, 2020</span></li>
                                            <li>From <Link to="/">Post Category</Link></li>
                                        </ul>
                                        <h3 className="post-title"><Link to="/blog/1">Roof - why this is so important during the Winter period </Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                        <Link to="/blog/1" className="read-more-link">Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="post-img">
                                        <img className="img-fluid" src="./images/post_img_3.jpg" alt="" height={405} width={750}/>
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>Posted on <span>26th May, 2020</span></li>
                                            <li>From <Link to="/">Post Category</Link></li>
                                        </ul>
                                        <h3 className="post-title"><Link to="/blog/1">Roof - why this is so important during the Winter period</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                        <Link to="/blog/1" className="read-more-link">Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="post-img">
                                        <img className="img-fluid" src="./images/post_img_4.jpg" alt="" height={405} width={750}/>
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>Posted on <span>26th May, 2020</span></li>
                                            <li>From <Link to="/">Post Category</Link></li>
                                        </ul>
                                        <h3 className="post-title"><Link to="/blog/1">Roof - why this is so important during the Winter period</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                        <Link to="/blog/1" className="read-more-link">Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                                <div className="blog-item">
                                    <div className="post-img">
                                        <img className="img-fluid" src="./images/post_img_1.jpg" alt="" height={405} width={750}/>
                                    </div>
                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li>Posted on <span>26th May, 2020</span></li>
                                            <li>From <Link to="/">Post Category</Link></li>
                                        </ul>
                                        <h3 className="post-title"><Link to="/blog/1">Roof - why this is so important during the Winter period</Link></h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                        <Link to="/blog/1" className="read-more-link">Read More <i className="fa fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <ul className="blog-paging">
                                <li><Link to="">Previous</Link> </li>
                                <li><Link to="" className="active">1</Link> </li>
                                <li><Link to="">2</Link> </li>
                                <li><Link to="">3</Link> </li>
                                <li><Link to="">4</Link> </li>
                                <li><Link to="">5</Link> </li>
                                <li><Link to="">Next</Link> </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <SidebarBlog/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogList;
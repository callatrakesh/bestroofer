import { Link } from "react-router-dom";
import InnerPageHeading from "./InnerPageHeading";
import SidebarBlog from "./SidebarBlog";

function BlogDetils(){
    return(
        <>
            <InnerPageHeading title="Blogs"/>
            <section className="blog-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="blogpost-block">
                                <div className="post-img">
                                    <img className="img-fluid" src="../images/post_img_1.jpg" alt="" height={405} width={750}/>
                                </div>
                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li>Posted on <span>26th May, 2020</span></li>
                                        <li>From <Link to="/">Post Category</Link></li>
                                    </ul>
                                    <h2 className="post-title">Roof - why this is so important during the Winter period</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
                                    
                                </div>
                            </div>
                            <div className="comment-area">
                                <h3 className="comment-list-title">Comments (03)</h3>
                                <ul className="comment-list">
                                    <li>
                                        <div className="comment-author">
                                            <img src="../images/user_img_1.jpg" alt="" height={70} width={70}/>
                                        </div>
                                        <div className="comment-info">
                                            <h5 className="comment-title">Karen Brady</h5>
                                            <div className="comment-content">
                                                <p>Donec tortor enim, dapibus a fermeec semurabitur loret .</p>
                                            </div>
                                            <button type="button" className="btn-default-link">Reply</button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="leave-comments">
                                <h3 className="leave-comments-title">Leave a comments</h3>
                                <form>
                                <div className="form-group">
                                    <label className="form-label">Messages <span class="require">*</span></label>
                                    <textarea className="form-control" rows="5" placeholder="Comments"></textarea>
                                </div>
                                    <div className="form-row">                                       
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label className="form-label">Name <span class="require">*</span></label>
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label className="form-label">Email <span class="require">*</span></label>
                                                <input type="email" className="form-control" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label className="form-label">Website <span class="require">*</span></label>
                                                <input type="text" className="form-control" placeholder="Website" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Submit</button>
                                </form>
                            </div>
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

export default BlogDetils;
import React, {Component} from 'react';
import "./Single.scss";
import Data from "./dataSingle.json";

class Single extends Component {
    render(){
        return(
            <section id="singlePost">
              <div className="container">

               <form className="d-flex">
                   <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-search" type="submit"><i className="fa fa-search"></i></button>
               </form>
               <hr className="hr"/>
               <video src="/videos/wheat-field.mp4" controls autoPlay></video>
               <div className="row">
                   <div className="col-md-8">
                       <div className="post">
                           <h2>Single Post of Xtra Blog HTML Template</h2>
                           <p>June 16, 2045 posted by Admin Nat</p>
                           <p className="lead">This is a description of the video post. You can also have an image instead of the video. You can free download Xtra Blog Template from TemplateMo website. Phasellus maximus quis est sit amet maximus. Vestibulum vel rutrum lorem, ac sodales augue. Aliquam erat volutpat. Duis lectus orci, blandit in arcu est, elementum tincidunt lectus. Praesent vel justo tempor, varius lacus a, pharetra lacus.

Duis pretium efficitur nunc. Mauris vehicula nibh nisi. Curabitur gravida neque dignissim, aliquet nulla sed, condimentum nulla. Pellentesque id venenatis quam, id cursus velit. Fusce semper tortor ac metus iaculis varius. Praesent aliquam ex vel lectus ornare tristique. Nunc et eros quis enim feugiat tincidunt et vitae dui.                      </p>
                          <span>Creative . Design . Business</span>
                          <div className="clearfix"></div>
                          <div className="post-comments">
                                <h2>Comments</h2>
                                <div className="comment-box d-flex">
                                    <figure>
                                        <img src="/images/comment-1.jpg" alt="comment-1"/>
                                        <fiqcaption>mark mony</fiqcaption>
                                    </figure>
                                    <div className="comment-content">
                                        <p>Praesent aliquam ex vel lectus ornare tritique. Nunc et eros quis enim feugiat tincidunt et vitae dui. Nullam consectetur justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus sapien vel, euismod turpis.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span>REPLY</span>
                                            <span>June 14, 2045</span>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="comment-box d-flex">
                                        <img src="/images/comment-2.jpg" alt="comment-2"/>
                                        <span>Jewel Soft</span>
                                    <div className="comment-content">
                                        <p>Nunc et eros quis enim feugiat tincidunt et vitae dui. Nullam consectetur justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus sapien vel, euismod turpis.
                                        </p>
                                        <div className="d-flex justify-content-between">
                                            <span>REPLY</span>
                                            <span>June 14, 2045</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form">
                                    <h2>Your comment</h2>
                                    <form>
                                        <input type="text" className="form-control"/>
                                        <input type="text" className="form-control"/>
                                        <textarea className="form-control"></textarea>
                                        <input type="submit" value="Send" className="btn btn-submit"/>
                                    </form>
                                </div>
                          </div>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className="sidebar">
                           <div className="sidebar-box">
                            <h2>Categories</h2>
                            <div className="card">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">HTML 5</li>
                                <li className="list-group-item">CSS 3</li>
                                <li className="list-group-item">JS</li>
                                <li className="list-group-item">BOOTSTRAP</li>
                                <li className="list-group-item">REACT</li>
                            </ul>
                           </div>
                            </div>
                            <div className="sidebar-box">
                            <h2>Related Posts</h2>
                            {Data.map( (e) => {
                            return(
                            <div className="card post-thumb">
                                <img src={e.postRelated.postImg} className="card-img-top" alt="img"/>
                                <div className="card-body">
                                <p className="card-text"> {e.postRelated.postTitle} </p>
                                </div>
                            </div>
                            );
                            } )
                            }
                            </div>
                       </div>
                   </div>
               </div>
               <hr/>
               <footer>
                    <span>Design: Abdalla Mohamad</span>
                    <span>Copyright 2021 Xtra Blog Company Co. Ltd.</span>
               </footer>
              </div>
            </section>
        );
    }
}

export default Single;
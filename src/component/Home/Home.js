import React, {Component} from 'react';
import "./Home.scss";
import Data from "./dataHome.json";

class Home extends Component {
    render(){      
        return(
            <section id="Home">
               <form className="d-flex">
                   <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-search" type="submit"><i className="fa fa-search"></i></button>
               </form>
               <div className="row">
                    {
                        Data.map( (item) => {
                            return(
                              <>
                                <div className="col-md-6">
                                    <hr className="hr"/>
                                    <div className="post card">
                                    <span id="New"> {item.postNew} </span>
                                    <img src={item.postImg} className="card-img-top" alt="img" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.postTitle}</h5>
                                            <p className="card-text">{item.postInfo}</p>
                                            <div className="postinfo">
                                                <span> {item.postTag} </span>
                                                <span> {item.postDate} </span>
                                            </div>
                                            <hr/>
                                            <div className="postinfo">
                                                <span> {item.postComment} </span>
                                                <span> {item.postAuthor} </span>
                                            </div>
                                        </div>
                                    </div>                           
                                </div>
                              </>
                            )
                        })
                    }
                    <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-link" href="/" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link active" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="/">Next</a>
                        </li>
                    </ul>
                    </nav>
               </div>
               <hr/>
               <footer>
                    <span>Design: Abdalla Mohamad</span>
                    <span>Copyright 2021 Xtra Blog Company Co. Ltd.</span>
               </footer>           
            </section>
        );
    }
}

export default Home;
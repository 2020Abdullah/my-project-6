import React, {Component} from "react";
import "./Contact.scss";

class Contact extends Component {   
    render(){
        return(
            <section id="Contact-us">
                <form className="d-flex">
                   <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-search" type="submit"><i className="fa fa-search"></i></button>
               </form>
               <hr className="hr"/>
                <div className="row">
                <div className="col-md-8">
                    <div className="form-group mb-2">
                            <label className="col-form-label">Name</label>
                            <input type="text" className="form-control mr-0 ml-auto" />
                    </div>
                    <div className="form-group mb-2">
                            <label className="col-form-label">Email</label>
                            <input type="text" className="form-control mr-0 ml-auto" />
                    </div>
                    <div className="form-group mb-2">
                             <label className="col-form-label">Subject</label>
                             <input type="text" className="form-control mr-0 ml-auto" />
                    </div>
                    <div className="form-group">
                            <label className="col-form-label">Message</label>
                            <textarea className="form-control"></textarea>
                    </div>
                    <div className="form-group text-end mt-3">
                    <div className="col-md-12">
                          <input type="submit" className="btn btn-submit mb-4" value="Send"/>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>120 Lorem ipsum dolor sit amet, consectetur adipiscing 10550</p>
                    <p>Tel:060-070-0980 <br/> Email: info@company.com</p>
                    <p>Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac turpis eleifend, commodo purus eget, commodo mauris.</p>
                    <ul className="nav justify-content-between mt-5">
                        <li className="nav-item"><a className="nav-link" href="facebook"><i className="fab fa-facebook"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="twitter"><i className="fab fa-twitter"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="youtube"><i className="fab fa-youtube"></i></a></li>
                        <li className="nav-item"><a className="nav-link" href="youtube"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
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

export default Contact;
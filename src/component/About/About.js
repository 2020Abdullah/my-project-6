import React, {Component} from "react";
import "./About.scss";
import Data from "./Team.json";

class About extends Component {
    render(){
        return(
            <section id="page-team">
                <div className="container">
                <form className="d-flex">
                   <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-search" type="submit"><i className="fa fa-search"></i></button>
               </form>
               <hr className="hr"/>
               <div className="page-team-About">
                   <img className="img-fluid" src="/images/about-01.jpg" alt="img"/>
                   <h2>About this xtra blog</h2>
                   <p>You can immediately download Xtra Blog Template from TemplateMo website for 100% free of charge. Etiam vehicula, tortor ac eleifend tincidunt, diam neque pellentesque ipsum, a geugiat eros mauris eget lorem. Quisque in bibendum elit, in egestas turpis. Vestibulum ornare sollicitudin congue. Aliquam lorem mi, maximus at iaculis ut, viverra vel mauris. Duis congue luctus metus, sodales tincidunt lectus fringilla ut. Nunc tempus at magna sed vestibulum. 

                    Proin et arcu ligula. Praesent quis erat eu est solliditudin tristique ut in arcu. Donec bibendum ex id ligula semper dictum. Proin malesuada luctus auctor. Suspendisse ullamcorper, mi vel molestie ornare, arcu magna euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia magna sed sapien auctor, vitae luctus nunc cursus.
                    </p>
                    <div className="page-team-work">
                        <div className="team-work-box">
                            <i className="fas fa-bezier-curve fa-4x"></i>
                            <h2>Background</h2>
                            <p>Phasellus pulvinar nisl ornare leo porttitor, et vestibulum lorem semper. Duis risus ex, molestie sit amet magna in, pharetra pellentesque est. Curabitur elit metus.</p>
                        </div>
                        <div className="team-work-box">
                        <i className="fas fa-users-cog fa-4x tm-color-primary"></i>                                 
                        <h2>Teamwork</h2>
                            <p>Suspendisse ullamcorper, mi vel molestie ornare, arcu magna euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia magna sed auctor, vitae nunc cursus.</p>
                        </div>
                        <div className="team-work-box">
                        <i className="fab fa-creative-commons-sampling fa-4x tm-color-primary"></i>
                            <h2>Our Core Value</h2>
                            <p>Nunc mi ante, suscipit vel dapibus et, volutpat sit amet ante. In tempor nec sem vitae varius. Aliquam tincidunt orci sem, et imperdiet massa consectetur nec.</p>
                        </div>
                    </div>                  
               </div>
               <hr className="hr"/>
                <div className="row">
                    { Data.map( (e) => {
                        return(
                            <div className="col-md-6">
                                <div className="myteam d-flex">
                                    <img src={e.myteam.image} className="img-fluid img-thumbnail" alt="img"/>
                                    <div className="box">
                                        <h2> {e.myteam.name} </h2>
                                        <span> {e.myteam.jop} </span>
                                        <p> {e.myteam.info} </p>
                                    </div>
                                </div>
                            </div>
                        );
                    } )
                               
                    }
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

export default About;
import React, {Component} from 'react';
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Single from "./component/SingleHome/Single";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { Routes , Route } from 'react-router-dom';

class App extends Component {
    render(){
        const mystyle = {
            fontFamily: "Roboto, Arial, sans-serif"
        }
        return(
                <div className="App" style= {mystyle}>
                    <Header />
                    <div className="container-fluid">
                    <Routes>
                       <Route excat path="/" element={<Home/>}></Route>
                       <Route excat path="/Single_post" element={<Single/>}></Route>
                       <Route excat path="/About" element={<About/>}></Route>
                       <Route excat path="/Contact" element={<Contact/>}></Route>
                    </Routes>
                    </div>
                </div>
            );
    }
}

export default App;
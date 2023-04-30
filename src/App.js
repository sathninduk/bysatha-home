import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Open from "./components/Open";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./components/layouts/NotFound";

// import Footer from "./components/layouts/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop: "57px"}}>
                    <Switch>
                        <Route exact path={["/"]} component={Home}/>
                        <Route exact path={["/terms"]} component={Terms}/>
                        <Route exact path={["/privacy"]} component={Privacy}/>
                        <Route exact path={["/open"]} component={Open}/>
                        <Route exact path={["/open/sliit/y1/s2"]} component={Open}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";

import Landing from './components/Landing';
import About from "./components/About";
import Guide from './components/Guide';
import Account from './components/Account';

import Pay from './components/Pay'
import Footer from './components/layouts/Footer';
import NotFound from "./components/layouts/NotFound";
import Send from "./components/Send";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Server from "./components/Server";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Server/>
                <Switch>
                    <Route exact path={"/"} component={Landing}/>
                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/guide"} component={Guide}/>
                    <Route exact path={"/account"} component={Account}/>
                    <Route exact path={"/pay/:id"} component={Pay}/>
                    <Route exact path={"/send/:id"} component={Send}/>
                    <Route exact path={"/privacy"} component={Privacy}/>
                    <Route exact path={"/terms"} component={Terms}/>

                    <Route exact component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;

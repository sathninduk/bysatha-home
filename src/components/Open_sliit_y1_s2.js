import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Home extends Component {
    render() {
        window.location.href = "https://github.com/sathninduk/open/tree/main/SLIIT/Year%201/Sem%202";
        return (
            <>
                <div className="container">
                    <div className={"not-found con-mid"}>

                        <div className={"not-found-head"}>
                            <h1 className={"panipuri"}><span style={{color: "#000"}}>open by satha is</span></h1>
                            <h1>&nbsp;</h1>
                            <h1 className={"panipuri"}>loading...</h1>
                        </div>

                        <div>
                            <h1 className={"panipuri"}>
                                <Link to={"/"}><span style={{color: "#000"}}>Back to </span><span
                                    style={{fontSize: "1.5rem"}}>satha<span
                                    style={{color: "#000"}}>.</span></span></Link>
                            </h1>
                        </div>


                    </div>
                </div>
            </>
        );
    }
}

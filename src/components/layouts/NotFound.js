import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className={"not-found con-mid"}>

                        <div className={"not-found-head"}>
                            <img src={"/img/404/ufo.png"} className={"not-found-img"} alt={"not-found image"}/>
                            <h1 className={"panipuri"}><span style={{color: "#000"}}>error</span></h1>
                            <h1>&nbsp;</h1>
                            <h1 className={"panipuri"}>404</h1>
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
            </div>
        );
    }
}

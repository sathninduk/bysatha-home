import React, {Component} from "react";
import Helmet from "react-helmet";
import Navbar from "./layouts/Navbar";

export default class Account extends Component {
    render() {
        return (
            <div className={"con-mid"}>
                <Navbar/>
                <div style={{padding: "20px", minHeight: "calc(100vh - 156px)"}}>
                    <Helmet>
                        <title>Account</title>
                        <script type="text/javascript"
                                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                                async></script>
                    </Helmet>
                    <div className={"big-card"}>
                        <h5>Hey explorer!</h5>
                        <p>Amazing features are on the way.</p>
                    </div>
                </div>
            </div>
        );
    }
}

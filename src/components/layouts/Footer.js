import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className={"footer con-mid"}>
                <div className={"row footer-row"}>
                    <div className={"col"}>
                        {/* TrustBox widget - Micro Review Count */}
                        <div className="trustpilot-widget" data-locale="en-US"
                             data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="62e5e695b7bf78be9d3cd158"
                             data-style-height="24px" data-style-width="100%" data-theme="dark"
                             data-min-review-count={10} data-without-reviews-preferred-string-id={1}>
                            <a href="https://www.trustpilot.com/review/bysatha.com" target="_blank"
                               rel="noopener">Trustpilot</a>
                        </div>
                        {/* End TrustBox widget */}
                    </div>
                    <div className={"col con-mid"}>
                        <p className={"footer-links"}>
                            <Link to={"/privacy"}>Privacy Policy</Link>
                            <span>&emsp;•&emsp;</span>
                            <Link to={"/terms"}>Terms & Conditions</Link>
                        </p>
                    </div>
                    <div className={"col con-mid"}>
                        <p>©{new Date().getFullYear()} EthPay - a <a href="https://bysatha.com" target={"_blank"}
                                                                     rel="noopener noreferrer" className={"link"}>Sathnindu
                            Kottage</a> production</p>
                    </div>
                </div>
            </div>
        );
    }
}

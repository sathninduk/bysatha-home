import React, {Component} from "react";
import Helmet from "react-helmet";
import Navbar from "./layouts/Navbar";

export default class About extends Component {
    render() {
        return (
            <div className={"con-mid"}>
                <Navbar/>
                <div style={{padding: "20px", minHeight: "calc(100vh - 156px)"}}>
                    <Helmet>
                        <title>About</title>
                        <script type="text/javascript"
                                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                                async></script>
                    </Helmet>
                    <div className={"big-card"}>
                        <h1>EthPay - Beta 1.0.0</h1>
                        <p>
                            EthPay is an anonymous and decentralised ERC-20 payment gateway. It is the first project of
                            the
                            Project EvilCodes - Reloaded 2022 by <a className="link" target="_blank"
                                                                    href="https://bysatha.com"
                                                                    rel="noopener noreferrer">Sathnindu
                            Kottage</a>.
                        </p>
                        <h1>Decentralised</h1>
                        <p>
                            EthPay is not like a traditional payment gateway. It does not use any third-party wallets to
                            collect and withdraw funds. EthPay transfers the transaction directly from your client's
                            wallet to the merchant wallet in real-time.
                        </p>
                        <h1>Anonymity</h1>
                        <p>
                            The data we store are public keys and other public information such as txHashes and block
                            numbers to process your transactions. We do not
                            collect any other personal information, such as your IP addresses, Names, Emails, Passwords
                            &
                            etc., directly. That is our commitment to privacy and anonymity.
                        </p>

                        <div className={"about-logos-container con-mid"}>
                            <div className={"row about-logos"}>
                                <div className={"col con-mid"}>
                                    <img src={"/img/bysatha-logo.png"} className={"about-logo-1"} alt={"logo"}/>
                                </div>
                                <div className={"col con-mid"}>
                                    <img src={"/img/evilcodes-logo-white.png"} className={"about-logo-2"} alt={"logo"}/>
                                </div>
                                <div className={"col con-mid"}>
                                    <img src={"/img/logo-white.png"} className={"about-logo-3"} alt={"logo"}/>
                                </div>
                            </div>
                            <div className={"row con-mid"}>
                                <p className={"about-legal-notice"}>Ownership, development credit and full copyright of
                                    the
                                    EthPay technology are reserved for<br/><a className={"link"} target="_blank"
                                                                                  href={"https://bysatha.com"}
                                                                                  rel="noopener noreferrer">Nilvin
                                        Sathnindu
                                        Kottage</a> (Sri Lanka)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

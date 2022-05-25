import React, {Component} from "react";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className={"hero"}>
                    <div className="row pc-hero-header">
                        <div className={"col-4"}>
                            <img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>
                        </div>
                        <div className={"col-8"}>
                            <h1 className={"hero-title"}>
                                the first ever <span style={{color: "#737dff"}}>database and language</span> exempt
                                post-apply CMS
                            </h1>
                        </div>
                    </div>

                    <div className="row mob-hero-header">
                        <div className={"col-lg"}>
                            <img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>
                        </div>
                        <div className={"col-lg"}>
                            <h1 className={"hero-title"}>
                                the first ever <span style={{color: "#737dff"}}>database and language</span> exempt
                                post-apply CMS
                            </h1>
                        </div>
                    </div>

                    <div className={"row edition-list"}>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS</p>
                            <p className={"edition-desc"}>Open-Source Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS PRO</p>
                            <p className={"edition-desc"}>Centralized Premium Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS NIGHTLY</p>
                            <p className={"edition-desc"}>Web 3.0 Edition</p>
                            <p className={"edition-availability-badge edition-availability-badge-green"}>
                                V 1.0.0 BETA
                            </p>
                        </div>
                        <div className={"col con-mid"}>
                            <p className={"edition-name"}>DPACKS CORE</p>
                            <p className={"edition-desc"}>The core technology</p>
                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                Coming Soon
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer 1 */}
                {/* Section 7 */}
                <div className={"footer"}>
                    <div className={"container additional-page-sec-1"}>
                        <div className={"footer-about-body"}>

                            <h3><span style={{color: "#737dff"}}>Dpacks</span></h3>
                            <p>
                                There are bunch of CMS in the world. But all of them creating your website. They
                                don't
                                only
                                managing
                                your contents. Finally, You have created a website on its own, not your own. Dpacks
                                gives
                                your power back. No more CMS depended websites. You create
                                your
                                website, your own. Dpacks will take the rest of content management.
                            </p>
                            <p>
                                Dpacks is the the world's first language independent, flexible, and effortless
                                headless
                                public
                                CMS. Also
                                the only CMS that you can easily apply after the full web development.
                            </p>
                            <h5><span style={{color: "#737dff"}}>The  Technology</span></h5>
                            <p>
                                Dpacks is a technology that allows you to manage web variable DATA lightning-fast.
                                And Nightly is its web 3.0 edition. Dpacks Nightly stores all your data packets in
                                the decentralised internet. This allows you to make all your all web content
                                decentralised.
                            </p>
                            <p>
                                Dpacks scans and identifies every variable data in a webpage and package them into
                                data packets. this allows to manage them anytime via the dpacks admin console
                            </p>
                            <h5><span style={{color: "#737dff"}}>Dpacks </span>+</h5>
                            <p>Dpacks packaging all the public web content according to the your favor. It means all
                                the
                                variable web content stores in either decentralised or centralised cloud. That
                                allows
                                search
                                engines to easily crawl changes of your website and index your data lighting fast.
                                This
                                concept
                                would accelerate the speed of the whole cyberspace</p>
                        </div>
                    </div>
                    <div className={"footer-section"}>
                        <div className={"container"}>
                            {/*<h1>Footer</h1>*/}
                            <div className={"row"}>
                                <div className={"col"}>
                                    <img src={"/img/footer-logo.png"} className={"footer-logo-1"}
                                         alt={"Dpacks logo"}/>
                                    <span className={"by-satha-vr"}>|</span><span className={"by-satha"}>BY <a
                                    href={"#"}>SATHA</a></span>
                                </div>
                                <div className={"col"}>
                                    <a className={"footer-page-link"} href={"#"}>Privacy Policy</a>
                                    <span className={"privacy-divider"}>•</span>
                                    <a className={"footer-page-link"} href={"#"}>Terms & Conditions</a>
                                </div>
                                <div className={"col"}>
                                    <p className={"copyright-text"}>©{new Date().getFullYear()} DPACKS
                                        TECHNOLOGY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer 2 */}

            </div>
        );
    }
}

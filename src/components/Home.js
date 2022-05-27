import React, {Component} from "react";

export default class Home extends Component {
    render() {
        return (
            <div>
                {/*<div className={"home-hero-bg-div"}>*/}
                {/*<div className={"home-hero-bg home-hero-bg-1"}></div>*/}
                {/*<div className={"home-hero-bg home-hero-bg-2"}></div>*/}
                {/*<div className={"home-hero-bg home-hero-bg-3"}></div>*/}
                {/*</div>*/}
                <div className={"main-section con-mid"}>
                    <div className="container">
                        <div className={"hero"}>
                            {/*<img alt={"satha"} className={"main-image"} src={"/img/satha-main.jpg"}/>*/}
                            <div className="row pc-hero-header">
                                <div className={"col con-left-mid"}>

                                    <div className={"row"}>


                                        <div className={"col-lg"}>
                                            <h1 className={"panipuri main-heading"}>satha<span
                                                style={{color: "#fff"}}>.</span></h1>
                                            {/*<p className="full-name">NILVIN SATHNINDU KOTTAGE</p>*/}

                                        </div>


                                        {/*<div className={"col-lg con-mid"}>*/}
                                        {/*    <div className={"row social-icon-row"}>*/}
                                        {/*        <div className={"col con-mid social-icon"}>*/}
                                        {/*            <svg*/}
                                        {/*                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                        {/*                focusable="false" aria-hidden="true" viewBox="0 0 24 24"*/}
                                        {/*                height={"20"} width={"20"} fill={"#8a8a8a"}*/}
                                        {/*                data-testid="TwitterIcon" tabIndex="-1" title="Twitter">*/}
                                        {/*                <path*/}
                                        {/*                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>*/}
                                        {/*            </svg>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={"col con-mid social-icon"}>*/}
                                        {/*            <svg*/}
                                        {/*                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                        {/*                focusable="false" aria-hidden="true" viewBox="0 0 24 24"*/}
                                        {/*                height={"20"} width={"20"} fill={"#8a8a8a"}*/}
                                        {/*                data-testid="LinkedInIcon" tabIndex="-1" title="LinkedIn">*/}
                                        {/*                <path*/}
                                        {/*                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>*/}
                                        {/*            </svg>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={"col con-mid social-icon"}>*/}
                                        {/*            <svg*/}
                                        {/*                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                        {/*                focusable="false" aria-hidden="true" viewBox="0 0 24 24"*/}
                                        {/*                height={"20"} width={"20"} fill={"#8a8a8a"}*/}
                                        {/*                data-testid="WhatsAppIcon" tabIndex="-1" title="WhatsApp">*/}
                                        {/*                <path*/}
                                        {/*                    d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>*/}
                                        {/*            </svg>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={"col con-mid social-icon"}>*/}
                                        {/*            <svg*/}
                                        {/*                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                        {/*                focusable="false" aria-hidden="true" viewBox="0 0 24 24"*/}
                                        {/*                height={"20"} width={"20"} fill={"#8a8a8a"}*/}
                                        {/*                data-testid="EmailIcon" tabIndex="-1" title="Email">*/}
                                        {/*                <path*/}
                                        {/*                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>*/}
                                        {/*            </svg>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={"col con-mid social-icon"}>*/}
                                        {/*            <svg*/}
                                        {/*                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                        {/*                focusable="false" aria-hidden="true" viewBox="0 0 24 24"*/}
                                        {/*                height={"20"} width={"20"} fill={"#8a8a8a"}*/}
                                        {/*                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">*/}
                                        {/*                <path*/}
                                        {/*                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>*/}
                                        {/*            </svg>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}


                                    </div>

                                </div>
                                <div className={"col con-mid"}>
                                    {/*<img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>*/}
                                    {/*<iframe src="https://app.vectary.com/p/3xxdo1svduQi5RYe24urpc" frameBorder="0"*/}
                                    {/*        width="100%" height="100%"></iframe>*/}
                                    <iframe src="https://app.vectary.com/p/59bLkVteTnRk323UayVZho" frameBorder="0"
                                            width="100%" height="480"></iframe>
                                </div>
                                <div className={"col con-right-mid"}>
                                    <h1 className={"hero-title"}>
                                        a <span className={"panipuri"}>biological intelligence </span>
                                        with crazy <span className={"panipuri"}>ideas </span>
                                        and <span className={"panipuri"}>solutions</span>
                                    </h1>
                                    <h3>
                                        for computer science & engineering.
                                    </h3>

                                    <br/>
                                    {/*<h1 className={"main-name"}>SATHA</h1>*/}
                                </div>
                            </div>

                            <div className="row mob-hero-header">
                                <div className={"col-lg"}>
                                    <img src={"/img/dpacks-logo.png"} className={"hero-logo"} alt={"dpacks logo"}/>
                                </div>
                                <div className={"col-lg"}>
                                    <h1 className={"hero-title"}>
                                        a <span style={{color: "#5765f1"}}>biological intelligence</span>
                                        <br/>
                                        with crazy ideas
                                        and solutions
                                        in computer science.
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className={"explore"}>
                            <h1><span className={"explore-bg"}>&emsp;explore <span>
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24" height={"24"} width={"24"}
                                    fill={"#5765f1"}
                                    data-testid="ArrowCircleDownIcon" tabIndex="-1" title="ArrowCircleDown"><path
                                    d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"></path></svg>
                            </span>&emsp;</span></h1>
                        </div>
                    </div>
                </div>

                {/* Section 1 */}
                <div className={"section-me"}>
                    <div className={"container"}>
                        {/*<div className={"title-list-div con-mid"}>*/}
                        {/*    <p className={"title-list"}>*/}
                        {/*        <span style={{color: "#5765f1"}}>Software Engineering</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Full-stack Developing</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Web Developing</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Debugging</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Problem Solving</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Consulting</span>*/}
                        {/*        &nbsp;|&nbsp;*/}
                        {/*        <span style={{color: "#5765f1"}}>Inventing</span>*/}
                        {/*    </p>*/}
                        {/*</div>*/}

                        <div className={"row"}>
                            <div className={"col"}>
                                <img src={"/img/homepage/satha-main.png"} className={"satha-planet"} alt={"satha"}/>
                            </div>
                            <div className={"col"}>
                                <h1 className={"neutro"}>
                                    I'M <span className={"panipuri"}>sathnindu</span>
                                    <br/>
                                    <span className={"panipuri"}>AKA <span style={{color: "#000"}}>satha</span>.</span>
                                </h1>
                                <p>
                                    a guy who solve problems scientifically with chewing a bubble gum.
                                </p>
                                <p>
                                    computer science (engineer, developer, problem solver, debugger, researcher &
                                    inventor)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 3 */}
                <div className={"research"}>
                    <div className={"container"}>
                        <div className={"con-mid"}>
                            {/*<h1><span className={"panipuri"}>specialised <span*/}
                            {/*    style={{color: "#000"}} className={"neutro"}>in</span></span></h1>*/}
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
                </div>

                {/* section 4 */}
                <div className={"research"}>
                    <div className={"container"}>
                        <div className={"con-mid"}>
                            <h1><span className={"panipuri"}>research <span
                                style={{color: "#000"}} className={"neutro"}>projects</span></span></h1>
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
                </div>

                {/* section 4 */}
                <div className={"big-board-div"}>
                    <div className={"container"}>
                        <h1 className={"big-board"}>
                            I ain't a <span
                            style={{color: "#5765f1"}}>typical</span><br/>
                            developer.
                        </h1>
                        <h3 className={"footer-whatever"}>
                            whatever your problem,<br/>
                            let's scientifically solve & engineer it<br/>
                            from the depth of its algorithm.
                        </h3>

                        <div style={{transform: "rotate(-5deg)"}}>
                            <h1 className={"big-board"}
                                style={{textAlign: "right", fontSize: "2.5rem", color: "#5765f1"}}>
                                (+94) 74 180 2242
                            </h1>
                            <h1 className={"big-board"}
                                style={{textAlign: "right", fontSize: "2.5rem", color: "#000000"}}>
                                bysatha@gmail.com
                            </h1>
                        </div>

                    </div>
                </div>


                {/* Footer 1 */}
                {/* Section 7 */}
                <div style={{backgroundImage: "url('/img/homepage/footer-main.png')"}} className={"footer-img"}></div>
                <div className={"footer"}>
                    <div
                        className={"footer-section con-end"}>
                        {/*<img src={"/img/homepage/satha-main.png"} className={"footer-img"} alt={"footer image"}/>*/}
                        <div className={"container"}>
                            {/*<h1>Footer</h1>*/}
                            <div className={"row"}>
                                <div className={"col"}>
                                    <h5 style={{margin: "0", padding: "0"}} className={"footer-name"}>satha<span
                                        style={{color: "#5765f1"}}>.</span></h5>
                                    {/*<span className={"by-satha-vr"}>|</span><span className={"by-satha"}>BY <a*/}
                                    {/*href={"#"}>SATHA</a></span>*/}
                                </div>
                                <div className={"col"}>
                                    <a className={"footer-page-link"} href={"#"}>Privacy Policy</a>
                                    <span className={"privacy-divider"}>•</span>
                                    <a className={"footer-page-link"} href={"#"}>Terms & Conditions</a>
                                </div>
                                <div className={"col"}>
                                    <p className={"copyright-text"}>©{new Date().getFullYear()} SATHNINDU
                                        KOTTAGE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

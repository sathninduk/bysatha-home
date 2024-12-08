import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Experience from "./Experience";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Satha | Computer Science & Engineering Solutions by Sathnindu Kottage</title>
                    <script type="text/javascript"
                            src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
                </Helmet>
                <div className={"main-section con-mid"}>
                    <div className="container">
                        <div className={"hero"}>

                            <div className="row pc-hero-header">
                                <div className={"col con-left-mid"}>
                                    <div className={"row"}>
                                        <div className={"col-lg"}>
                                            <h1 className={"panipuri main-heading"} style={{fontSize: "3rem"}}>
                                                <span>by</span>
                                                <span className={"neutro"} style={{color: "#000"}}>satha</span>
                                            </h1>
                                            <h5 style={{lineHeight: "0px", fontSize: "22px"}}>Sathnindu Kottage</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col con-mid"}>
                                    <iframe title={"Main Planet"} src="https://app.vectary.com/p/59bLkVteTnRk323UayVZho"
                                            frameBorder="0"
                                            width="100%" height="480"></iframe>
                                </div>
                                <div className={"col con-right-mid"}>
                                    <h1 className={"hero-title"}>
                                        a <span className={"panipuri"}>biological intelligence </span>
                                        with crazy <span className={"panipuri"}>ideas </span>
                                        and <span className={"panipuri"}>solutions</span>
                                    </h1>
                                    <h3>
                                        for computer science & engineering <span role="img"
                                                                                 aria-label={"cool"}>😎</span>
                                    </h3>

                                    <br/>
                                </div>
                            </div>

                            <div className={"mob-planet-bg con-right-mid"}>
                                <div className={"mobile-main-planet mobile-planet"}>
                                    <img src={"/img/homepage/main-planet.png"} height="480px"
                                         alt={"main-planet"}/>
                                </div>
                                <div className={"mobile-main-planet tablet-planet"}>
                                    <iframe title={"Main Planet"} src="https://app.vectary.com/p/59bLkVteTnRk323UayVZho"
                                            frameBorder="0"
                                            width="100%" height="480px"></iframe>
                                </div>
                            </div>

                            <div className="row mob-hero-header">
                                <div className={"col-lg con-left-mid mob-satha-text"}>
                                    <h1 className={"panipuri main-heading"} style={{fontSize: "36px"}}>
                                        <span style={{color: "#5765f1", textAlign: "left"}}>by</span>
                                        <span className={"neutro"} style={{color: "#000"}}>satha</span>
                                    </h1>
                                    <h5 className={"mob-name"}>Sathnindu Kottage</h5>
                                </div>
                                <div className={"col-lg con-right-mid mob-biological-text"}
                                     style={{marginTop: "32px"}}>
                                    <h1 className={"hero-title"} style={{fontSize: "1.8rem"}}>
                                        <span style={{fontSize: "1.6rem"}}>a </span><span className={"panipuri"}>biological intelligence </span>
                                        <span style={{fontSize: "1.6rem"}}>with crazy </span><span
                                        className={"panipuri"}>ideas </span>
                                        <span style={{fontSize: "1.6rem"}}>and </span><span
                                        className={"panipuri"}>solutions</span>
                                    </h1>
                                    <h3 style={{fontSize: "1.3rem"}}>
                                        for computer science & engineering <span role="img"
                                                                                 aria-label={"cool"}>😎</span>
                                    </h3>

                                    <br/>
                                </div>
                            </div>

                        </div>
                        <a href={"#about"} className={"explore"}>
                            <h1><span className={"explore-bg"}>&emsp;explore <span>
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24" height={"24"} width={"24"}
                                    fill={"#5765f1"}
                                    data-testid="ArrowCircleDownIcon" tabIndex="-1" title="ArrowCircleDown"><path
                                    d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"></path></svg>
                            </span>&emsp;</span></h1>
                        </a>
                    </div>
                </div>

                {/* Section 1 */}
                <div className={"section-me"} id={"about"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col about-planet-div"}>
                                <img src={"/img/homepage/satha-main.png"} className={"satha-planet"} alt={"satha"}/>
                            </div>
                            <div className={"col about-planet-text"}>
                                <h1 className={"neutro"}>
                                    I'M <span className={"panipuri"}>sathnindu</span>
                                    <br/>
                                    <span className={"panipuri"}>AKA <span className={"neutro"}
                                                                           style={{color: "#000"}}>satha</span>.</span>
                                </h1>
                                <h3 style={{color: "#737373", marginTop: "30px", fontSize: "21px"}}>
                                    A kinda teen guy who solves problems scientifically by chewing bubble gum.
                                </h3>
                                <h3 style={{color: "#737373", fontSize: "21px"}}>
                                    Industrial quality, modern, on-time, accuracy, security and honesty <span role="img"
                                                                                                              aria-label={"100"}>💯</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 3 */}
                <div className={"research"}>
                    <div className={"container"}>
                        <div className={"con-mid"}>
                        </div>
                        <div className={""} style={{marginTop: "30px"}}>
                            <h3 className="panipuri life-game-h3">
                                <span style={{color: "#000"}}><span>👨🏽‍💻</span> the </span>life <span
                                className={"neutro"}
                                style={{color: "#000"}}>game</span>
                                <span
                                    role="img" aria-label={"up down smile"}></span>
                            </h3>


                            <div className={"row"}>
                                <div className={"col life-game-col life-game-col-1"}>
                                    <p className={"life-goal"}>
                                        <span style={{textAlign: "center"}}>
                                            <strike>Full-stack developing</strike>, <strike>Programing</strike>, <strike>Software engineering</strike>, <br/><strike>DevOps</strike> & <strike>blah
                                                blah</strike> 🤮
                                        <br/>
                                        <strike>I can JAVA, C#, Python, JavaScript & Laa Laa very well...</strike> 😅
                                        <br/>
                                        <br/>
                                        <span className={"panipuri"}>
                                            The above can be done by any typical person <br/>even from watching YouTube.
                                        </span>
                                    </span>

                                        <br/>
                                        <br/>
                                    </p>
                                </div>
                                <div className={"col life-game-col life-game-col-2"}>
                                    <p style={{textAlign: "left"}}>
                                        Maths & Algorithms are the heart of theoretical computer science.
                                        <br/>
                                        <br/>
                                        <b>So my life goal is to simulate unseen cosmological & mathematical
                                            approaches from computer science. </b><span>🧑🏽‍🚀</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"other-services"}>
                            <div className={"row edition-list edition-list-1 edition-list-2"}>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Researching</p>
                                    <p className={"edition-desc"}>Computational mathematics, Algorithms and Scientific
                                        ideas</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Inventing</p>
                                    <p className={"edition-desc"}>Universal cyber and computation systems</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Problem Solving</p>
                                    <p className={"edition-desc"}>System architectures & Computational mathematics</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Knowledge Sharing</p>
                                    <p className={"edition-desc"}>Everything I know, and Anything I want to know</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>CS Consulting</p>
                                    <p className={"edition-desc"}>Scientific & Computational thinking</p>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <h3 className={"panipuri"}><span>👇</span> also, <span
                                style={{color: "#000"}}>yeah!</span> but <span
                                className={"neutro scientifically-neutro"}
                                style={{color: "#000"}}>scientifically</span>
                            </h3>
                            <div className={"row edition-list edition-list-1 edition-list-2"}>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Software Engineering</p>
                                    <p className={"edition-desc"}>Design, develop, maintain, test, and evaluate</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Full-Stack Developing</p>
                                    <p className={"edition-desc"}>Java Spring, .NET, PHP, MERN, Python Django, Ruby</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Web Designing</p>
                                    <p className={"edition-desc"}>General, Interactive, e-commerce, event & mission
                                        critical</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Cyber Security</p>
                                    <p className={"edition-desc"}>Security analysis, White-hat hacking, Incident
                                        investigation</p>
                                </div>
                                <div className={"col con-mid"}>
                                    <p className={"edition-name"}>Debugging</p>
                                    <p className={"edition-desc"}>Deployed and developing stage systems</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 4 */
                }
                <div className={"research research-projects"} id={"research"}>
                    <div className={"container"}>

                        <div className={"list-section"} style={{marginTop: "0"}}>
                            <div className={"con-mid"}>
                                <h1><span className={"panipuri"}><span>🧪</span> research <span
                                    style={{color: "#000"}} className={"neutro title-neutro"}>projects</span></span>
                                </h1>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Chatsra (Open-Source AI)</h3>
                                        <p>(2024-2025)</p>
                                        <div className={"row edition-list edition-list-special"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/chatsapi/ChatsAPI"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>
                                                    Open-Source
                                                </div>
                                                <p className={"edition-name"}>ChatsAPI</p>
                                                <p className={"edition-desc"}>A High-Performance AI Agent Framework based on SBERT & SpaCy</p>
                                                <p
                                                    className={"edition-availability-badge edition-availability-badge-green"}>
                                                    V 0.1.0 (Pre-Release)
                                                </p>
                                            </a>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/ChatWithSQL"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>
                                                    Open-Source
                                                </div>
                                                <p className={"edition-name"}>ChatWithSQL</p>
                                                <p className={"edition-desc"}>The world's most secure and reliable
                                                    Python
                                                    library for querying SQL databases through LLMs.</p>
                                                <p
                                                    className={"edition-availability-badge edition-availability-badge-green"}>
                                                    V 0.1.3 (Pre-Release)
                                                </p>
                                            </a>
                                            <div
                                                className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                                <div className={"research-badge research-badge-up"}>Open-Source - Dev
                                                </div>
                                                <p className={"edition-name"}>ChatWithStruct</p>
                                                <p className={"edition-desc"}>LLM response structuring Python
                                                    library</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project CyberUniversal (Resurrected)</h3>
                                        <p>(2024)</p>
                                        <div className={"row edition-list edition-list-special"}>
                                            <a className={"col con-mid research-block research-active block-href"}
                                               href={"https://dpacks.net"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-active"}>Production -
                                                    Active
                                                </div>
                                                <p className={"edition-name"}>DPacks V2</p>
                                                <p className={"edition-desc"}>The fastest headless HTTP technology &
                                                    many more</p>
                                                <p
                                                    className={"edition-availability-badge edition-availability-badge-green"}>
                                                    V 2.0.0 BETA
                                                </p>
                                            </a>
                                            <a className={"col con-mid research-block research-active block-href"}
                                               href={"https://github.com/dpacks-technology/dpacks-connector-js"}
                                               rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-active"}>Production -
                                                    Active
                                                </div>
                                                <p className={"edition-name"}>DPacks V2 Connector</p>
                                                <p className={"edition-desc"}>DPacks CMS connector and modifier
                                                    script</p>
                                                <p
                                                    className={"edition-availability-badge edition-availability-badge-green"}>
                                                    V 2.0.0 BETA
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Verita</h3>
                                        <p>(2024)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/verita-fe"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>Verita</p>
                                                <p className={"edition-desc"}>Software formal specification technology
                                                    with a real-time tuning LLM</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Aspire AI</h3>
                                        <p>(2024)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/aspire-ai-fe"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>Aspire AI</p>
                                                <p className={"edition-desc"}>Career and skills enhancement AI powered
                                                    by a guided user analysis algorithm</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project GoFlow</h3>
                                        <p>(2023)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/goflow"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>GoFlow</p>
                                                <p className={"edition-desc"}>A Java-based transport management system
                                                    with a location based-QR feature</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Ceft</h3>
                                        <p>(2023)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/ceft"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>Ceft</p>
                                                <p className={"edition-desc"}>A fully functional online banking system
                                                    for micro-banking.</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"project-list-section"}>
                                <h3>Project CyberUniversal</h3>
                                <p>(2022 - 2023)</p>
                                <div className={"row edition-list edition-list-special"}>
                                    <a href={"https://dpacks.netlify.app/"}
                                       className={"col con-mid research-block research-up block-href"} rel="noreferrer"
                                       target={"_blank"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>Dpacks</p>
                                        <p className={"edition-desc"}>The first ever database and language exempt
                                            post-apply
                                            CMS</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </a>
                                    <div
                                        className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>Dpacks +</p>
                                        <p className={"edition-desc"}>The ultimate search engine crawling technology</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </div>
                                    <div
                                        className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>Dpacks Pro</p>
                                        <p className={"edition-desc"}>Centralised data variable edition of the Dpacks
                                            technology</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </div>
                                    <a className={"col con-mid research-block research-active block-href"}
                                       href={"https://dpacks-nightly.vercel.app"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-active"}>Production - Active
                                        </div>
                                        <p className={"edition-name"}>Dpacks Nightly</p>
                                        <p className={"edition-desc"}>The first ever Web 3.0 driven CMS</p>
                                        <p
                                            className={"edition-availability-badge edition-availability-badge-green"}>
                                            V 1.0.0 BETA
                                        </p>
                                    </a>
                                </div>
                                <div className={"row edition-list"}>
                                    <div
                                        className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>Dpacks Core</p>
                                        <p className={"edition-desc"}>The core technology of Dpacks</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </div>
                                    <div
                                        className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>Kelof</p>
                                        <p className={"edition-desc"}>The most technically affordable IaaS</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={"project-list-section"}>
                                <h3>Project Evilcodes</h3>
                                <p>(2021-2023)</p>
                                <div className={"row edition-list"}>
                                    <a className={"col con-mid research-block research-active block-href"}
                                       href={"https://ethpay-beta.netlify.app/"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-active"}>Production - Active
                                        </div>
                                        <p className={"edition-name"}>EthPay</p>
                                        <p className={"edition-desc"}>Decentralised & Anonymous ERC-20 payment
                                            gateway</p>
                                        <p
                                            className={"edition-availability-badge edition-availability-badge-green"}>
                                            V 1.0.0 BETA
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://eth-auth-beta.netlify.app/"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source
                                        </div>
                                        <p className={"edition-name"}>eth-auth</p>
                                        <p className={"edition-desc"}>Ethereum Authentication Tokens</p>
                                        <p
                                            className={"edition-availability-badge edition-availability-badge-green"}>
                                            0.0.1-beta1
                                        </p>
                                    </a>
                                    <div
                                        className={"col con-mid research-block research-up block-href coming-soon-block"}>
                                        <div className={"research-badge research-badge-up"}>Production - Dev</div>
                                        <p className={"edition-name"}>BlackHole Protocol</p>
                                        <p className={"edition-desc"}>ERC-20 transactions' chain breaking protocol</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            Coming Soon
                                        </p>
                                    </div>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/project-evilcodes/encrig"} rel="noreferrer"
                                       target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>encrig</p>
                                        <p className={"edition-desc"}>Encrypted IPFS static storage gateway</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <div className={"row edition-list"}>
                                        <a className={"col con-mid research-block research-open block-href"}
                                           href={"https://github.com/project-evilcodes/efores"} rel="noreferrer"
                                           target={"_blank"}>
                                            <div className={"research-badge research-badge-open"}>Open-Source</div>
                                            <p className={"edition-name"}>efores</p>
                                            <p className={"edition-desc"}>ERC-721 Non-Fungible token minting
                                                platform</p>
                                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                <svg
                                                    style={{marginTop: "-2px"}}
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    height={"13"} width={"13"} fill={"#4f4f4f"}
                                                    data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                    <path
                                                        d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                </svg>
                                                &emsp;Repository
                                            </p>
                                        </a>
                                        <a className={"col con-mid research-block research-open block-href"}
                                           href={"https://github.com/project-evilcodes/reduza1"} rel="noreferrer"
                                           target={"_blank"}>
                                            <div className={"research-badge research-badge-open"}>Open-Source</div>
                                            <p className={"edition-name"}>reduza</p>
                                            <p className={"edition-desc"}>Project Reduza (Red) PreV1.0 - An algorithm
                                                for
                                                self reproduction</p>
                                            <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                <svg
                                                    style={{marginTop: "-2px"}}
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                    focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                    height={"13"} width={"13"} fill={"#4f4f4f"}
                                                    data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                    <path
                                                        d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                </svg>
                                                &emsp;Repository
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className={"project-list-section"}>
                                <h3>Project CodeBase</h3>
                                <p>(2020 - 2021)</p>
                                <div className={"row edition-list"}>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/nodeAuth"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>nodeAuth</p>
                                        <p className={"edition-desc"}>Open-source Node.js authentication code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/mernAuth"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>mernAuth</p>
                                        <p className={"edition-desc"}>Open-source MERN stack authentication
                                            code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/nodeBase2"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>nodeBase</p>
                                        <p className={"edition-desc"}>Open-source Node.js development code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/mernBase"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>mernBase</p>
                                        <p className={"edition-desc"}>Open-source MERN stack development code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                </div>
                                <div className={"row edition-list"}>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/pernBase"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>pernBase</p>
                                        <p className={"edition-desc"}>Open-source PERN stack development code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/tsPern"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>tsPern</p>
                                        <p className={"edition-desc"}>Open-source PERN (TypeScript) stack development
                                            code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/tsMern"} rel="noreferrer" target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>tsMern</p>
                                        <p className={"edition-desc"}>Open-source MERN (TypeScript) stack development
                                            code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                    <a className={"col con-mid research-block research-open block-href"}
                                       href={"https://github.com/bysatha/mernBase_graphQL"} rel="noreferrer"
                                       target={"_blank"}>
                                        <div className={"research-badge research-badge-open"}>Open-Source</div>
                                        <p className={"edition-name"}>mernBase_graphQL</p>
                                        <p className={"edition-desc"}>Open-source MERN stack with GraphQL development
                                            code-base</p>
                                        <p className={"edition-availability-badge edition-availability-badge-red"}>
                                            <svg
                                                style={{marginTop: "-2px"}}
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                height={"13"} width={"13"} fill={"#4f4f4f"}
                                                data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                <path
                                                    d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                            </svg>
                                            &emsp;Repository
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Dear Earth</h3>
                                        <p>(2021)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/radiofusion/dearEarth"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>dearEarth</p>
                                                <p className={"edition-desc"}>An ML intelligence for identify earth
                                                    pollution (NASA Hackathon 2021)</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Project Media Real-time</h3>
                                        <p>(2020)</p>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/streamfig"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>streamfig</p>
                                                <p className={"edition-desc"}>Real-time streaming platform for
                                                    unapproachable deliveries</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"project-list-section"}>
                                        <h3>Miscellaneous</h3>
                                        <div className={"row edition-list"}>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/gaserp"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>Gaserp</p>
                                                <p className={"edition-desc"}>BA focused online delivery and ERP
                                                    management system</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                            <a className={"col con-mid research-block research-open block-href"}
                                               href={"https://github.com/sathninduk/nodeblaze"} rel="noreferrer"
                                               target={"_blank"}>
                                                <div className={"research-badge research-badge-open"}>Open-Source</div>
                                                <p className={"edition-name"}>NodeBlaze</p>
                                                <p className={"edition-desc"}>An experiment for a real-time approach by
                                                    Node.js</p>
                                                <p className={"edition-availability-badge edition-availability-badge-red"}>
                                                    <svg
                                                        style={{marginTop: "-2px"}}
                                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                        height={"13"} width={"13"} fill={"#4f4f4f"}
                                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                                        <path
                                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                                    </svg>
                                                    &emsp;Repository
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>

                                    <div className={"project-list-section"}>
                                        <h3>Projected (2023) Projects</h3>
                                        <br/>
                                        <h5>Project CyberVerse</h5>
                                        <p>A research to build a multi sectional cyber world.</p>
                                        <h5>Project The WorldOnce</h5>
                                        <p>A research to make the world's data flow realtime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*  organizations  */}
                        <div className={"list-section organizations"}>
                            <div className={"con-mid"}>
                                <h1 style={{marginBottom: "40px", lineHeight: "2rem"}}><span
                                    className={"panipuri"}><span>🏢</span> contributed <span
                                    style={{color: "#000"}}
                                    className={"neutro title-neutro-2"}>organizations</span></span></h1>
                            </div>
                            <div className={"row edition-list"}>
                                {/* <a className={"col con-mid research-block research-org block-href"}
                                    href={"https://github.com/bysatha"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>by Satha</p>
                                    <p className={"edition-desc"}>Projects by Sathnindu Kottage</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a> */}
                                {/* <a className={"col con-mid research-block research-org block-href"}
                                    href={"https://github.com/project-evilcodes"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>EvilCodes</p>
                                    <p className={"edition-desc"}>Cryptography and decentralized cyber space research
                                        project</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a> */}
                                <a className={"col con-mid research-block research-org block-href"}
                                   href={"https://github.com/dpacks-technology"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>DPacks</p>
                                    <p className={"edition-desc"}>Distributed and AI-powered static data technology and
                                        CMS</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a>
                                <a className={"col con-mid research-block research-org block-href"}
                                   href={"https://github.com/ms-club-sliit"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>MS Club of SLIIT</p>
                                    <p className={"edition-desc"}>A nonprofit organization and a student community based on SLIIT</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a>
                                <a className={"col con-mid research-block research-org block-href"}
                                   href={"https://github.com/sliit-foss"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>SLIIT FOSS Community</p>
                                    <p className={"edition-desc"}>A team of volunteers who believe in the usage of Free/Open Source Software</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a>
                                {/* <a className={"col con-mid research-block research-org block-href"}
                                    href={"https://github.com/code94labs"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>Code94 Labs</p>
                                    <p className={"edition-desc"}>Software Agency</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a> */}
                                <a className={"col con-mid research-block research-org block-href"}
                                   href={"https://github.com/sliitsesc"} rel="noreferrer" target={"_blank"}>
                                    <div className={"research-badge research-badge-org"}>Organization</div>
                                    <p className={"edition-name"}>SLIIT SESC</p>
                                    <p className={"edition-desc"}>Software Engineering Student Community at SLIIT</p>
                                    <p className={"edition-availability-badge edition-availability-badge-red"}>
                                        <svg
                                            style={{marginTop: "-2px"}}
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                            height={"13"} width={"13"} fill={"#4f4f4f"}
                                            data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                            <path
                                                d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                        </svg>
                                        &emsp;Organization
                                    </p>
                                </a>
                            </div>
                        </div>


                        {/*  portfolio  */}
                        <div className={"list-section"}>
                            <div className={"con-mid"}>
                                <h1><span className={"panipuri"}><span>💼</span> experience</span></h1>
                            </div>
                            <Experience/>
                            {/* <div className={"row edition-list edition-list-2"}>
                                <a className={"col con-mid block-href"}
                                   href={"https://dpacks.netlify.app/"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Dpacks Technology</p>
                                    <p className={"edition-desc"}>Inventor</p>
                                    <div className={"logo-box"}>
                                        <img className={"org-logos"} src={"/img/homepage/logos/dpacks-logo.png"}
                                             alt={"Dpacks Logo"}/>
                                    </div>
                                </a>
                                <a className={"col con-mid block-href"}
                                   href={"https://github.com/radiofusion"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Radiofusion Cyber Systems</p>
                                    <p className={"edition-desc"}>Founder</p>
                                    <div className={"logo-box"}>
                                        <img className={"org-logos"}
                                             src={"/img/homepage/logos/radiofusion_horizontal_black.png"}
                                             alt={"Radiofusion Logo"}/>
                                    </div>
                                </a>
                                <a className={"col con-mid block-href"}
                                   href={"https://www.coduza.com"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Coduza</p>
                                    <p className={"edition-desc"}>Senior Software Engineer</p>
                                    <div className={"logo-box-coduza"}>
                                        <img className={"org-logos-coduza"} src={"/img/homepage/logos/coduza.png"}
                                             alt={"Coduza Logo"}/>
                                    </div>
                                </a>
                            </div> */}
                        </div>


                        {/*  social  */}
                        <div className={"list-section social-section"} style={{marginBottom: "30px"}}>
                            <div className={"con-mid"}>
                                <h1><span className={"panipuri"}><span>💻</span> dev <span
                                    style={{color: "#000"}}>social</span></span>
                                </h1>
                            </div>
                            <div className={"row edition-list edition-list-2"}>
                                <a className={"col con-mid block-href"}
                                   href={"https://github.com/sathninduk"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>GitHub</p>
                                    <a href={"https://github.com/sathninduk"} rel="noreferrer"
                                       target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon" title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>
                                <a className={"col con-mid block-href"}
                                   href={"https://stackoverflow.com/users/15429494/sathnindu-kottage"}
                                   rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Stack Overflow</p>
                                    <a href={"https://stackoverflow.com/users/15429494/sathnindu-kottage"}
                                       rel="noreferrer" target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon"
                                        title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>
                                <a className={"col con-mid block-href"}
                                   href={"https://www.linkedin.com/in/sathnindu/"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Linkedin</p>
                                    <a href={"https://www.linkedin.com/in/sathnindu/"} rel="noreferrer"
                                       target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon"
                                        title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>
                                <a className={"col con-mid block-href"}
                                   href={"https://developers.google.com/profile/u/117810861260902165797"}
                                   rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>G Developers</p>
                                    <a href={"https://developers.google.com/profile/u/117810861260902165797"}
                                       rel="noreferrer" target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon"
                                        title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>
                                {/*<a className={"col con-mid block-href"}
                                    href={"https://www.hackerrank.com/sathnindu"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>HackerRank</p>
                                    <a href={"https://www.hackerrank.com/sathnindu"} rel="noreferrer"
                                       target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon"
                                        title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>*/}
                                {/*<a className={"col con-mid block-href"}*/}
                                {/*   href={"https://www.hackerearth.com/@sathnidukottage"} rel="noreferrer" target={"_blank"}>*/}
                                {/*    <p className={"edition-name"}>HackerEarth</p>*/}
                                {/*    <a href={"https://www.hackerearth.com/@sathnidukottage"} rel="noreferrer"*/}
                                {/*       target={"_blank"}>Visit <svg*/}
                                {/*        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"*/}
                                {/*        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"*/}
                                {/*        height="15" width="15" data-testid="OpenInNewIcon" tabIndex="-1"*/}
                                {/*        title="OpenInNew">*/}
                                {/*        <path*/}
                                {/*            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>*/}
                                {/*    </svg></a>*/}
                                {/*</a>*/}
                                <a className={"col con-mid block-href"}
                                   href={"https://scholar.google.com/citations?user=kcLuuSEAAAAJ&hl=en"} rel="noreferrer" target={"_blank"}>
                                    <p className={"edition-name"}>Google Scholar</p>
                                    <a href={"https://scholar.google.com/citations?user=kcLuuSEAAAAJ&hl=en"} rel="noreferrer"
                                       target={"_blank"}>Visit <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#5765f1"
                                        height="15" width="15" data-testid="OpenInNewIcon"
                                        title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                                </a>
                            </div>
                        </div>


                        {/*  Timeline  */}
                        <div className={"timeline-section con-mid"}>
                            <p>
                                3500+ GitHub Contributions (2023-2024) 🐙
                                <br/>
                                <a href={"https://github.com/sathninduk"} rel="noreferrer"
                                   target={"_blank"}>GitHub <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill={"#5765f1"}
                                        height={"15"} width={"15"} data-testid="OpenInNewIcon"
                                        tabIndex="-1" title="OpenInNew">
                                        <path
                                            d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
                                    </svg></a>
                            </p>
                            <div style={{width: "100%"}}>
                                <img src={"/img/homepage/github-timeline.png"} className={"github-timeline"}
                                     alt={"github timeline"}/>
                            </div>
                        </div>

                    </div>
                </div>

                {/* TrustBox widget - Micro Review Count */}
                <div className="trustpilot-widget" data-locale="en-US"
                     data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="62e5e695b7bf78be9d3cd158"
                     data-style-height="24px" data-style-width="100%" data-theme="light"
                     data-min-review-count={10} data-without-reviews-preferred-string-id={1}>
                    <a href="https://www.trustpilot.com/review/bysatha.com" target="_blank"
                       rel="noreferrer noopener">Trustpilot</a>
                </div>
                {/* End TrustBox widget */}


                {/* section 4 */
                }
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

                        <div style={{transform: "rotate(-5deg)"}} className={"contact-details"} id={"contact"}>
                            <a href={"tel:+94711226532"}>
                                <h1 className={"big-board big-board-tel"}>
                                    (+94) 71 122 6532
                                </h1>
                            </a>
                            <a href={"mailto:hello@bysatha.com"}>
                                <h1 className={"big-board big-board-email"}>
                                    hello@bysatha.com
                                </h1>
                            </a>
                        </div>

                    </div>
                </div>


                {/* Footer 1 */
                }
                {/* Section 7 */
                }
                <div style={{backgroundImage: "url('/img/homepage/footer-main.png')"}} className={"footer-img"}></div>
                <div className={"footer"}>
                    <div
                        className={"footer-section con-end"}>
                        <div className={"container"}>
                            <div className={"row"}>
                                <div className={"col brand-footer-col"}>
                                    <h5 style={{margin: "0", padding: "0"}} className={"footer-name"}>
                                        <span style={{color: "#5765f1"}}>by</span>
                                        <span style={{fontFamily: 'neutro'}}>satha</span>
                                    </h5>
                                    {/*<span className={"by-satha-vr"}>|</span><span className={"by-satha"}>BY <a*/}
                                    {/*href={"#"}>SATHA</a></span>*/}
                                </div>
                                <div className={"col"}>
                                    <a className={"footer-page-link"} href={"/privacy"}>Privacy Policy</a>
                                    <span className={"privacy-divider"}>•</span>
                                    <a className={"footer-page-link"} href={"/terms"}>Terms & Conditions</a>
                                </div>
                                <div className={"col"}>
                                    <p className={"copyright-text"}
                                       style={{color: "#000!important"}}>©{new Date().getFullYear()} SATHNINDU
                                        KOTTAGE</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
            ;
    }
}

import React, {Component} from "react";
import {Link} from "react-router-dom";


export default class Navbar extends Component {
    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
                <div className={"container"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
                            aria-label="Toggle navigation">
                        {/*<span className="navbar-toggler-icon"></span>*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none"
                             className="css-1170n61">
                            <rect x="1" y="5" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                            <rect x="1" y="9" width="14" height="1.5" rx="1" fill="#737dff"></rect>
                        </svg>
                    </button>
                    <Link to={"/"} onClick={this.topFunction} className="navbar-brand con-mid">
                        {/*<img src={"/img/dpacks-nav.png"} alt={"dpacks logo"} className={"nav-logo nav-logo-filter"}/>*/}
                        <h3 className={"nav-name"}>
                            <span style={{color: "#5765f1"}}>by</span>
                            <span className={"neutro"} style={{color: "#000"}}>satha</span>
                        </h3>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item con-mid">
                                <a href={"/#research"} className="nav-link">
                                    Research 🧪
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://github.com/sathninduk"} rel="noreferrer" target={"_blank"} className="nav-link">
                                    GitHub 🐙
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://gitcoin.co/tip?username=sathninduk"} className="nav-link">
                                    Crypto Donate 💰
                                </a>
                            </li>
                            <li className="nav-item con-mid">
                                <a href={"https://www.buymeacoffee.com/sathnindu"} className="nav-link">
                                    Buy me a coffee ☕️
                                </a>
                            </li>
                        </ul>

                        <div className="nav-right navbar-nav ml-auto">


                            <li className="nav-item con-mid pc-social-nav">
                                <a href={"https://twitter.com/sathnindu"} rel="noreferrer" target={"_blank"}>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        height={"20"} width={"20"} fill={"#8a8a8a"}
                                        data-testid="TwitterIcon" tabIndex="-1" title="Twitter">
                                        <path
                                            d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item con-mid pc-social-nav">
                                <a href={"https://www.linkedin.com/in/sathnindu"} rel="noreferrer" target={"_blank"}>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        height={"20"} width={"20"} fill={"#8a8a8a"}
                                        data-testid="LinkedInIcon" tabIndex="-1" title="LinkedIn">
                                        <path
                                            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item con-mid pc-social-nav">
                                <a href={"https://wa.me/+94711226532"} rel="noreferrer" target={"_blank"}>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        height={"20"} width={"20"} fill={"#8a8a8a"}
                                        data-testid="WhatsAppIcon" tabIndex="-1" title="WhatsApp">
                                        <path
                                            d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item con-mid pc-social-nav">
                                <a href={"mailto:hello@bysatha.com"} rel="noreferrer" target={"_blank"}>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        height={"20"} width={"20"} fill={"#8a8a8a"}
                                        data-testid="EmailIcon" tabIndex="-1" title="Email">
                                        <path
                                            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item con-mid pc-social-nav">
                                <a href={"https://github.com/sathninduk"} rel="noreferrer" target={"_blank"}>
                                    <svg
                                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                        focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                        height={"20"} width={"20"} fill={"#8a8a8a"}
                                        data-testid="GitHubIcon" tabIndex="-1" title="GitHub">
                                        <path
                                            d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
                                    </svg>
                                </a>
                            </li>

                            <li className="nav-item con-mid mob-social-nav">
                                <br/>
                            </li>

                            <li className="nav-item con-mid mob-social-nav">
                                <span className={"panipuri"}>Social Media</span>
                            </li>

                            <li className="nav-item con-mid mob-social-nav">
                                <a href={"https://twitter.com/sathnindu"} rel="noreferrer" target={"_blank"}>Twitter</a>
                            </li>
                            <li className="nav-item con-mid mob-social-nav">
                                <a href={"https://www.linkedin.com/in/sathnindu/"} rel="noreferrer" target={"_blank"}>Linkedin</a>
                            </li>
                            <li className="nav-item con-mid mob-social-nav">
                                <a href={"https://wa.me/+94711226532"} rel="noreferrer" target={"_blank"}>WhatsApp</a>
                            </li>
                            <li className="nav-item con-mid mob-social-nav">
                                <a href={"mailto:hello@bysatha.com"} rel="noreferrer" target={"_blank"}>Email</a>
                            </li>
                            <li className="nav-item con-mid mob-social-nav">
                                <a href={"https://github.com/sathninduk"} rel="noreferrer" target={"_blank"}>GitHub</a>
                            </li>


                            <li className="nav-item con-mid nav-contact-btn-mob">
                                <a className="nav-link nav-sites-btn" href={"/#contact"}>
                                    <span className="sites-nav-link">
                                        <span style={{textAlign: "left"}}>Contact</span>
                                    </span>
                                </a>
                            </li>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}

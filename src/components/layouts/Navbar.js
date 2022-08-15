import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

    const [currentAccount, setCurrentAccount] = useState("");


    const connectWallet = async () => {

        try {
            const {ethereum} = window;

            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            setCurrentAccount(accounts[0]);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        connectWallet().then(() => {
        });

    }, []);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <nav id={"ethpay-nav"} className="navbar navbar-expand-lg navbar-dark navbar-bg">
            <div className={"container"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"
                         fill="none"
                         className="css-1170n61">
                        <rect x="1" y="5" width="14" height="1.5" rx="1" fill="rgba(255, 255, 255, .9)"></rect>
                        <rect x="1" y="9" width="14" height="1.5" rx="1" fill="rgba(255, 255, 255, .9)"></rect>
                    </svg>
                </button>
                <Link to={"/"} onClick={topFunction} className="navbar-brand">
                    <img src={"/img/logo-white.png"} alt={"ethpay logo"}
                         className={"nav-logo nav-logo-filter"}/>
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item con-mid">
                            <Link to={"/about"} className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item con-mid">
                            <a href={"https://youtube.com"} target="_blank" rel="noopener noreferrer"
                               className="nav-link">
                                Intro Video
                            </a>
                        </li>
                        <li className="nav-item con-mid">
                            <Link to={"/guide"} className="nav-link">
                                API Guide
                                {/* #114ade */}
                            </Link>
                        </li>
                    </ul>

                    <div className="navbar-nav ml-auto">
                        {!currentAccount ? "" :
                        <li className="nav-item nav-wallet" id={"nav-wallet"}>
                                    <span className="sites-nav-link" id={"wallet-address"}
                                          style={{padding: "6px 18.5px"}}>
                                        {(currentAccount.substring(0, 5) + "..." + currentAccount.substring(currentAccount.length, currentAccount.length - 5)).toString().toLowerCase()}
                                        </span>
                        </li>}
                        <li className="nav-item nav-testnet">
                            Beta - Rinkeby & Mainnet
                        </li>
                    </div>

                </div>
            </div>
        </nav>
    );
}

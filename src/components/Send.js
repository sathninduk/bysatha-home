import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import abi from '../utils/EthPay.json';
import Helmet from 'react-helmet';

// services
import Internal from "../services/Internal";
import {Alert, CircularProgress, LinearProgress, Skeleton, Snackbar, Typography} from "@mui/material";
import Navbar from "./layouts/Navbar";
import Keys from "../config/Keys";

let pathname = window.location.pathname;
let walletAddress = pathname.split('/').pop();

export default function Send() {

    // Contract Address & ABI
    const contractAddress = walletAddress;
    const contractABI = abi.abi;

    // Component state
    const [currentAccount, setCurrentAccount] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [amount, setAmount] = useState("0");

    const [loading, setLoading] = useState(0);
    const [paymentLoading, setPaymentLoading] = useState(0);
    const [paymentDone, setPaymentDone] = useState(0);

    const [betaOpen, setBetaOpen] = React.useState(true);

    const navbar = document.getElementById("ethpay-nav");

    if (loading === 1) {
        navbar.style.marginTop = "-4px";
    }

    async function loadingDone() {
        setLoading(0)
        // const navbar_2 = document.getElementById("ethpay-nav");
        // navbar_2.style.margin = "0px";
    }

    function amountUpdate() {
        setAmount(document.getElementById("amount").value);
    }

    // Wallet connection logic
    const isWalletConnected = async () => {
        setLoading(1);

        try {
            const {ethereum} = window;

            const accounts = await ethereum.request({method: 'eth_accounts'})
            console.log("accounts: ", accounts);

            // wallet check 1

            if (accounts.length > 0) {
                const account = accounts[0];
                console.log("wallet is connected! " + account);

                await connectWallet();

                await Internal.sendWalletCheck(walletAddress).then(response => {
                    if (response.data === null) {
                        console.log("Unregistered");
                        loadingDone()
                    } else {
                        console.log(response.data);
                        console.log("Registered");
                        loadingDone()
                    }
                }).catch(err => {
                    console.log(err);
                    loadingDone()
                })

                // wallet check 2

            } else {
                console.log("make sure MetaMask is connected");
                await loadingDone()
            }
        } catch (error) {
            console.log("error: ", error);
            await loadingDone()
        }
    }

    const connectWallet = async () => {
        setLoading(1);

        try {
            const {ethereum} = window;

            if (!ethereum) {
                console.log("please install MetaMask");
            }

            const accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });

            setCurrentAccount(accounts[0]);
            await loadingDone()
        } catch (error) {
            console.log(error);
            await loadingDone()
        }
    }

    const ethPay = async () => {
        setPaymentLoading(1);

        amountUpdate();
        try {
            const {ethereum} = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum, Keys.ETH_NET);
                const signer = provider.getSigner();
                const buyMeACoffee = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );

                console.log(currentAccount);

                console.log("Started to the BlackHole...")
                const coffeeTxn = await buyMeACoffee.ethPay(
                    "ethpay-send",
                    "c30d42cf841e2abac77ced42b2a06dcafa7c9a50",
                    {value: ethers.utils.parseEther(amount.toString())}
                );

                await coffeeTxn.wait();

                console.log("mined ", coffeeTxn.hash);

                console.log("BlackHole Protocol - Completed");

                await Internal.sentLog({txHash: coffeeTxn.hash}).then((r) => {
                    if (r.data === 200) {
                        console.log("Payment done");
                        setPaymentDone(1);
                        setPaymentLoading(0);
                    }
                }).catch((e3) => {
                    console.log(e3);
                    setPaymentLoading(0);
                });


                // Clear the form fields.
                setName("");
                setMessage("");
            }
        } catch (error) {
            console.log(error);
            await setPaymentLoading(0);
        }
    };

    const handleBetaClose = () => {
        setBetaOpen(false);
    }

    useEffect(() => {
        let buyMeACoffee;
        isWalletConnected().then(r => {
        });

    }, []);

    return (
        <div>
            {loading === 1 ? <LinearProgress/> : ""}
            {paymentLoading === 1 ? <LinearProgress color="secondary"/> : ""}
            <Navbar/>
            <Snackbar
                open={betaOpen}
                autoHideDuration={6000}
                onClose={handleBetaClose}
                // action={action}
            >
                <Alert onClose={handleBetaClose} severity="warning" sx={{width: '100%'}}>
                    EthPay Beta - Technical preview only
                </Alert>
            </Snackbar>
            <div className={"main-div"}>

                <Helmet>
                    <title>EthPay - Send Payments</title>
                    <script type="text/javascript"
                            src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
                </Helmet>

                <div className={"hero con-mid"}>
                    <div className={"circle-1"}></div>
                    <div className={"circle-2"}></div>
                    <div className={"circle-3"}></div>
                    <div className={"circle-4"}></div>
                    <div className={"main-card ethpay-card con-mid"} style={{height: "400px"}}>
                        <img src={"/img/logo-white.png"} className={"main-logo"} alt={"ethpay logo"}/>
                        <h6 className={"sub-title"}>ERC-20 Payment Gateway - Beta</h6>

                        {currentAccount ? (
                            <div>
                                <form>
                                    <div>

                                        {loading === 1 ?
                                            <Typography variant="h2">
                                                <Skeleton animation="wave"/>
                                            </Typography>
                                            :
                                            paymentLoading === 1 ?
                                                <div>
                                                    <CircularProgress size="1rem" color={"inherit"}/>
                                                    <p style={{fontFamily: "Ubuntu, sans-serif"}}>Payment is
                                                        processing</p>
                                                </div>
                                                :

                                                paymentDone === 1 ?
                                                    <div>
                                                        <svg
                                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170"
                                                            focusable="false" aria-hidden="true" viewBox="0 0 24 24"
                                                            data-testid="CheckCircleOutlineIcon" height={24} width={24} style={{color: "#fff!important", fill: "currentcolor"}} tabIndex="-1">
                                                            <path
                                                                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                                                        </svg>
                                                        <p style={{fontFamily: "Ubuntu, sans-serif"}}>Payment done</p>
                                                    </div>
                                                    :
                                                    <div>
                                                        <input id={"currency"}
                                                            type={"disabled"} className={"connect-btn"} defaultValue={"ETH"}/>
                                                        <input
                                                            // style={{borderTopRightRadius: "0", borderBottomRightRadius: "0", borderRight: "none"}}
                                                            placeholder="Amount" id={"amount"} className={"connect-btn"}
                                                            onChange={amountUpdate} type={"number"}/>
                                                        <button
                                                            id={"send-payment"}
                                                            type="button"
                                                            onClick={ethPay}
                                                            className={"connect-btn"}
                                                        >
                                                            Send
                                                        </button>
                                                    </div>


                                        }


                                        {loading === 1 ?
                                            <Skeleton animation="wave" style={{width: "200px"}}/>
                                            : <p className={"sending-wallet-address"}>to&nbsp;
                                                <a className={"link"}
                                                   href={"https://etherscan.io/address/" + contractAddress}
                                                   target={"_blank"}
                                                   rel="noopener noreferrer">{contractAddress}</a>
                                            </p>}

                                        {
                                            paymentDone === 1 ? <span className={"link resend-link"} onClick={() => window.location.reload(false)}>Send more funds</span> : ""
                                        }
                                    </div>
                                </form>
                            </div>
                        ) : (
                            loading === 1 ?
                                <Typography variant="h2" style={{width: "100%"}}>
                                    <Skeleton animation="wave"/>
                                </Typography>
                                :
                                <button onClick={connectWallet} className={"connect-btn"}> Connect your wallet </button>
                        )}
                    </div>
                    {/*<div className={"hero-sub"}><h6>Anonymous & Decentralised</h6></div>*/}
                </div>
                {/*{currentAccount && (<h1>When wallet connected</h1>)}*/}
            </div>
        </div>
    )
}

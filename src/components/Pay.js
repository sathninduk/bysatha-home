import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import abi from '../utils/EthPay.json';
import Helmet from 'react-helmet';

// services
import Internal from "../services/Internal";
import {Alert, CircularProgress, LinearProgress, Snackbar} from "@mui/material";
import Navbar from "./layouts/Navbar";
import Keys from "../config/Keys";

let pathname = window.location.pathname;
let transaction = pathname.split('/').pop();

export default function Pay() {

    // Contract Address & ABI
    const contractABI = abi.abi;

    // Component state
    const [currentAccount, setCurrentAccount] = useState("");
    const [amount, setAmount] = useState(0);

    const [wallet, setWallet] = useState("");

    // const [currency, setCurrency] = useState("");

    const [returnUrl, setReturnUrl] = useState("");
    const [cancelUrl, setCancelUrl] = useState("");

    const [validationKey, setValidationKey] = useState("");
    const [loading, setLoading] = useState(1);
    const [paymentLoading, setPaymentLoading] = useState(0);
    const [paymentDone, setPaymentDone] = useState(0);

    const [betaOpen, setBetaOpen] = React.useState(true);


    // const navbar = document.getElementById("ethpay-nav");
    if (loading === 1) {
        // navbar.style.marginTop = "-4px";
    }

    function loadingDone() {
        setLoading(0);
        // const navbar_2 = document.getElementById("ethpay-nav");
        // navbar_2.style.margin = "0px";
    }


    // P1
    Internal.transactionCheck(transaction).then(response => {

        if (response.data === null) {
            console.log("Invalid transaction ID");
        } else {
            // setCurrency(response.data.currency);
            setAmount(response.data.amount);
            setWallet(response.data.wallet);
            setReturnUrl(response.data.returnUrl);
            setCancelUrl(response.data.cancelUrl);
            setValidationKey(response.data.validationKey);
        }

        loadingDone();
    }).catch(error => {
        console.log(error);
        loadingDone();
    })

    // Wallet connection logic
    const isWalletConnected = async () => {
        setLoading(1);

        try {
            const {ethereum} = window;

            const accounts = await ethereum.request({method: 'eth_accounts'})
            console.log("accounts: ", accounts);
            if (accounts.length > 0) {
                const account = accounts[0];
                console.log("wallet is connected! " + account);
                await connectWallet();
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
            window.location.replace(cancelUrl);
            await loadingDone()
        }
    }

    const ethPay = async () => {
        setPaymentLoading(1);

        try {
            const {ethereum} = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum, Keys.ETH_NET);
                const signer = provider.getSigner();
                const buyMeACoffee = new ethers.Contract(
                    wallet,
                    contractABI,
                    signer
                );

                console.log(currentAccount);
                console.log("Started to the BlackHole...")

                const coffeeTxn = await buyMeACoffee.ethPay("ethpay-pay", validationKey, {value: ethers.utils.parseEther(amount.toString())});

                await coffeeTxn.wait();

                const transactionData = {
                    txHash: coffeeTxn.hash,
                    transaction: transaction,
                };

                // P2
                await Internal.transactionClientNotify(transactionData).then(response => {
                    if (response.data !== null) {
                        console.log(response.data);
                        if (response.data === 200) {
                            setPaymentLoading(0);
                            setPaymentDone(1);
                            setAmount(0);
                            window.location.replace(returnUrl);
                        } else {
                            setPaymentLoading(0);
                            window.location.replace(cancelUrl);
                        }

                    }
                }).catch(err0 => {
                    console.log(err0)
                    window.location.replace(cancelUrl);
                    setPaymentLoading(0);
                })

                console.log("mined ", coffeeTxn.hash);
                console.log("BlackHole Protocol - Completed");

            }
        } catch (error) {
            console.log(error);
            window.location.replace(cancelUrl);
            setPaymentLoading(0);
        }
    };

    const handleBetaClose = () => {
        setBetaOpen(false);
    }

    useEffect(() => {
        isWalletConnected().then(() => {
        });

    }, []);

    return (
        <div>
            {loading === 1 ? <LinearProgress /> : ""}
            {paymentLoading === 1 ? <LinearProgress color="secondary" /> : ""}
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
                    <title>EthPay - Checkout</title>
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


                                    {paymentLoading === 1 ?
                                        <div>
                                            <CircularProgress size="1rem" color={"inherit"}/>
                                            <p style={{fontFamily: "Ubuntu, sans-serif"}}>Payment is processing</p>
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
                                                <p className={"sending-wallet-address"}>to <a className={"link"}
                                                                                              href={"https://etherscan.io/address/" + wallet}
                                                                                              target={"_blank"}
                                                                                              rel="noopener noreferrer">{wallet}</a>
                                                </p>
                                            </div>
                                            :
                                        <div>
                                            <h3 className={"eth-pay-amount"}>ETH {amount}</h3>
                                            <button
                                                id={"paymentButton"}
                                                type="button"
                                                onClick={ethPay}
                                                className={"connect-btn"}
                                            >
                                                Send Payment
                                            </button>
                                            <p className={"sending-wallet-address"}>to <a className={"link"}
                                                                                          href={"https://etherscan.io/address/" + wallet}
                                                                                          target={"_blank"}
                                                                                          rel="noopener noreferrer">{wallet}</a>
                                            </p>
                                        </div>
                                    }

                                    {paymentLoading === 1 ? <p className={"sending-wallet-address"}>to <a className={"link"}
                                                                                                          href={"https://etherscan.io/address/" + wallet}
                                                                                                          target={"_blank"}
                                                                                                          rel="noopener noreferrer">{wallet}</a>
                                    </p> : ""

                                    }

                                </form>
                            </div>
                        ) : (
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

import React, {useEffect, useState} from "react";
import {ethers} from "ethers";
import abi from '../utils/EthPay.json';
import Helmet from 'react-helmet';

// services
import Internal from "../services/Internal";
import {Alert, CircularProgress, LinearProgress, Snackbar} from "@mui/material";
import Navbar from "./layouts/Navbar";
import Keys from "../config/Keys";

export default function Landing() {
    // Contract Address & ABI
    const contractAddress = Keys.ETHPAY_WALLET;
    const contractABI = abi.abi;

    // Component state
    const [currentAccount, setCurrentAccount] = useState("");
    const [clientId, setClientId] = useState("");
    const [clientSecretGenerated, setGeneratedClientSecret] = useState("");
    const [apiAccess, setApiAccess] = useState(0);
    const [apiInitKey, setApiInitKey] = useState("");
    const [signingKey, setSigningKey] = useState("");

    const [loading, setLoading] = useState(0);
    const [paymentLoading, setPaymentLoading] = useState(0);
    const [revealLoading, setRevealLoading] = useState(0);
    // const [apiDone, setApiDone] = useState(0);
    const [apiDone] = useState(0);
    const [open, setOpen] = React.useState(false);
    const [betaOpen, setBetaOpen] = React.useState(true);

    const navbar = document.getElementById("ethpay-nav");

    if (loading === 1) {
        navbar.style.marginTop = "-4px";
    }

    async function loadingDone() {
        setLoading(0)
    }


    async function L1Function(account) {
        // L1
        Internal.walletCheck(account).then(response => {
            if (response.data === null) {
                const accountData = {
                    address: account
                };

                // L2
                Internal.walletInit(accountData).then((r) => {
                    setApiInitKey(r.data.apiInitKey);
                    console.log("POST - 200 OK");
                    loadingDone()
                }).catch((e3) => {
                    console.log(e3);
                    loadingDone()
                });

                console.log("Unregistered");
            } else {
                console.log(response.data);
                setApiInitKey(response.data.apiInitKey);

                if (response.data.apiAccess === 1) {
                    connectWallet();
                    setApiAccess(1);
                    setClientId(response.data.clientId);
                    // setClientSecret(response.data.secret);
                    document.getElementById("cardHead").style.display = "none";
                    setSigningKey(response.data.signingKey);

                } else if (response.data.apiAccess === 0) {
                    loadingDone()
                }

                console.log("Registered");
            }
        })
    }

    // Wallet connection logic
    const isWalletConnected = async () => {
        setLoading(1);
        try {
            const {ethereum} = window;
            const accounts = await ethereum.request({method: 'eth_accounts'})

            // wallet check 1

            if (accounts.length > 0) {
                const account = accounts[0];
                console.log("wallet is connected! " + account);

                let accountsString = account.toString().toLowerCase();
                if (accountsString) {
                    // document.getElementById("wallet-address").innerText = (accountsString.substring(0, 5) + "..." + accountsString.substring(accountsString.length, accountsString.length - 5)).toString();
                }

                await L1Function(account);

                // wallet check 2

            } else {
                console.log("make sure MetaMask is connected");
                await loadingDone();
            }
        } catch (error) {
            console.log("error: ", error);
            await loadingDone()
        }
    }

    const revealSecret = async () => {
        setLoading(1);
        setRevealLoading(1);
        try {
            console.log({signingKey});
            const {ethereum} = window;
            if (!ethereum) {
                return new Error("No crypto wallet found. Please install it.");
            } else {


                // await provider.send("eth_requestAccounts", []);
                const provider = new ethers.providers.Web3Provider(ethereum, Keys.ETH_NET);
                const signer = provider.getSigner();

                const signature = await signer.signMessage(signingKey);
                const address = await signer.getAddress();

                let signatureData = {
                    signingKey: signingKey,
                    signature: signature,
                    address: address
                };

                Internal.revealApiSecret(signatureData).then(responseL4 => {
                    console.log(responseL4.data);
                    setRevealLoading(0);
                    setApiAccess(1);
                    setGeneratedClientSecret(responseL4.data);
                    loadingDone()
                }).catch(errL4 => {
                    setRevealLoading(0);
                    console.error(errL4);
                    loadingDone()
                })


            }
        } catch (err) {
            console.log(err.message);
            setRevealLoading(0);
            await loadingDone()
        }
    };

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
            if (accounts[0]) {
                Internal.walletCheck(accounts[0]).then(response45 => {
                    if (response45.data.apiAccess === 1) {

                        // connectWallet();

                        setApiInitKey(response45.data.apiInitKey);
                        setApiAccess(1);
                        setClientId(response45.data.clientId);
                        setSigningKey(response45.data.signingKey);

                        document.getElementById("cardHead").style.display = "none";


                    } else if (response45.data.apiAccess === 0) {
                        setApiAccess(0);
                        loadingDone()
                    }
                })
            }

            await loadingDone()
        } catch (error) {
            console.log(error);
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
                    contractAddress,
                    contractABI,
                    signer
                );

                console.log(currentAccount);
                console.log("Started to the BlackHole...")

                const coffeeTxn = await buyMeACoffee.ethPay("ethpay-api_init", apiInitKey, {value: ethers.utils.parseEther(Keys.API_INIT_PAYMENT)});

                await coffeeTxn.wait();

                console.log("mined ", coffeeTxn.hash);

                console.log("BlackHole Protocol - Completed");

                // L3
                Internal.apiInit({address: currentAccount, txHash: coffeeTxn.hash}).then(response => {
                    console.log("API enable");
                    setGeneratedClientSecret("");
                    setApiAccess(1)
                    setClientId(response.data.clientId);


                    setOpen(true);


                    isWalletConnected();
                    document.getElementById("cardHead").style.display = "none";
                    setPaymentLoading(0);
                }).catch(error => {
                    console.log(error);
                    setPaymentLoading(0);
                })

                // Clear the form fields.
                // setName("");
                // setMessage("");
            }
        } catch (error) {
            console.log(error);
            setPaymentLoading(0);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBetaClose = () => {
        setBetaOpen(false);
    }

    function openEthPayLink() {
        window.open("./send/" + currentAccount, '_blank').focus();
    }


    useEffect(() => {
        isWalletConnected().then(() => {
        });
    }, []);

    return (
        <div>
            {loading === 1 ? <LinearProgress/> : ""}
            {paymentLoading === 1 ? <LinearProgress color={"secondary"}/> : ""}
            <Navbar/>
            <div className={"main-div"}>
                <Helmet>
                    <title>EthPay | Decentralised ERC-20 Payment Gateway</title>
                    <script type="text/javascript"
                            src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
                </Helmet>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    // action={action}
                >
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        Transaction successful
                    </Alert>
                </Snackbar>
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
                <div className={"hero con-mid"}>
                    <div className={"circle-1"}></div>
                    <div className={"circle-2"}></div>
                    <div className={"circle-3"}></div>
                    <div className={"circle-4"}></div>
                    <div className={"main-card ethpay-card con-mid"} id={"main-card"}>
                        <div id={"cardHead"}>
                            <img src={"/img/logo-white.png"} className={"main-logo"} alt={"ethpay logo"}/>
                            <h6 className={"sub-title"}>ERC-20 Payment Gateway - Beta</h6>
                        </div>
                        {currentAccount ? (
                            <div>
                                {/*<form>*/}
                                <div className={"home-button-row"}>
                                    <div style={{marginTop: "12px"}}>
                                        <button
                                            type="button"
                                            className={"connect-btn home-button-1"}
                                            onClick={openEthPayLink}
                                        >
                                            EthPay Link
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            onClick={ethPay}
                                            className={"connect-btn home-button-2"}
                                        >
                                            {apiAccess === 0 ?

                                                paymentLoading === 1 ?
                                                    <CircularProgress size="1rem" color={"inherit"} style={{
                                                        marginBottom: "-2px",
                                                    }}/>
                                                    :
                                                    "Enable API Access"

                                                :

                                                paymentLoading === 1 ?
                                                    <CircularProgress size="1rem" color={"inherit"} style={{
                                                        marginBottom: "-2px",
                                                    }}/>
                                                    : apiDone === 1 ? "Done" : "Reset API Secret"

                                            }
                                        </button>
                                    </div>
                                </div>
                                {apiAccess === 1 ?
                                    <div>
                                        <div id={"apiClientId"} className={"api-client-id"}>
                                            <p>Client ID (client_id)</p>
                                            <code className={"code-span"}>{clientId}</code>
                                        </div>
                                        {clientSecretGenerated ? <div id={"apiSecret"} className={"api-secret"}>
                                                <p>Client Secret (client_secret)</p>
                                                <span>
                                                <code className={"code-span secret-span"}>{clientSecretGenerated}</code>
                                            </span>
                                            </div> :
                                            <div id={"apiSecret-reveal"} className={"api-secret"}>
                                                <p>Client Secret (client_secret)</p>
                                                <button className={"connect-btn"} onClick={revealSecret}>
                                                    {
                                                        revealLoading === 1 ?
                                                            <CircularProgress size="1rem" color={"inherit"} style={{
                                                                marginBottom: "-2px",
                                                            }}/>
                                                            :
                                                            "Reveal Secret"
                                                    }
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    : ""}
                                {/*</form>*/}
                            </div>
                        ) : (
                            <button className={"connect-btn"} onClick={connectWallet}>
                                {loading === 1 ?
                                    <CircularProgress size="1rem" color={"inherit"} style={{
                                        marginBottom: "-3px",
                                    }}/> : "Connect"}</button>
                        )}
                    </div>
                    <div className={"hero-sub"}>
                        <h6>
                            Anonymous & Decentralised
                        </h6>
                    </div>
                </div>
                {/*{currentAccount && (<h1>When wallet connected</h1>)}*/}
            </div>
        </div>
    )
}

import React, {Component} from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import Navbar from "./layouts/Navbar";

export default class Guide extends Component {
    render() {
        return (
            <div className={"con-mid"}>
                <Navbar/>
                <div style={{padding: "20px", minHeight: "calc(100vh - 156px)"}}>
                    <Helmet>
                        <title>Guide</title>
                        <script type="text/javascript"
                                src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                                async></script>
                    </Helmet>
                    <div className={"big-card"}>
                        <h1>API Guide</h1>
                        <p>
                            EthPay API lets you integrate EthPay with your website, web application or any other
                            application
                            at the code level. To start a payment request and send your customer to the EthPay Payment
                            Gateway to complete the payment, it provides a straightforward HTML Form-based POST API.
                            When a
                            payment is accepted, a server callback with a checksum to validate the response parameters
                            notifies the specified URL (notify_url) of the payment status. Based on the payment status,
                            you
                            can update and verify your system using those response parameters & checksum.
                        </p>
                        <p>
                            *You need your EthPay Client ID & Client Secret to integrate with API. To enable API access,
                            visit the <Link to={"/"} className={"link"}>homepage</Link>.
                        </p>
                        <br/>
                        <h1>1. Inputs - POST Send</h1>
                        <strong>Redirecting Client to EthPay Payment Gateway</strong>
                        <p style={{paddingTop: "15px"}}>
                            You can easily use an HTML Form to submit the below POST parameters to EthPay Payment
                            Gateway,
                            regardless of your scripting language. When you submit the form, your client will be
                            securely
                            redirected to the EthPay Payment Gateway.
                        </p>
                        <ul>
                            <li>Action URL: <code className="code-span">https://ethpay-api.bysatha.com/api/v1/pay</code>
                            </li>
                            <br/>
                            <li>Required POST Parameters:</li>
                            <ol style={{paddingTop: "10px", lineHeight: "30px"}}>
                                <li><code className="code-span">client_id</code> - EthPay Client ID</li>
                                <li><code className="code-span">return_url</code> - URL to redirect users when success
                                </li>
                                <li><code className="code-span">cancel_url</code> - URL to redirect users when cancelled
                                </li>
                                <li><code className="code-span">notify_url</code> - URL to callback the status of the
                                    payment (Needs to be a URL accessible on
                                    a public IP/domain)
                                </li>
                                <li><code className="code-span">currency</code> - ETH (We currently only support ETH
                                    payments)
                                </li>
                                <li><code className="code-span">amount</code> - Total Payment Amount</li>
                            </ol>
                        </ul>
                        <br/>
                        <p>Code Sample</p>
                        <pre className={"code-span"} style={{borderRadius: "5px", padding: "5px"}}>
                        <code>
                            {"<html>\n<body>\n<form method=\"post\" action=\"https://ethpay-api.bysatha.com/api/v1/pay\">   \n    <input type=\"hidden\" name=\"client_id\" value=\"YOUR_CLIENT_ID\">\n    <input type=\"hidden\" name=\"return_url\" value=\"http://sample.com/return\">\n    <input type=\"hidden\" name=\"cancel_url\" value=\"http://sample.com/cancel\">\n    <input type=\"hidden\" name=\"notify_url\" value=\"http://sample.com/notify\">  \n    <input type=\"text\" name=\"currency\" value=\"ETH\">\n    <input type=\"text\" name=\"amount\" value=\"0.02\">  \n    <input type=\"submit\" value=\"Buy Now\">   \n</form> \n</body>\n</html>"}
                        </code>
                    </pre>
                        <br/>
                        <h1>2. Outputs - POST Retrieve</h1>
                        <strong>Listening to Payment Notification</strong>
                        <p style={{paddingTop: "15px"}}>
                            As soon as the payment is processed, EthPay sends the payment status to the <b>notify
                            URL</b> you
                            specified in the API as a server callback and redirects the customer to the return URL on
                            your
                            website. The payment notification will include the following data as POST parameters, so you
                            must host a script on your notify URL to retrieve and update your database accordingly.
                        </p>
                        <ul>
                            <li>Output POST Parameters:</li>
                            <ol style={{paddingTop: "10px", lineHeight: "30px"}}>
                                <li><code className="code-span">transaction_id</code> - EthPay Transaction ID</li>
                                <li><code className="code-span">tx_hash</code> - Transaction hash (Txn hash)</li>
                                <li><code className="code-span">from_wallet</code> - Transaction from wallet address
                                </li>
                                <li><code className="code-span">to_wallet</code> - Transaction to (your) wallet address
                                </li>
                                <li><code className="code-span">currency</code> - ETH (We currently only support ETH
                                    payments)
                                </li>
                                <li><code className="code-span">amount</code> - Total Payment Amount</li>
                                <li><code className="code-span">block_number</code> - Transaction mined block</li>
                                <li><code className="code-span">sha256sig</code> - Encrypted signature to verify the
                                    payment
                                </li>
                            </ol>
                            <br/>
                            <li>
                                The request parameters are encoded in the <code
                                className={"code-span"}>application/x-www-form-urlencoded</code> format. (not&nbsp;
                                <strike><code className={"code-span"}>application/json</code></strike>)
                            </li>
                            <li>
                                The payment notification cannot be tested on localhost. For EthPay to directly notify
                                your
                                server, you must submit a publicly accessible IP or domain-based URL as your notify url.
                            </li>
                            <li>
                                When redirecting the customer back to your website, no payment status parameters are
                                passed
                                to the return url. You must update your database after your script retrieves the payment
                                status on notify url and then show the payment status to your customer in the page on
                                return
                                url by retrieving the status from your database.
                            </li>
                        </ul>
                        <br/>
                        <h1>3. Verify</h1>
                        <strong>Verifying the Payment Status</strong>
                        <p style={{paddingTop: "15px"}}>
                            Before acting on the payment response, it is critical to verify the Payment Notification.
                            You
                            can perform the verification using the <code className={"code-span"}>sha256sig</code> checksum
                            parameter generated and sent by EthPay
                            along with the payment notification as shown below.
                        </p>
                        <br/>
                        <p>Node.js</p>
                        <pre className={"code-span"} style={{borderRadius: "5px", padding: "5px"}}>
                        <code>
                            {"const sha256sig = \n" +
                                "crypto.createHash('sha256').update(\n" +
                                "   txHash + crypto.createHash('sha256').update(\n" +
                                "       secret\n" +
                                "   ).digest('hex')\n" +
                                ").digest('hex').toString().toUpperCase();\n" +
                                "\n"}
                        </code>
                    </pre>
                        <br/>
                        <p>PHP</p>
                        <pre className={"code-span"} style={{borderRadius: "5px", padding: "5px"}}>
                        <code>
                            {"$sha256sig = strtoupper(\n" +
                                "    hash('sha256', (\n" +
                                "        $tx_hash .\n" +
                                "        hash('sha256', 'Vf2yyEAj6PBXQ7IhO1VTWPd5039px9t1E0vVx6') // hex\n" +
                                "    ))\n" +
                                ");\n"}
                        </code>
                    </pre>
                        <br/>
                        <p>
                            Once you have received the payment status parameters from EthPay, you can generate this
                            checksum
                            locally using the <code className={"code-span"}>client_id</code>, <code
                            className={"code-span"}>wallet</code> and <code
                            className={"code-span"}>transaction_hash</code> sent by the payment notification, as well
                            as the <code className={"code-span"}>client_secret</code> you have on hand. If the payment
                            notification is valid, your locally
                            generated checksum should match the <code className={"code-span"}>sha256sig</code> sent by
                            EthPay.
                        </p>
                        <br/>
                        <p>You can host below script at your <code className={"code-span"}>notify_url</code></p>
                        <p>Code Sample (Node.js + Express.js)</p>
                        <pre className={"code-span"} style={{borderRadius: "5px", padding: "5px"}}>
                        <code>
                            {"const crypto = require('crypto');\n\n" +
                                "router.route('notify_url').get((req, res, next) => {\n" +
                                "    const transaction_id = req.body.transaction_id;\n" +
                                "    const tx_hash = req.body.tx_hash;\n" +
                                "    const from_wallet = req.body.from_wallet;\n" +
                                "    const to_wallet = req.body.to_wallet;\n" +
                                "    const currency = req.body.currency;\n" +
                                "    const amount = req.body.amount;\n" +
                                "    const blockNumber = req.body.blockNumber;\n" +
                                "    const sha256sig = req.body.sha256sig;\n" +
                                "\n" +
                                "    const local_sha256sig = crypto.createHash('sha256').update(\n" +
                                "       tx_hash + crypto.createHash('sha256').update(\n" +
                                "           secret\n" +
                                "       ).digest('hex')\n" +
                                "    ).digest('hex').toString().toUpperCase();\n" +
                                "\n" +
                                "    if (local_sha256sig.toString() === local_sha256sig.toString()) {\n" +
                                "        // Update your database as payment success\n" +
                                "    }\n" +
                                "});"}
                        </code>
                    </pre>
                        <br/>
                        <p>Code Sample (PHP)</p>
                        <pre className={"code-span"} style={{borderRadius: "5px", padding: "5px"}}>
                        <code>
                            {"<?php\n" +
                                "$transaction_id = $_POST['transaction_id'];\n" +
                                "$tx_hash = $_POST['tx_hash'];\n" +
                                "$from_wallet = $_POST['from_wallet'];\n" +
                                "$to_wallet = $_POST['to_wallet'];\n" +
                                "$currency = $_POST['currency'];\n" +
                                "$amount = $_POST['amount'];\n" +
                                "$blockNumber = $_POST['blockNumber'];\n" +
                                "$sha256sig = $_POST['sha256sig'];\n" +
                                "\n" +
                                "$local_sha256sig = strtoupper(\n" +
                                "    hash('sha256', (\n" +
                                "        $tx_hash .\n" +
                                "        hash('sha256', 'Vf2yyEAj6PBXQ7IhO1VTWPd5039px9t1E0vVx6') // hex\n" +
                                "    ))\n" +
                                ");" +
                                "\n" +
                                "if ($local_sha256sig == $sha256sig) {\n" +
                                "        //TODO: Update your database as payment success\n" +
                                "}\n" +
                                "?>"}
                        </code>
                    </pre>

                    </div>
                </div>
            </div>
        );
    }
}

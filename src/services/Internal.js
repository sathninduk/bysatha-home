import axios from 'axios';
import Keys from "../config/Keys";

const API_URL_DOMAIN = Keys.API_URL;
const API_URL = API_URL_DOMAIN + 'api/v1/';

class Internal {
    // Server start
    // 00
    serverStart() {
        return axios.get(API_URL + 'server-check', {});
    }

    // Landing
    // L1 - Wallet Check
    walletCheck(accountHash) {
        return axios.get(API_URL + 'account?id=' + accountHash, {});
    }
    // L2 - Wallet Init
    walletInit(accountHash) {
        return axios.post(API_URL + 'account', accountHash, {});
    }
    // L3 - API Init
    apiInit(accountHash) {
        return axios.put(API_URL + 'account', accountHash, {});
    }
    // L4 - Verify signature and reveal API key
    revealApiSecret(signatureData) {
        return axios.post(API_URL + 'api-secret-reveal', signatureData, {});
    }

    // Pay
    // P1 - Transaction Check
    transactionCheck(transaction) {
        return axios.get(API_URL + 'pay?transaction=' + transaction, {});
    }
    // P2 - Transaction Done Notification - Client
    transactionClientNotify(transactionData) {
        return axios.post(API_URL + 'notify', transactionData, {});
    }

    // SEND
    // S1 - Check wallet in DB for Sending
    sendWalletCheck(wallet) {
        return axios.get(API_URL + 'send/' + wallet, {});
    }

    // S2 - Sent payments log
    sentLog(txHash) {
        return axios.post(API_URL + 'send', txHash, {});
    }
}

export default new Internal();

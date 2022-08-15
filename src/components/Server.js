import React, {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Internal from "../services/Internal";

export default function Server() {
    const [backend, setBackend] = useState(true);

    const serverCheck = async () => {
        await Internal.serverStart().then(async r => {
            if (r.data.response === "started") {
                await console.log(r.data.response);
            }
        })
    }

    useEffect(() => {
        serverCheck().then(() => {
            setBackend(false)
        });
    }, []);

    return (
        <div className={"con-mid"}>
            {backend === true ? <div className={"server-loader con-mid"}>
                <div>
                    <CircularProgress size="1rem" color="inherit" style={{marginBottom: "20px"}}/>
                    <p style={{
                        marginBottom: "0",
                        color: "#fff",
                        fontFamily: "Ubuntu,Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif"
                    }}>The backend is loading at Heroku</p>
                    <span style={{
                        color: "#d0d0d0",
                        fontSize: "10px",
                        fontFamily: "Ubuntu,Segoe UI,SegoeUI,Helvetica Neue,Helvetica,Arial,sans-serif"
                    }}>EthPay Beta - Technical Preview</span>
                </div>
            </div> : ""}
        </div>
    );
}

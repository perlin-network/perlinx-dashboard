import React, { useState, createContext, useCallback, useEffect } from "react"
import {
    useWeb3React,
    UnsupportedChainIdError
} from "@web3-react/core";
import { injected } from "../connector"


const connectorsByName = {
    Injected: injected
};

const useWallet = () => {
    // Initialize Web3 wallet
    const context = useWeb3React();
    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error
    } = context;
    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState();


    useEffect(() => {
        console.log('running')
        if (activatingConnector && activatingConnector === connector) {
            setActivatingConnector(undefined);
        }
    }, [activatingConnector, connector]);

    const currentConnector = connectorsByName.Injected;

    const connect = useCallback(() => {
        setActivatingConnector(currentConnector);
        activate(currentConnector);
    }, [currentConnector])

    return {
        connect
    }

}

export default useWallet
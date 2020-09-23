import React, { useState, useEffect, useMemo, useCallback, useReducer, createContext } from 'react';
import axios from "axios"
import { Spinner } from "reactstrap"
import { API_ENDPOINT } from "../constants" 

export const SnapshotContext = createContext({});

const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_DATA':
                    return {
                        ...prevState,
                        data: action.data,
                        isLoading: false,
                    };
                case 'SET_REWARD':
                    return {
                        ...prevState,
                        rewardPerHundredPerl: action.data
                    }
            }
        },
        {
            isLoading: true,
            rewardPerHundredPerl : {}
        }
    )

    const { isLoading, data, rewardPerHundredPerl } = state;

    const apy = data ? ((1000000/ (data.stat.totalPerlStaked * 2)) * 52 * 100) : 0

    const snapshotContext = useMemo(
        () => ({
            getGasData: async () => {
                try {
                    const { data } = await axios.get(`${API_ENDPOINT}/gas`)
                    return data
                } catch (e) {
                    return {}
                }
            },
            setRewardPerHundred: (value) => {
                dispatch({ type: 'SET_REWARD', data: value });
            },
            
            isLoading,
            data,
            rewardPerHundredPerl,
            apy
        }),
        [isLoading, data, rewardPerHundredPerl, apy]
    );

    const loadData = async () => {
        try {
            const statResponse = await axios.get(`${API_ENDPOINT}/stat`)
            const feedResponse = await axios.get(`${API_ENDPOINT}/data`)
            const data = {
                stat : statResponse.data,
                feed : feedResponse.data
            }
            dispatch({ type: 'RESTORE_DATA', data });
        } catch (error) {
            alert("Server error ")
        }
    }

    useEffect(() => {
        loadData();
    }, []);


    return (
        <SnapshotContext.Provider value={snapshotContext}>
            <>
                {isLoading ? (
                    <div style={{ display : "flex", height: "100vh" }}>
                        <Spinner color="light" style={{margin : "auto "}} />
                    </div>
                ) : (
                        children
                    )}
            </>
        </SnapshotContext.Provider>
    )
}


export default Provider
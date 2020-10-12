import React, { useContext, useState, useCallback, useEffect } from 'react';
import styled from "styled-components"
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import Button from "../ui/Button"
import { SnapshotContext } from "../../hooks/useSnapshot"

const Wrapper = styled.section`
    .label {
        font-size: 12px;
    }

    .selection {
        cursor: pointer;
        padding: 0;
        display: flex;
    }

    h4 { 
        font-size: 14px;
        color: #B6D8F9;
    }
    p {
        font-size: 14px;
        color: #fff;
    }

    .font-large {
        font-size: 18px;
    }


    
`

const Divider = styled.div`
     
    width: 100%; 
    border-bottom: 1px solid rgba(255,255,255,0.1);
    
`

const Header = () => <h3>Calculate your estimated rewards</h3>

const RewardCard = () => {
    const { rewardPerHundredPerl } = useContext(SnapshotContext);
    const [amount, setAmount] = useState(0)
    const [pool, setPool] = useState()
    const [result, setResult ] = useState(0)

    useEffect(() => {
        const pools = Object.keys(rewardPerHundredPerl)
        if (pools[0]) {
            setPool(pools[0])
        }
    }, [rewardPerHundredPerl])

    const handleChange = (e) => {
        const newAmount = e.target.value.replace(/^0+/, '')
        setAmount(parseInt(newAmount, 10))
    }

    const handlePool = (e) => {
        setPool(e.target.value)
    }

    const calculate = useCallback(() => { 
        if (pool && (Number(amount) > 0)) {

            try {
                const result = (amount / 100) * rewardPerHundredPerl[pool]
                setResult(result)
            } catch (e) {
                console.log(e)
            }

        }
    }, [pool, amount, rewardPerHundredPerl])

    return (
        <Wrapper>
            <Header />
            <Row style={{marginTop : 20 }}>
                <Col xs="6">
                    <FormGroup>
                        <Label className="label" for="pool">SELECT A POOL</Label>
                        <Input onChange={handlePool} className="selection" type="select" name="pool" id="pool">
                            {Object.keys(rewardPerHundredPerl).map((name, index) =>  <option value={name} key={index}>{name}</option>) }
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs="6"> 
                    <FormGroup>
                        <Label className="label" for="amount">PERL TO STAKE</Label>
                        <Input value={amount} onChange={handleChange} type="number" name="amount" id="amount" />
                    </FormGroup>
                </Col>
            </Row>
            <Row style={{padding: 15}}>
                <Button onClick={calculate} >
                    Calculate
                </Button>
            </Row>
            <Row style={{padding: 15}}>
                <Divider />
            </Row>
            <Row style={{padding: 15, display : "flex", flexDirection : "row"}}>
                <div style={{ marginRight: 40 }}>
                    <h4>Est. PERL rewards</h4>
                    <p className="font-large">
                        {`${result.toLocaleString()} PERL`}
                    </p>
                </div>
            </Row>
        </Wrapper>
    )

}

export default RewardCard
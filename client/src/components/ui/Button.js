import { Button as B } from "reactstrap"
import styled from "styled-components"
import { colors } from "../../constants"

const Button = styled(B).attrs(props => ({
    color: "info"
}))`
    background-color: ${colors.buttonBackground};
    border: 0px;
    color: #1D3046;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 36px;
    height: 40px;
`

export default Button
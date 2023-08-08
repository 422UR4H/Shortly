import styled from "styled-components";

const Input = styled.input`
    font-family: 'Lexend Deca', sans-serif;
    color: black;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;

    width: 769px;
    height: 60px;
    border: 1px solid #78B15940;
    border-radius: 12px;
    margin-bottom: 25px;
    padding-left: 22px;
    box-shadow: 0px 4px 24px 0px #78B1591F;

    &::placeholder {        
        font-family: 'Lexend Deca', sans-serif;
        color: #9C9C9C;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
    }
`;

export default Input;
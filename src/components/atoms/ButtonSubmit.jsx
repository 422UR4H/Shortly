import { styled } from "styled-components";

export default function ButtonSubmit({ children }) {
    return (
        <StyledButtonSubmit type="submit">
            {children}
        </StyledButtonSubmit>
    );
}

const StyledButtonSubmit = styled.button`
    background-color: #5D9040;
    color: white;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;

    width: 182px;
    height: 60px;
    border: none;
    border-radius: 12px;
    margin-top: 36px;

    cursor: pointer;
`;
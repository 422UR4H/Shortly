import { styled } from "styled-components";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";

export default function SignTemplate({ children }) {
    return (
        <StyledTemplate>
            <Header />
            <Logo />
            {children}
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        margin-top: 128px;
    }
`;
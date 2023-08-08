import { styled } from "styled-components";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";
import Ranking from "../atoms/Ranking.jsx";
import useToken from "../../hooks/useToken.js";

export default function RankingTemplate() {
    const { token } = useToken();

    return (
        <StyledTemplate>
            <Header />
            <Logo />
            <Ranking />
            {!token && <h3>Crie sua conta para usar nosso serviço!</h3>}
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
        margin-top: 82px;
    }
`;
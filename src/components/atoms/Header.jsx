import { Link } from "react-router-dom";
import { styled } from "styled-components";
import useToken from "../../hooks/useToken.jsx";

export default function Header() {
    const token = useToken();

    return (
        <StyledHeader>
            {token ?
                <>
                    <p> </p>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/ranking">Ranking</Link>
                        <Link to="/logout">Sair</Link>
                    </nav>
                </>
                :
                <>
                    <p className="green">Seja bem-vindo(a), Pessoa!</p>
                    <nav>
                        <Link to="/login" className="green">Entrar</Link>
                        <Link to="/signup">Cadastrar-se</Link>
                    </nav>
                </>
            }
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    font-size: 14px;
    line-height: 18px;
    height: 80px;
    width: 100vw;
    margin-bottom: 8px;

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;

    .green {
        color: #5D9040;
    }

    nav {
        display: flex;
        gap: 27px;

        a {
            color: #9C9C9C;
        }
    }
`;
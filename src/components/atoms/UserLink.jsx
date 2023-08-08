import { styled } from "styled-components";
import trash from "../../images/trash.png";
import api from "../../services/api.js";
import useToken from "../../hooks/useToken.js";

export default function UserLink({ userLink }) {
    const { token } = useToken();
    const { shortUrl, url, visitCount, id } = userLink;

    function deleteLink() {
        api.deleteLink(token, id)
            .catch((err) => alert(err.response.data));
    }

    return (
        <StyledUserLink>
            <>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </>
            <button onClick={deleteLink}><img src={trash} alt="Excluir" /></button>
        </StyledUserLink>
    );
}

const StyledUserLink = styled.div`
    background-color: #80CC74;
    color: white;
    width: 917px;
    height: 60px;
    border-radius: 12px;
    box-shadow: 0px 4px 24px 0px #78B1591F;
    margin-top: 41px;
    padding-right: 130px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: relative;

    button {
        background-color: white;
        width: 130px;
        height: 60px;
        border: none;
        border-radius: 0px 12px 12px 0px;
        box-shadow: 0px 4px 24px 0px #78B1591F;

        position: absolute;
        right: 0px;
    }
`;
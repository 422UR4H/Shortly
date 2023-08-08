import { styled } from "styled-components";
import trophy from "../../images/trophy.png";
import api from "../../services/api.js";
import { useEffect, useState } from "react";


export default function Ranking() {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        api.getRanking()
            .then(({ data }) => setRanking(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <StyledRanking>
            <div>
                <img src={trophy} alt="trophy" />
                <h2>Ranking</h2>
            </div>
            <ol>
                {ranking && ranking.map((r, i) => <li key={i}>{`${r.name} - ${r.linksCount} links - ${r.visitCount} visualizações`}</li>)}
            </ol>
        </StyledRanking>
    );
}

const StyledRanking = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

    &>div {
        display: flex;
        gap: 10px;
        margin-bottom: 57px;
    }

    h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 45px;
    }

    ol {
        width: 1017px;
        height: 241px;
        border: 1px solid #78B15940;
        border-radius: 24px 24px 0px 0px;
        box-shadow: 0px 4px 24px 0px #78B1591F;
        
        li {
            font-size: 22px;
            line-height: 28px;
            margin-block: 13px;
            padding-inline: 40px;
            /* font-size: 22px;
            font-weight: 500;
            line-height: 28px; */
        }
    }
`;
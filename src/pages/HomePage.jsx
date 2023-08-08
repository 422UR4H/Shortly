import useToken from "../hooks/useToken.js";
import DashboardTemplate from "../components/templates/DashboardTemplate.jsx";
import RankingTemplate from "../components/templates/RankingTemplate.jsx";


export default function HomePage() {
    const { token } = useToken();
    // const token = true;

    return (
        <>
            {token ?
                <DashboardTemplate />
                :
                <RankingTemplate />
            }
        </>
    );
}

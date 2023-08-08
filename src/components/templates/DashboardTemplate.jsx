import { styled } from "styled-components";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";
import Input from "../styles/Input.js";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import UserLink from "../atoms/UserLink.jsx";
import useToken from "../../hooks/useToken.js";


export default function DashboardTemplate() {
    const { token } = useToken();
    const [userLinks, setUserLinks] = useState([]);

    useEffect(() => {
        api.getLinks(token)
            .then(({ data }) => setUserLinks(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <StyledTemplate>
            <Header />
            <Logo />
            <Form textButton="Encurtar Link">
                <Input type="text" placeholder="Links que cabem no bolso" />
            </Form>
            <>
                {userLinks.map((ul) => <UserLink key={ul.id} userLink={ul} />)}
            </>
        </StyledTemplate>
    );
}

const StyledTemplate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form {
        margin-top: 136px;
        flex-direction: row;

        input {
            margin-bottom: 0px;
            margin-right: 70px;
            width: 769px;
        }

        button{
            margin-top: 0px;
        }
    }
`;
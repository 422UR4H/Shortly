import { styled } from "styled-components";
import ButtonSubmit from "../atoms/ButtonSubmit.jsx";
import Header from "../atoms/Header.jsx";
import Logo from "../atoms/Logo.jsx";
import Form from "../molecules/Form.jsx";
import Input from "../styles/Input.js";

export default function DashboardTemplate() {
    return (
        <StyledTemplate>
            <Header />
            <Logo />
            <Form textButton="Encurtar Link">
                <Input type="text" placeholder="Links que cabem no bolso"/>
            </Form>
            
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
        }

        button{
            margin-top: 0px;
        }
    }
`;
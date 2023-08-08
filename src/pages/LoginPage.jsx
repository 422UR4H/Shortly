import { useNavigate } from "react-router-dom";
import Form from "../components/molecules/Form.jsx";
import Input from "../components/styles/Input.js";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import useForm from "../hooks/useForm.js";
import useToken from "../hooks/useToken.js";
import api from "../services/api.js";


export default function LoginPage() {
    const navigate = useNavigate();
    const { login } = useToken();
    const { form, handleForm } = useForm({ email: "", password: "" });

    function enter(e) {
        e.preventDefault();

        api.signin(form)
            .then(({ data }) => {
                login(data);
                navigate("/");
            })
            .catch((err) => alert(err.response.data.message));
    }

    return (
        <SignTemplate>
            <Form textButton="Entrar" onSubmit={enter}>
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleForm}
                    required
                />
            </Form>
        </SignTemplate>
    );
}

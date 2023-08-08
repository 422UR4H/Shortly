import Form from "../components/molecules/Form.jsx";
import Input from "../components/styles/Input.js";
import SignTemplate from "../components/templates/SignTemplate.jsx";
import useForm from "../hooks/useForm.jsx";

export default function SignupPage() {
    const { form, handleForm } = useForm({ name: "", email: "", password: "", confirm: "" });

    return (
        <SignTemplate>
            <Form textButton="Criar Conta">
                <Input
                    name="name"
                    type="text"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleForm}
                    required
                />
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
                <Input
                    name="confirm"
                    type="password"
                    placeholder="Confirmar senha"
                    value={form.confirm}
                    onChange={handleForm}
                    required
                />
            </Form>
        </SignTemplate>
    );
}

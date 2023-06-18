import "../../styles/auth/RegisterForm.css";
import AuthTemplate from "../../components/templates/AuthTemplate.jsx";
import RegisterForm from "../../components/auth/RegisterForm.jsx";

function RegisterPage() {
    return (
        <AuthTemplate>
            <h1>회원가입</h1>
            <RegisterForm/>
        </AuthTemplate>
    );
}

export default RegisterPage;

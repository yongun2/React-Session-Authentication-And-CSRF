import "../../styles/auth/LoginForm.css";
import AuthTemplate from "../../components/templates/AuthTemplate.jsx";
import LoginForm from "../../components/auth/LoginForm.jsx";

function LoginPage() {
    return (
        <AuthTemplate>
            <h1>로그인</h1>
            <LoginForm/>
        </AuthTemplate>

    );
}

export default LoginPage;

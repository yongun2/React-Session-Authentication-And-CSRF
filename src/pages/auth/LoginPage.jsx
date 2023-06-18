import "../../styles/auth/LoginPage.css";

function LoginPage() {
    return (
        <div className={"login-container"}>
            <h1>로그인</h1>
            <form>
                <input placeholder={"아이디"} type={"text"}/>
                <input placeholder={"비밀번호"} type={"password"}/>
                <input className={"submit-btn"} type={"submit"} value={"로그인"}/>
            </form>
        </div>
    );
}

export default LoginPage;

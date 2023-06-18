import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/auth/LoginForm.css';

function LoginForm(props) {
    return (
        <form className={"login-form"}>
            <input placeholder={"아이디"} type={"text"}/>
            <input placeholder={"비밀번호"} type={"password"}/>
            <input className={"submit-btn"} type={"submit"} value={"로그인"}/>
        </form>
    );
}

LoginForm.propTypes = {

};

export default LoginForm;

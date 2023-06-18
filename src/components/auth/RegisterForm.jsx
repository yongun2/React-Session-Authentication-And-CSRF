import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/auth/RegisterForm.css';

function RegisterForm(props) {
    return (
        <form className={"register-form"}>
            <div className={"username-group"}>
                <input className={"username-input"} placeholder={"아이디"} type={"text"}/>
                <input className={"duplicate-btn"} value={"중복확인"} type={"submit"}/>
            </div>
            <input placeholder={"비밀번호"} type={"password"}/>
            <input placeholder={"이름"} type={"text"}/>
            <input placeholder={"닉네임"} type={"text"}/>
            <input placeholder={"휴대전화 번호"} type={"text"}/>
            <input className={"submit-btn"} type={"submit"} value={"회원가입"}/>
        </form>
    );
}

RegisterForm.propTypes = {

};

export default RegisterForm;

import React, {useMemo} from 'react';
import {Link} from "react-router-dom";
import '../../styles/auth/AuthNav.css';
function AuthNav() {

    const navList = useMemo(() => [
        {
            id: "register",
            path: "/register",
            name: "회원가입",
        },
        {
            id: "findId",
            path: "/find-id",
            name: "아이디 찾기",
        },
        {
            id: "findPassword",
            path: "/find-password",
            name: "비밀번호 찾기",
        },
    ], []);

    return (
        <div className={"nav-container"}>
            {
                navList.map(navItem => (
                    <Link key={navItem.id} to={navItem.path}>{navItem.name}</Link>
                ))
            }
        </div>
    );
}

export default AuthNav;

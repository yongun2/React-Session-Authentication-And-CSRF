import RegisterPage from "./pages/auth/RegisterPage.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage.jsx";


function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Navigate replace to="/login"/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/register"} element={<RegisterPage/>}/>
        </Routes>
    );
}

export default App;

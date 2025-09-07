// @ts-ignore
import React, {useState} from "react";
import './login.css'
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
// @ts-ignore
import Title from "../../components/title-login/Title.tsx";
// @ts-ignore
import FormLogin from "../../components/form-login/FormLogin.tsx";
// @ts-ignore
import ButtonLogin from "../../components/button-login/ButtonLogin.tsx";
// @ts-ignore
import AuthLogin from "../../components/auth-login/AuthLogin.tsx";
export default function Login()  {
    const [usename, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [typePass, setTypePass] = useState("password")
    const handleClickShowPass = () => {
        setTypePass(typePass === "password" ? "text" : "password")
        setShowPass(!showPass)
    }
    const handleChangeInputUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleChangeInputPassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className="index-login">
                <div className="main-login">
                    <Title
                        content="Welcome Back"
                        description="Sign in to your account"
                    />
                    <FormLogin
                        usename={usename}
                        password={password}
                        typePass={typePass}
                        showPass={showPass}
                        onChangeUsename={handleChangeInputUsername}
                        onChangePassword={handleChangeInputPassword}
                        clickShowpass={handleClickShowPass}
                    />
                    <ButtonLogin/>
                    <div className="line-login">
                        <div className="line"></div>
                        <span className="line-main">or continue with</span>
                        <div className="line"></div>
                    </div>
                    <AuthLogin/>
                    <div className="register-login">
                        <p>Don't have an account? <a>Sign up</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}
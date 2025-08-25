import {useState} from "react";
import './login.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
                    <div className="title-login">
                        <h2>Welcome Back</h2>
                        <p>Sign in to your account</p>
                    </div>
                    <div className="form-login">
                        <div className="user-login">
                            <input type="text"
                                   value={usename}
                                   placeholder="Email Address"
                                   onChange={handleChangeInputUsername}
                            />
                        </div>
                        <div className="password-login">
                            <input type={typePass}
                                   value={password}
                                   placeholder="Password"
                                   onChange={handleChangeInputPassword}
                            />
                            {showPass ?
                                <FaEyeSlash color="white" onClick={handleClickShowPass}/> :
                                <FaEye color="white" onClick={handleClickShowPass}/>}
                        </div>
                    </div>
                    <div className="remember-login">
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                />
                                <span>Remember me</span>
                            </label>
                        </div>
                        <div>
                            <a>Forgot password?</a>
                        </div>
                    </div>
                    <div className="button-login">
                        <button>Sign In</button>
                    </div>
                    <div className="line-login">
                        <div className="line"></div>
                        <span className="line-main">or continue with</span>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
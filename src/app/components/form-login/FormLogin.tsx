import {FaEye, FaEyeSlash} from "react-icons/fa";
import "./formLogin.css"
// @ts-ignore
import React from "react";

export default function FormLogin({
                                      usename,
                                      password,
                                      typePass,
                                      showPass,
                                      onChangeUsename,
                                      onChangePassword,
                                      clickShowpass
                                  }) {
    return (
        <>
            <div className="form-login">
                <div className="user-login">
                    <input type="text"
                           value={usename}
                           placeholder="Email Address"
                           onChange={onChangeUsename}
                    />
                </div>
                <div className="password-login">
                    <input type={typePass}
                           value={password}
                           placeholder="Password"
                           onChange={onChangePassword}
                    />
                    {showPass ?
                        <FaEyeSlash color="white" onClick={clickShowpass}/> :
                        <FaEye color="white" onClick={clickShowpass}/>}
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
        </>
    )
}
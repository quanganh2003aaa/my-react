import {FcGoogle} from "react-icons/fc";
import {IoLogoGithub} from "react-icons/io";
// @ts-ignore
import React from "react";
import "./authLogin.css"
export default function AuthLogin(){
    return(
        <div className="auth-login">
            <div className="auth-main">
                <button>
                    <FcGoogle size="25px"/>Google
                </button>
                <button>
                    <IoLogoGithub size="25px"/>GitHub
                </button>
            </div>
        </div>
    )
}
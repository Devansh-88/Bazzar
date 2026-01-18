import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
  return (
    <div className="bg-[url('./assets/login-background.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="flex flex-col backdrop-blur-sm bg-white/1 rounded-xl border-amber-200 border-2 shadow-lg p-10 space-y-6 h-[70vh] w-[40vw]">
            <div className=" flex flex-col justify-center gap-6 h-full">
                <p>Welcome Back</p>
                <input type="text" placeholder="username or email" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <input type="password" placeholder="password" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <div className="flex justify-between">
                    <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">remember me</label>
                    </div>
                    <a href="">Forgot Password</a>
                </div>
                <button className="bg-amber-300 w-[20%] rounded-xl">login</button>
                <div className="flex">
                    <p>don't have an account?</p>
                    <button onClick={() => navigate("/register")} className="">sign up</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
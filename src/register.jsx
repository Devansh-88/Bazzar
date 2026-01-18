import React from "react";

function Register() {
  return (
    <div className="bg-[url('./assets/login-background.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center">
        <div className="flex flex-col backdrop-blur-sm bg-white/1 rounded-xl border-amber-200 border-2 shadow-lg p-10 space-y-6 h-[70vh] w-[40vw]">
            <div className=" flex flex-col justify-center gap-6 h-full">
                <p>Join the Agora of Olympus</p>
                <input type="text" placeholder="username" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <input type="text" placeholder="email" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <input type="password" placeholder="password" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <input type="password" placeholder="confirm password" className="p-1 border-2 border-amber-200 rounded-2xl"/>
                <button className="bg-amber-300 w-[20%] rounded-xl">register</button>
                <div className="flex">
                    <p>already have an account?</p>
                    <button className="">sign in</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;
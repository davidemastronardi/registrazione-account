import React from "react";
import {  useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Inserisci la tua e-mail</label>
          <input className="p-2 rounded" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Inserisci la password</label>
          <input className="p-2 rounded" type="password" />
        </div>
        <div>
          <button className="btn btn-primary">Accedi</button>
          <p className="text-blue-500 text-center mt-5 hover:cursor-pointer">
            Password dimenticata?
          </p>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <button onClick={()=>navigate("/registrazione")} className="btn btn-secondary">Crea nuovo account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = {
        identifier: "mastronardi_davide@hotmail.it",
        password: "villacanale14492"
    };
    fetch(process.env.REACT_APP_BASE_PATH + "auth/local", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
  };


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <form className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5" action="">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Inserisci la tua e-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Inserisci la password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded"
              type="password"
            />
          </div>
          <div>
            <button onClick={()=> handleSubmit()} className="btn btn-primary">Accedi</button>
            <p className="text-blue-500 text-center mt-5 hover:cursor-pointer">
              Password dimenticata?
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <button
              onClick={() => navigate("/registrazione")}
              className="btn btn-secondary"
            >
              Crea nuovo account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;

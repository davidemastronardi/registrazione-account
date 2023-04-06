import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openError, setOpenError]=useState(true);

  const handleSubmit = () => {
    const data = {
      identifier: email,
      password: password,
    };

    fetch(process.env.REACT_APP_BASE_PATH + "/auth/local", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
      
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.hasOwnProperty("jwt")) {
          navigate("/home")
        }
        if (data !== 200 ) {
          setOpenError(!openError)
        }
      });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
      {!openError&&<h1 className="text-red-500 p-4">Email e/o password non corretti.</h1>}
        <form
          className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5"
          action=""
        >
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
            <button type="button" onClick={() => handleSubmit("pino")} className="btn btn-primary">
              Accedi
            </button>
            <p className="text-blue-500 text-center mt-5 hover:cursor-pointer">
              Password dimenticata?
            </p>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <button
            type="button"
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

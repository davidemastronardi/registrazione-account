import React from "react";
import FormRegistrazione from "../components/FormRegistrazione";
import { useNavigate } from "react-router-dom";

const Registrazione = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div>
          <button className="p-2" type="button" onClick={()=>navigate("/")}>
          Torna al login
          </button>
        </div>
      <FormRegistrazione/>
    </div>
  );
};

export default Registrazione;

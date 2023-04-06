import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div>
          <button className="p-2" type="button" onClick={()=>navigate("/")}>
            Torna al login
          </button>
        </div>
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-6xl">Benvenuto nella comunity!</h1>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";

const FormRegistrazione = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const giorni = Array.from({ length: 31 }, (_, index) => 1 + index);
  const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  const anni = Array.from({ length: 104 }, (_, index) => 1920 + index);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="p-2 rounded" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cognome">Cognome</label>
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className="p-2 rounded" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Nuova password</label>
          <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="p-2 rounded" type="password" />
        </div>
        <div className=" w-full flex justify-between gap-5">
          <div className="w-1/3 flex flex-col gap-2">
            <label htmlFor="giorno">Data di nascita</label>
            <select onChange={(e)=>setDay(e.target.value)} className="p-2 rounded" name="giorni" id="">
              <option value=""></option>
              {giorni.map((giorno, index) => (
                <option value={giorno} key={index}>{giorno}</option>
              ))}
            </select>
          </div>
          <div className="w-1/3 flex flex-col justify-end gap-2">
            <select onChange={(e)=>setMonth(e.target.value)} className="p-2 rounded" name="mesi" id="">
              <option value=""></option>
              {mesi.map((mese, index) => (
                <option value={mese} key={index}>{mese}</option>
              ))}
            </select>
          </div>
          <div className="w-1/3 flex flex-col justify-end gap-2">
            <select onChange={(e)=>setYear(e.target.value)} className="p-2 rounded" name="anni" id="">
              <option value=""></option>
              {anni.reverse().map((anno, index) => (
                <option value={anno} key={index}>{anno}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Accedi</button>
        </div>
      </div>
    </div>
  );
};

export default FormRegistrazione;
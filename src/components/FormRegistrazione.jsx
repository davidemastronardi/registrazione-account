import React from 'react'

const FormRegistrazione = () => {


    
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input className="p-2 rounded" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cognome">Cognome</label>
          <input className="p-2 rounded" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Nuova password</label>
          <input className="p-2 rounded" type="password" />
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="giorno">Data di nascita</label>
            <select className="p-2 rounded" name="" id="">
              <option value=""></option>
              
            </select>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <select className="p-2 rounded" name="" id="">
              <option value=""></option>
              <option value="gennaio">gennaio</option>
              <option value="febbraio">febbraio</option>
              <option value="marzo">marzo</option>
              <option value="aprile">aprile</option>
              <option value="maggio">maggio</option>
              <option value="giugno">giugno</option>
              <option value="luglio">luglio</option>
              <option value="agosto">agosto</option>
              <option value="settembre">settembre</option>
              <option value="ottobre">ottobre</option>
              <option value="novembre">novembre</option>
              <option value="dicembre">dicembre</option>
            </select>
          </div>
          <div className="flex flex-col justify-end gap-2">
            <select className="p-2 rounded" name="" id="">
              <option value=""></option>
             
            </select>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Accedi</button>
        </div>
      </div>
    </div>
  )
}

export default FormRegistrazione
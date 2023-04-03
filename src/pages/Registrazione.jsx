import React from "react";

const Registrazione = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[500px] bg-slate-300 rounded-2xl p-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input className="p-2 rounded" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="cognome">Cognome</label>
          <input className="p-2 rounded" type="password" />
        </div>
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="giorno">Data di nascita</label>
            <select className="p-2 rounded" name="" id="">
              <option value=""></option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
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
        </div>
        <div>
          <button className="btn btn-primary">Accedi</button>
        </div>
      </div>
    </div>
  );
};

export default Registrazione;

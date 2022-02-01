import "./app.css";
import { useState } from "react";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [msg, setMsg] = useState("");
  function HandleClick() {
    const calcAlt = altura / 100;
    const calcImc = (peso / (calcAlt * calcAlt)).toFixed(2);

    if (peso === "" || altura === "") {
      setMsg("Você deixou algum dos campos em Branco");
    } else if (calcImc < 18.6) {
      setMsg("Você esta abaixo do peso ideal: " + calcImc);
    } else if (calcImc >= 18.6 && calcImc < 24.9) {
      setMsg("Peso ideal! Seu IMC: " + calcImc);
    } else if (calcImc >= 24.9 && calcImc < 34.9) {
      setMsg("Você esta levemente acima do peso! Seu IMC: " + calcImc);
    } else {
      setMsg("Cuidado Obesidade! Seu IMC: " + calcImc);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span> Vamos calcular o seu IMC</span>
      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 98"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />
        <button onClick={HandleClick}>Calcular</button>
      </div>
      <h2>{msg} </h2>
    </div>
  );
}

export default App;

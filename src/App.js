function App() {
  return (
    <div className="app">
      <h1>Sejam bem vindos ao mundo do React</h1>
      <span> Vamos calcular o seu IMC</span>
      <div className="area-input">
        <input type="text" placeholder="Peso em (kg) Ex: 98" />
        <input type="text" placeholder="Altura em (cm) Ex: 98" />
      </div>
      <button>Calcular</button>
      <h2>Seu IMC foi de: </h2>
    </div>
  );
}

export default App;

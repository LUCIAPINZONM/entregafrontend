import { useState } from 'react'
import Card from "./Components/Card";
import "./App.css";


function App() {
  const [genero, setgenero] = useState("");
  const [artista, setartista] = useState("");
  const [showCard, setshowCard] = useState(false);
  const [isError, setError] = useState(false);

  const isValidGeneroLength = genero.length > 2;
  console.log(isValidGeneroLength);

  const GeneroIniciaWithEspacioBlanco = genero.startsWith(" ");
  console.log(GeneroIniciaWithEspacioBlanco);

  const isValidGenero = isValidGeneroLength && !GeneroIniciaWithEspacioBlanco;
  console.log(isValidGenero);

  const isValidArtista = artista.length > 5


  const handlesubmit = (e) => {
    e.preventDefault();
    if(isValidArtista && isValidGenero){
      setshowCard(true);
      setError("");
    }else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  const ongeneroChange = (e) => {
    setgenero(e.target.value);
  };

  const onartistaChange = (e) => {
    setartista(e.target.value);
  };

  console.log(genero, artista);

  return (
    <div className="App">
      <h1>Tu musica preferida es</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <input placeholder="Genero ..." type="text" value={genero} onChange={ongeneroChange} />
        </div>
        <div>
          <input placeholder='Artista ...' type="text" value={artista} onChange={onartistaChange}/>
        </div>
        <button type="submit">Enviar</button>
        <div> {isError}</div>
      </form>
      {showCard ? <Card genero={genero} artista={artista} /> : null}
    </div>
  );
}

export default App
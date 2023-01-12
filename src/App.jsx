import { useState } from "react";
import "./App.css";
import BejegyzesKomponens from "./Bejegyzes";

function App() {
  const [bejegyzesek, setBejegyzesek] = useState([]);
  const [cim, setCim] = useState("");
  const [tartalom, setTartalom] = useState("");

  const bejegyzesHozzaadasa = () => {
    const bejegyzes = {
      cim: cim,
      tartalom: tartalom,
    };
    const ujBejegyzesek = [];
    bejegyzesek.forEach((bejegyzes) => ujBejegyzesek.push(bejegyzes));
    ujBejegyzesek.push(bejegyzes);
    setBejegyzesek(ujBejegyzesek);
  };

  const bejegyzesLista = [];
  bejegyzesek.forEach((bejegyzes) => {
    bejegyzesLista.push(
      <BejegyzesKomponens cim={bejegyzes.cim} tartalom={bejegyzes.tartalom} />
    );
  });

  return (
    <div>
      <section>
        <div>
          <input
            type="text"
            placeholder="Cim"
            value={cim}
            onInput={(e) => {
              setCim(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            cols="30"
            rows="10"
            placeholder="Tartalom"
            value={tartalom}
            onInput={(e) => setTartalom(e.target.value)}
          ></textarea>
        </div>
        <button onClick={() => bejegyzesHozzaadasa()}>Felvesz</button>
      </section>
      <section>{bejegyzesLista}</section>
    </div>
  );
}

export default App;

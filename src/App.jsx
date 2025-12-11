import "./assets/styles/global.css";
import Amigo from "./components/Amigo";

import amigo1 from './assets/amigo1.png';
import amigo2 from './assets/amigo2.png';
import amigo3 from './assets/amigo3.png';


function App() {
  return (
    <div className="container">
      <Amigo nombre="Juan Camilo" edad={25} ciudad="Medellin" imagen={amigo1}/>
      <Amigo nombre="Valentina" edad={22} ciudad="Bello" imagen={amigo2}/>
      <Amigo nombre="Santiago" edad={30} ciudad="Envigado" imagen={amigo3}/>
    </div>
  );
}

export default App;
import { useState } from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main';
import './index.css';

export default function App () {
  const [termino, setTermino] = useState("");
  return (
    <div className="App">
      <Header setTermino={setTermino} />
      <Main termino={termino} />
    </div>
  );
}



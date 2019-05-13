import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App-all">
      <header className="App-header">
      
            <img src="https://rockpersonas.herokuapp.com/assets/rc-logo-6a0b70ad53df4b6a8dc87d55437dbf07263c2b9cd7a2065ccad7223d341dace2.png" alt="Rock Content" />
            <img src="https://rockpersonas.herokuapp.com/assets/rd-logo-55491810cdd6a71382d1c7f08d276ac69c23b48f1ed96ea3f090514a398ce84f.png" alt="RD" />
      </header>


      <body className="App-body">
        <img src="https://geradordepersonas.com.br/assets/persona.png" alt="O fantástico Gerador de Personas" />
        <h1 className="App-h1"> O fantástico Gerador de Personas </h1>
        <h2 className="App-h2"> Empresas que documentam sua estratégia de Marketing de Conteúdo são 100% mais efetivas. </h2>
        <div className="App-aboutpersonas">
          <div className="text">
            <p> Uma persona é a representação do seu cliente típico, com todas as suas principais características e necessidades. </p>
            <p>Siga o passo a passo e crie de forma prática e gratuita um documento em PDF com sua persona para compartilhar na sua empresa. </p>
          </div>
          <button className="App-button">Começar</button>
        </div>
      </body>
    
    
    </div>
  );
}

export default App;
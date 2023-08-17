import { useState } from 'react';  // Importa o hook 'useState' da biblioteca 'react'.
import reactLogo from './assets/react.svg';  // Importa um arquivo de imagem SVG.
import viteLogo from '/vite.svg';  // Importa outro arquivo de imagem SVG.
import './App.css';  // Importa o arquivo de estilo CSS 'App.css'.

function App() {  // Define o componente funcional principal chamado 'App'.

  // Define uma função chamada 'primaryRequest'.
  function primaryRequest() {
    
    fetch('https://opentdb.com/api.php?amount=30&category=15')  // Faz uma requisição fetch para uma API para obter memes.
      .then(response => response.json());  // Transforma a resposta em JSON.
      var category = document.querySelector('#img');  // Seleciona um elemento de imagem no DOM.
      category.src = data.data.category[Math.floor(Math.random() * data.data.category.length)].url;
      ;
  }

  return (
    <>
        <button onClick={primaryRequest}>CLICK HERE</button>  {/* // Renderiza um botão que, quando clicado, chama a função 'primaryRequest'. */}
      <div>
        <figure>
          <p src="" id="img" alt="" />  {/* // Renderiza uma imagem com um atributo 'src' vazio e um atributo 'alt' vazio. */}
        </figure>
      </div>
    </>
  );
}

export default App;  // Exporta o componente 'App' como exportação padrão.

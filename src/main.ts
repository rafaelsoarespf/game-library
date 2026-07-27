//Ex:
//import { initNameFunction } from './components/name-component.js';


// init functions ====================================================
//document.addEventListener("DOMContentLoaded", init);

//function init(): void {
    //initNameFunction();
//}

import { GameCard } from "./components/GameCard";
import { GameService } from "./services/GameService";

// init functions ====================================================
document.addEventListener("DOMContentLoaded", init);

function init(): void {
    initRenderGames();
}

//=====================================================================
/**Renderiza todos os jogos na tela.*/
function initRenderGames(): void {
    const container = document.getElementById("games");
    if (!container) {
        throw new Error('Elemento "#games" não encontrado.');
    }
    // Remove todos os cards atuais
    container.replaceChildren();
    // Obtém os jogos
    const games = GameService.getAll();
    // Cria e adiciona os cards
    games.forEach(game => {
        container.appendChild(GameCard.create(game));
    });
}

//==============================================================================
//theme selector
const selectors=document.querySelectorAll<HTMLSelectElement>('.theme-selector');
const savedTheme=localStorage.getItem('aurora-theme');

if(savedTheme){
  document.body.setAttribute('data-theme',savedTheme);
  selectors.forEach(selector=>selector.value=savedTheme);
}

selectors.forEach(selector=>{
  selector.addEventListener('change',()=>{
    const theme=selector.value;

    document.body.setAttribute('data-theme',theme);
    localStorage.setItem('aurora-theme',theme);

    selectors.forEach(s=>s.value=theme);
  });
});
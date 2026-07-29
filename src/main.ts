//Ex:
//import { initNameFunction } from './components/name-component.js';


// init functions ====================================================
//document.addEventListener("DOMContentLoaded", init);

//function init(): void {
    //initNameFunction();
//}

import { GameCard } from "./components/GameCard.js";
import { initGameForm } from "./components/GameForm.js"
import { GameService } from "./services/GameService.js";


// init functions ====================================================
document.addEventListener("DOMContentLoaded", init);

function init(): void {
    GameService.initGameService();
    initRenderGames();
    initGameForm();
}

//=====================================================================
/**Renderiza todos os jogos na tela.*/
export function initRenderGames(): void {
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

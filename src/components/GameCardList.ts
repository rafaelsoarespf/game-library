
import type { Game } from "../types/Game.js"
import { GameService } from "../services/GameService.js"
import { GameCard } from "./GameCard.js"

//Initialization  ==============================================================
export function initGameCardList(): void{
  console.log(1);
  renderGames();
  
}

//=====================================================================
/**Renderiza todos os jogos na tela.*/
export function renderGames(): void {
    const container = document.getElementById("games");
    if (!container) {
        throw new Error('Elemento "#games" não encontrado.');
    }
    // Remove todos os cards atuais
    container.replaceChildren();
    // Obtém os jogos
    const games = GameService.getAll();
    // Cria e adiciona os cards
    games.forEach(game => { container.appendChild(GameCard.create(game));});
}
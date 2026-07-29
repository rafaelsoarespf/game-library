import { GameService } from "../services/GameService.js";
import { GameCard } from "./GameCard.js";
//Initialization  ==============================================================
export function initGameCardList() {
    renderGames();
}
//=====================================================================
/**Renderiza todos os jogos na tela.*/
export function renderGames() {
    const container = document.getElementById("games");
    if (!container) {
        throw new Error('Elemento "#games" não encontrado.');
    }
    // Remove todos os cards atuais
    container.replaceChildren();
    // Obtém os jogos
    const games = GameService.getAll();
    // Cria e adiciona os cards
    games.forEach(game => { container.appendChild(GameCard.create(game)); });
}
//# sourceMappingURL=GameCardList.js.map
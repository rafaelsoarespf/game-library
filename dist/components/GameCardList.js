import { GameService } from "../services/GameService.js";
import { GameCard } from "./GameCard.js";
import { clearForm, setFormFieldData } from "./GameForm.js";
// variables ===================================================================
let selectedGameId = null;
//Initialization  ==============================================================
export function initGameCardList() {
    renderGames();
}
//renderGames ===================================================================
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
    games.forEach(game => { container.appendChild(GameCard.create(game, game.id === selectedGameId)); });
}
// selectGame ===================================================================
export function selectGame(id) {
    //if deselect
    if (selectedGameId === id) {
        selectedGameId = null;
        clearForm();
        //if select
    }
    else {
        selectedGameId = id;
        const game = GameService.getById(id);
        if (game) {
            setFormFieldData(game);
        }
    }
    renderGames();
}
// getSelectedGameId ===========================================================
export function getSelectedGameId() {
    return selectedGameId;
}
// clearSelection ==========================================================
export function clearSelection() {
    selectedGameId = null;
    renderGames();
}
//# sourceMappingURL=GameCardList.js.map
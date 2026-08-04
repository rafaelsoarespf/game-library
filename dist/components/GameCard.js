import { GameService } from "../services/GameService.js";
import { initGameCardList, selectGame } from "./GameCardList.js";
export class GameCard {
    static create(game, selected) {
        const card = document.createElement("article");
        card.className = "card game-card";
        //select gamecard
        if (selected) {
            card.classList.add("border-accent");
        }
        // Select / deselect card
        card.addEventListener("click", () => {
            selectGame(game.id);
        });
        // image
        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.name;
        // title
        const title = document.createElement("h3");
        title.textContent = game.name;
        // delete button
        const buttonRemove = document.createElement("button");
        buttonRemove.type = "button";
        buttonRemove.textContent = "×";
        buttonRemove.addEventListener("click", event => {
            event.stopPropagation();
            GameService.remove(game.id);
            initGameCardList();
        });
        //append
        card.append(image, title, buttonRemove);
        return card;
    }
}
//# sourceMappingURL=GameCard.js.map
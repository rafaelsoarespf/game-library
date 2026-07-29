import type { Game } from "../types/Game.js";
import { GameService } from "../services/GameService.js";
import { initGameCardList } from "./GameCardList.js";

// GameCard ===============================================================
export class GameCard {

    static create(game: Game): HTMLElement {

        const card = document.createElement("article");
        card.className = "card game-card";
        //image
        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.name;
        //title
        const title = document.createElement("h3");
        title.textContent = game.name;
        //delete button 
        const buttonRemove = document.createElement("button");
        buttonRemove.type = "button";
        buttonRemove.textContent = "×";
        buttonRemove.addEventListener("click", () => {
            GameService.remove(game.id);
            initGameCardList();
        });

        card.append(image, title, buttonRemove);
        return card;
    }
}
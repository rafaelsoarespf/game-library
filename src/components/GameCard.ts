import type { Game } from "../types/Game";

export class GameCard {

    static create(game: Game): HTMLElement {

        const card = document.createElement("article");
        card.className = "card game-card";

        const image = document.createElement("img");
        image.src = game.image;
        image.alt = game.name;

        const title = document.createElement("h3");
        title.textContent = game.name;

        card.append(image, title);

        return card;
    }
}
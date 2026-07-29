import { GameService } from "../services/GameService.js";
import { initRenderGames } from "../main.js";
// variables ====================================================================
const genres = [];
//initGameForm ==================================================================
export function initGameForm() {
    initEvents();
}
//initEvents =====================================================================
function initEvents() {
    const genreInput = document.querySelector("#genre-input");
    const genreButtonAdd = document.querySelector("#genre-button-add");
    const form = document.querySelector("#game-form form");
    if (!genreInput) {
        throw new Error('Elemento "#genre-input" não encontrado.');
    }
    if (!genreButtonAdd) {
        throw new Error('Elemento "#genre-button-add" não encontrado.');
    }
    if (!form) {
        throw new Error('Elemento "form" não encontrado.');
    }
    //genre
    //chama addGenre() se clicar no botão(genreButtonAdd) ou se precionar enter
    genreButtonAdd.addEventListener("click", addGenre);
    genreInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            addGenre();
        }
    });
    //submit
    form.addEventListener("submit", onSubmit);
}
// addGenre ========================================================
function addGenre() {
    const genreInput = document.querySelector("#genre-input");
    if (!genreInput) {
        throw new Error('Elemento "#genre-input" não encontrado.');
    }
    const genre = genreInput.value.trim();
    if (!genre)
        return;
    if (genres.includes(genre)) {
        genreInput.value = "";
        genreInput.focus();
        return;
    }
    genres.push(genre);
    genreInput.value = "";
    genreInput.focus();
    renderGenres();
}
//renderGenres =====================================================================
function renderGenres() {
    const genresContainer = document.querySelector("#genres");
    if (!genresContainer) {
        throw new Error('Elemento "#genres" não encontrado.');
    }
    //clean
    genresContainer.replaceChildren();
    //create badge
    genres.forEach(genre => {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = genre;
        //button x
        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn-none text-on-accent";
        button.textContent = "×";
        button.addEventListener("click", () => { removeGenre(genre); });
        badge.append(button);
        genresContainer.append(badge);
    });
}
// removeGenre ========================================================
function removeGenre(genre) {
    const index = genres.indexOf(genre);
    if (index === -1) {
        return;
    }
    genres.splice(index, 1);
    renderGenres();
}
// getGame ========================================================================
// Obtém os dados do formulário e cria um objeto Game.
function getGame() {
    const nameInput = document.querySelector("#name");
    const statusSelect = document.querySelector("#status");
    const ratingSelect = document.querySelector("#rating");
    const storeInput = document.querySelector("#store");
    const accountInput = document.querySelector("#account");
    const valueInput = document.querySelector("#value");
    const notesInput = document.querySelector("#notes");
    if (!nameInput) {
        throw new Error('Elemento "#name" não encontrado.');
    }
    if (!statusSelect) {
        throw new Error('Elemento "#status" não encontrado.');
    }
    if (!ratingSelect) {
        throw new Error('Elemento "#rating" não encontrado.');
    }
    if (!storeInput) {
        throw new Error('Elemento "#store" não encontrado.');
    }
    if (!accountInput) {
        throw new Error('Elemento "#account" não encontrado.');
    }
    if (!valueInput) {
        throw new Error('Elemento "#value" não encontrado.');
    }
    if (!notesInput) {
        throw new Error('Elemento "#notes" não encontrado.');
    }
    return {
        id: 0,
        name: nameInput.value.trim(),
        image: "",
        status: statusSelect.value,
        rating: Number(ratingSelect.value),
        store: storeInput.value.trim(),
        account: accountInput.value.trim(),
        genres: [...genres],
        value: Number(valueInput.value),
        notes: notesInput.value.trim()
    };
}
// onSubmit ========================================================================
function onSubmit(event) {
    event.preventDefault();
    const game = getGame();
    GameService.add(game);
    initRenderGames();
    clearForm();
}
// clearForm =======================================================================
function clearForm() {
    const form = document.querySelector("#game-form form");
    if (!form) {
        throw new Error('Elemento "form" não encontrado.');
    }
    form.reset();
    genres.length = 0;
    renderGenres();
}
//# sourceMappingURL=GameForm.js.map
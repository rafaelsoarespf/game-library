//initFunctionName ==============================================================
//export function initFunctionName(): void{
//
//}
// variables ==========================================================
const genres = [];
//initGameForm ==================================================================
export function initGameForm() {
    initGenres();
}
//initGenres =====================================================================
function initGenres() {
    const genreInput = document.querySelector("#genre-input");
    const genreButtonAdd = document.querySelector("#genre-button-add");
    if (!(genreInput)) {
        throw new Error('Elemento "#genre-input" não encontrado.');
    }
    if (!(genreButtonAdd)) {
        throw new Error('Elemento "#genre-button-add" não encontrado.');
    }
    genreButtonAdd.addEventListener("click", addGenre);
    genreInput.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            addGenre();
        }
    });
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
//# sourceMappingURL=GameForm.js.map
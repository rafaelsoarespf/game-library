import type { Game, GameStatus } from "../types/Game.js"
import { GameService } from "../services/GameService.js"
import { initGameCardList, getSelectedGameId, clearSelection } from "./GameCardList.js";


// variables ====================================================================
const genres: string[] = [];

//initGameForm ==================================================================
export function initGameForm(): void {
  initEvents();
}

//initEvents =====================================================================
function initEvents(): void {
  const genreInput = document.querySelector<HTMLInputElement>("#genre-input");
  const genreButtonAdd = document.querySelector<HTMLButtonElement>("#genre-button-add");
  const form = document.querySelector<HTMLFormElement>("#game-form form");

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
function addGenre(): void{
  const genreInput = document.querySelector<HTMLInputElement>("#genre-input");

  if (!genreInput) {
      throw new Error('Elemento "#genre-input" não encontrado.');
  }

  const genre = genreInput.value.trim();
  
  if(!genre) return;
  
  if(genres.includes(genre)){
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
function renderGenres(): void {
  const genresContainer = document.querySelector<HTMLDivElement>("#genres");

  if (!genresContainer){
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
    
    button.addEventListener("click", () => { removeGenre(genre);});
    
    badge.append(button);
    genresContainer.append(badge);
  })
}

// removeGenre ========================================================
function removeGenre(genre: string): void {
  const index = genres.indexOf(genre);
  if(index ===-1){ return;}
  genres.splice(index,1);
  renderGenres();
}

// getGame ========================================================================
// Obtém os dados do formulário e cria um objeto Game.
function getGame(): Game {
  const nameInput = document.querySelector<HTMLInputElement>("#name");
  const statusSelect = document.querySelector<HTMLSelectElement>("#status");
  const ratingSelect = document.querySelector<HTMLSelectElement>("#rating");
  const storeInput = document.querySelector<HTMLInputElement>("#store");
  const accountInput = document.querySelector<HTMLInputElement>("#account");
  const valueInput = document.querySelector<HTMLInputElement>("#value");
  const notesInput = document.querySelector<HTMLTextAreaElement>("#notes");

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
    status: statusSelect.value as GameStatus,
    rating: Number(ratingSelect.value),
    store: storeInput.value.trim(),
    account: accountInput.value.trim(),
    genres: [...genres],
    value: Number(valueInput.value),
    notes: notesInput.value.trim()
  };
}

// onSubmit ========================================================================
function onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const game = getGame();
    const selectedGameId = getSelectedGameId();

    if (!validateGame(game)) {
      return;
    }

    if (selectedGameId !== null) {
        game.id = selectedGameId;
        GameService.update(game);
    } else {
        GameService.add(game);
    }

    initGameCardList();
    clearSelection();
    clearForm();
}

// clearForm =======================================================================
export function clearForm(): void {
  const form = document.querySelector<HTMLFormElement>("#game-form form");
  
  if (!form) {
    throw new Error('Elemento "form" não encontrado.');
  }

  form.reset();
  genres.length = 0;
  renderGenres();
}


// validateGame =======================================================
function validateGame(game: Game): boolean {
  if (!game.name) {
    alert("Informe o nome do jogo.");
    return false;
  }

  return true;
}

// setFormFieldData =======================================================
// fills the form fields with game data
export function setFormFieldData(game: Game): void {
  const nameInput = document.querySelector<HTMLInputElement>("#name");
  const imageInput = document.querySelector<HTMLInputElement>("#image");

    if (!nameInput || !imageInput) {
        throw new Error("Campos do formulário não encontrados.");
    }

    nameInput.value = game.name;
    imageInput.value = game.image;
}
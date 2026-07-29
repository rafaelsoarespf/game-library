//Ex:
//import { initNameFunction } from './components/name-component.js';


// init functions ====================================================
//document.addEventListener("DOMContentLoaded", init);

//function init(): void {
    //initNameFunction();
//}

import { GameCard } from "./components/GameCard.js";
import { initGameCardList } from "./components/GameCardList.js";
import { initGameForm } from "./components/GameForm.js"
import { GameService } from "./services/GameService.js";


// init functions ====================================================
document.addEventListener("DOMContentLoaded", init);

function init(): void {
    GameService.initGameService();
    initGameCardList();
    initGameForm();
}



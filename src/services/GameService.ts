import type { Game } from "../types/Game";

export class GameService {
  // Variables ===================================================================
  private static readonly STORAGE_KEY = "games";
  private static games: Game[] = [
    {
      id: 1,
      name: "Hollow Knight",
      image: "src/assets/images/hollow-knight.png",
      status: "Concluído",
      rating: 10,
      store: "Steam",
      account: "Principal",
      genres: ["Metroidvania"],
      value: 18.99,
      notes: "Excelente jogo."
    }
  ];

  // initGameService ==============================================================
  static initGameService(): void {
    this.load();
  }

  //Public methods ================================================================
  //getAll
  static getAll(): Game[] {
    return this.games;
  }

  static add(game: Game): void {
    game.id = this.games.length + 1;
    this.games.push(game);
    this.save();
  }
  
  //Private methods ===============================================================
  private static save(): void {
    console.log("Salvando...", this.games);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.games));
  }

  private static load(): void {
    const data = localStorage.getItem(this.STORAGE_KEY);

    if (!data) {
      return;
    }

    this.games = JSON.parse(data) as Game[];
  }


}
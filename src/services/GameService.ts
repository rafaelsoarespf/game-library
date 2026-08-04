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

  //add
  static add(game: Game): void {
    game.id = this.getNextId();
    this.games.push(game);
    this.save();
  }

  //remove
  static remove(id: number): void {
    const index = this.games.findIndex(game => game.id === id);

    if (index === -1) {
      return;
    }
    this.games.splice(index, 1);
    this.save();
  }

  //getNextId
  static getNextId(): number {
    const ids = this.games.map(game => game.id);

    if (ids.length === 0) {
      return 1;
    }

    const maxId = Math.max(...ids);

    return maxId + 1;
  }

  //
  static getById(id: number): Game | undefined {
    return this.games.find(game => game.id === id);
  }

  //
  static update(game: Game): void {
    const index = this.games.findIndex(g => g.id === game.id);
    if (index === -1) {
      return;
    }
    this.games[index] = game;
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
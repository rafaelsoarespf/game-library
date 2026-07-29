import type { Game } from "../types/Game";

export class GameService {

  private static games: Game[] = [
    {
      id: 1,
      name: "Hollow Knight",
      image: "src/assets/images/hollow-knight.webp",
      status: "Concluído",
      rating: 10,
      store: "Steam",
      account: "Principal",
      genres: ["Metroidvania"],
      value: 18.99,
      notes: "Excelente jogo."
    }
  ];

  //getAll
  static getAll(): Game[] {
    return this.games;
  }

  //add
  static add(game: Game): void {
    game.id = this.games.length + 1;
    this.games.push(game);
  }

}
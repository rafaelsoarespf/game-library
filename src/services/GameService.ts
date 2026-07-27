import type { Game } from "../types/Game";

export class GameService {

    static getAll(): Game[] {
        return [
            {
                id: 1,
                name: "Hollow Knight",
                image: "src/assets/images/hollow-knight.webp",
                status: "Concluído",
                rating: 10,
                platform: "PC",
                store: "Steam",
                account: "Principal",
                genres: ["Metroidvania"],
                value: 18.99,
                notes: "Excelente jogo."
            }
        ];
    }

}
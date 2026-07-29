export type GameStatus =
    | "Não Jogado"
    | "Para Jogar"
    | "Jogando"
    | "Para Continuar"
    | "Concluído"
    | "Dormindo"
    | "Abandonado";

export interface Game {
    id: number;
    name: string;
    image: string;
    status: GameStatus;
    rating: number;
    store: string;
    account: string;
    genres: string[];
    value: number;
    notes: string;
}
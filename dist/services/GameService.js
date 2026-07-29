export class GameService {
    // Variables ===================================================================
    static STORAGE_KEY = "games";
    static games = [
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
    static initGameService() {
        this.load();
    }
    //Public methods ================================================================
    //getAll
    static getAll() {
        return this.games;
    }
    static add(game) {
        game.id = this.games.length + 1;
        this.games.push(game);
        this.save();
    }
    //Private methods ===============================================================
    static save() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.games));
    }
    static load() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (!data) {
            return;
        }
        this.games = JSON.parse(data);
    }
}
//# sourceMappingURL=GameService.js.map
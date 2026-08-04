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
    //add
    static add(game) {
        game.id = this.getNextId();
        this.games.push(game);
        this.save();
    }
    //remove
    static remove(id) {
        const index = this.games.findIndex(game => game.id === id);
        if (index === -1) {
            return;
        }
        this.games.splice(index, 1);
        this.save();
    }
    //getNextId
    static getNextId() {
        const ids = this.games.map(game => game.id);
        if (ids.length === 0) {
            return 1;
        }
        const maxId = Math.max(...ids);
        return maxId + 1;
    }
    //
    static getById(id) {
        return this.games.find(game => game.id === id);
    }
    //
    static update(game) {
        const index = this.games.findIndex(g => g.id === game.id);
        if (index === -1) {
            return;
        }
        this.games[index] = game;
        this.save();
    }
    //Private methods ===============================================================
    static save() {
        console.log("Salvando...", this.games);
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
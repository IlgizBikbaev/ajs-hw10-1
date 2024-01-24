import read from './reader.js';
import json from './parser.js';
import { GameSaving } from './gamesaving.js'

export default class GameSavingLoader {
    static load() {
        return read().then((data) => json(data))
        .then((data) => new GameSaving(JSON.parse(data)));
    }
}


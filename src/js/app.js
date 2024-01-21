import GameSavingLoader from "./gamesavingloader.js";

GameSavingLoader.load().then((saving) => {
    console.log(saving);
}, (error) => {
    throw new Error(error);
});
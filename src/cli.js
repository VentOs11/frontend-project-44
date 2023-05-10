import brainGames from "../bin/brain-games.js";
import readlineSync from 'readline-sync';

brainGames;
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
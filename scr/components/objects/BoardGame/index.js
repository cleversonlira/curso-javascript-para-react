import CardGame from "../../CardGame";
import './style.css';

function BoardGame(amountCards) {
    let $cardGame = "";

    for (let index = 0; index < amountCards; index++) {
        $cardGame += CardGame();
    }
    return `<section class="board-game">${$cardGame}</section>`;
}

export default BoardGame;
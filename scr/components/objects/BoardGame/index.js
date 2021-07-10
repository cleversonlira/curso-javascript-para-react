import CardGame from "../../CardGame";

function BoardGame(amountCards) {
    let $cardGame = "";

    for (let index = 0; index < amountCards; index++) {
        $cardGame += CardGame();
    }
    return $cardGame;
}

export default BoardGame;
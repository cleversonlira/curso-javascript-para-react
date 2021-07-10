import './scr/components/styles/generic/reset.css'
import './scr/components/styles/settings/colors.css'
import './scr/components/styles/elements/base.css'
import BoardGame from './scr/components/objects/BoardGame';
import PlayerName from './scr/components/PlayerName';

const $root = document.querySelector("#root");
$root.insertAdjacentHTML(
    'beforeend',
    `
    ${PlayerName("Player 1")}
    ${PlayerName("Player 2")}
    ${BoardGame(6)}
    `
);
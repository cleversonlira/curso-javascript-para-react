import './scr/components/styles/generic/reset.css'
import './scr/components/styles/settings/colors.css'
import './scr/components/styles/elements/base.css'
import './style.css'
import CardGame from './scr/components/CardGame';

const $htmlCardGame = CardGame();
const $root = document.querySelector("#root");
$root.insertAdjacentHTML('beforeend', $htmlCardGame);
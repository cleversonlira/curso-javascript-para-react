import './scr/components/styles/generic/reset.css'
import './scr/components/styles/settings/colors.css'
import './scr/components/styles/elements/base.css'
import BoardGame from './scr/components/objects/BoardGame';

const $htmlCardGame = BoardGame(6);

const $root = document.querySelector("#root");
$root.insertAdjacentHTML('beforeend', $htmlCardGame);
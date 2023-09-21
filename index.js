let player_txt = document.getElementById(`player_txt`);
let rest_btn = document.getElementById(`reset_btn`);
let boxes = Array.from(document.getElementsByClassName(`box`));

const O_txt = "O";
const X_txt = "X";
let currentPlayer = X_txt;
let spaces = Array(9).fill(null);

function click_box(number) {
  document.getElementById(number.toString()).innerHTML = currentPlayer;
  currentPlayer = currentPlayer == O_txt ? X_txt : O_txt;
}

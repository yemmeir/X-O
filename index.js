document.addEventListener("DOMContentLoaded", function () {
  const playerText = document.getElementById("player_txt");
  const resetButton = document.getElementById("reset_btn");
  const boxes = document.querySelectorAll(".box");

  let currentPlayer = "X";
  let board = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  // Function to handle a box click
  function click_box(index) {
    if (gameActive && board[index] === "") {
      board[index] = currentPlayer;
      boxes[index].textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      playerText.textContent = `Player ${currentPlayer}'s Turn`;
    }
  }

  // Function to check for a win
  function checkWin() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        playerText.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
      }
    }

    if (!board.includes("")) {
      playerText.textContent = "It's a Draw!";
      gameActive = false;
    }
  }

  // Function to reset the game
  function reset() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    playerText.textContent = `Player ${currentPlayer}'s Turn`;

    for (const box of boxes) {
      box.textContent = "";
    }
  }

  // Add click event listeners to boxes and reset button
  boxes.forEach((box, index) => {
    box.addEventListener("click", () => click_box(index));
  });

  resetButton.addEventListener("click", reset);

  // Initial player's turn message
  playerText.textContent = `Player ${currentPlayer}'s Turn`;
});

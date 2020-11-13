var currentPlayer = '0';
var won = false;
var winner;

function place(box) {
  if(box.innerText !== '' || won) return;

  box.innerText = currentPlayer;
  box.style.color = currentPlayer === '0' ? 'tomato' : 'blue';
  winner = currentPlayer === '0' ? 'нолики' : 'крестики';
  currentPlayer = currentPlayer === '0' ? 'X' : '0';

  checkGameBoard();
}

function checkGameBoard() {
  for(var i = 0; i <= 2; i++) {
    checkWinner(document.getElementById('0_' + i).innerText,
      document.getElementById('1_' + i).innerText,
      document.getElementById('2_' + i).innerText);

    checkWinner(document.getElementById(i + '_0').innerText,
      document.getElementById(i + '_1').innerText,
      document.getElementById(i + '_2').innerText);
  }

  checkWinner(document.getElementById('0_0').innerText,
    document.getElementById('1_1').innerText,
    document.getElementById('2_2').innerText);

  checkWinner(document.getElementById('0_2').innerText,
    document.getElementById('1_1').innerText,
    document.getElementById('2_0').innerText);
}

function checkWinner(first, second, third) {
  if(first !== '' && first === second && first === third) {
    var winnerBlock = document.querySelector('.winner');
    winnerBlock.style.color = winner === 'нолики' ? 'tomato' : 'blue';
    winnerBlock.innerText = 'Победили ' + winner + '!';
    won = true;
  };
}
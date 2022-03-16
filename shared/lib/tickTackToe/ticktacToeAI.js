/*
// function  minimax(node, depth, maximizingPlayer) is
//     if depth = 0 or node is a terminal node then
//         return the heuristic value of node
//     if maximizingPlayer then
//         value := −∞
//         for each child of node do
//             value := max(value, minimax(child, depth − 1, FALSE))
//         return value
//     else (* minimizing player *)
//         value := +∞
//         for each child of node do
//             value := min(value, minimax(child, depth − 1, TRUE))
//         return value
*/

function minmax(node, depth, maximizingPlayer) {}

function utilityFunction(board) {
  for (let index = 0; index < board.length; index++) {
    const element = board[index];
  }
}

function performMove(player, node, board) {
  if (player) {
    board[node] = true;
  } else {
    board[node] = false;
  }

  return board;
}

function checkWin(board) {
  if (checkVerticals(board)) {
    return true;
  }
  if (checkHorizontals(board)) {
    return true;
  }
  if (checkCrosses(board)) {
    return true;
  }

  return false;
}

function checkVerticals(board) {
  for (let index = 0; index < 3; index++) {
    var base = board[index];
    var baseMiddle = board[index + 3];
    var baseTop = board[index + 6];

    if ((base == baseMiddle) == baseTop) {
      return true;
    }
  }

  return false;
}

function checkHorizontals(board) {
  for (let index = 0; index < 7; index = index + 3) {
    var base = board[index];
    var baseMiddle = board[index + 1];
    var baseRight = board[index + 2];

    if ((base == baseMiddle) == baseRight) {
      return true;
    }
  }

  return false;
}

function checkCrosses(board) {
  //check //
  var leftBottom = board[0];
  var middle = board[4];
  var topRight = board[8];
  if ((leftBottom == middle) == topRight) {
    return true;
  }

  //check \\
  var leftTop = board[6];
  var rightBottom = board[2];
  if ((leftTop == middle) == rightBottom) {
    return true;
  }

  return false;
}

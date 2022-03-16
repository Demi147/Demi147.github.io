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

function minmax(node, depth, maximizingPlayer) {
  var util = utilityFunction(node);
  if (depth == 0 || util[0]) {
    return util[1];
  }
  // function  minimax(node, depth, maximizingPlayer) is
  //   if depth = 0 or node is a terminal node then
  //       return the heuristic value of node
  //   if maximizingPlayer then
  //       value := −∞
  //       for each child of node do
  //           value := max(value, minimax(child, depth − 1, FALSE))
  //       return value
  //   else (* minimizing player *)
  //       value := +∞
  //       for each child of node do
  //           value := min(value, minimax(child, depth − 1, TRUE))
  //       return value
}

function performMove(player, node, board) {
  if (player) {
    board[node] = true;
  } else {
    board[node] = false;
  }

  return board;
}

function utilityFunction(board) {
  var verticals = checkVerticals(board);
  var horizontals = checkHorizontals(board);
  var slices = checkCrosses(board);

  if (verticals[0]) {
    if (verticals[1]) {
      return [true, 1];
    } else {
      return [true, -1];
    }
  }

  if (horizontals[0]) {
    if (horizontals[1]) {
      return [true, 1];
    } else {
      return [true, 0 - 1];
    }
  }

  if (slices[0]) {
    if (slices[1]) {
      return [true, 1];
    } else {
      return [true, -1];
    }
  }

  return [false, 0];
}

function checkVerticals(board) {
  for (let index = 0; index < 3; index++) {
    var base = board[index];
    var baseMiddle = board[index + 3];
    var baseTop = board[index + 6];

    if (((base == baseMiddle) == true) == baseTop) {
      return [true, true];
    }

    if (((base == baseMiddle) == false) == baseTop) {
      return [true, false];
    }
  }

  return [false, false];
}

function checkHorizontals(board) {
  for (let index = 0; index < 7; index = index + 3) {
    var base = board[index];
    var baseMiddle = board[index + 1];
    var baseRight = board[index + 2];

    if (((base == baseMiddle) == baseRight) == true) {
      return [true, true];
    }
    if (((base == baseMiddle) == baseRight) == false) {
      return [true, false];
    }
  }

  return [false, false];
}

function checkCrosses(board) {
  //check //
  var leftBottom = board[0];
  var middle = board[4];
  var topRight = board[8];
  if (((leftBottom == middle) == topRight) == true) {
    return [true, true];
  }

  //check \\
  var leftTop = board[6];
  var rightBottom = board[2];
  if (((leftTop == middle) == rightBottom) == false) {
    return [true, false];
  }

  return [false, false];
}

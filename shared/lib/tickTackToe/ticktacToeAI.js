var previousStates = [];

export function resetPrevStates() {
  previousStates = [];
}

export function minmax(board, depth, player) {
  console.log([...previousStates]);
  var util = utilityFunction(board);
  if (depth == 0 || util[0] == true) {
    console.log("end");
    return util[1];
  }

  if (!player) {
    var value = -9;
    var moves = getPosibleMovesandPerform(board, true);
    moves.forEach((element) => {
      if (!previousStates.includes(element)) {
        previousStates.push(element);
        var tempVal = minmax(element, depth - 1, true);
        if (tempVal > value) {
          value = tempVal;
        }
      }
    });
  } else {
    var value = 9;
    var moves = getPosibleMovesandPerform(board, false);
    moves.forEach((element) => {
      if (!previousStates.includes(element)) {
        previousStates.push(element);
        var tempVal = minmax(element, depth - 1, false);
        if (tempVal > value) {
          value = tempVal;
        }
      }
    });
  }
}

function performMove(player, node, board) {
  var temp = [...board];
  if (player) {
    temp[node] = true;
  } else {
    temp[node] = false;
  }

  return temp;
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

    if (base == true && baseMiddle == true && baseTop == true) {
      return [true, true];
    }

    if (base == false && baseMiddle == false && baseTop == false) {
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

    if (base == true && baseMiddle == true && baseRight == true) {
      return [true, true];
    }
    if (base == false && baseMiddle == false && baseRight == false) {
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
  if (leftBottom == true && middle == true && topRight == true) {
    return [true, true];
  }

  //check \\
  var leftTop = board[6];
  var rightBottom = board[2];
  if (leftBottom == false && middle == false && topRight == false) {
    return [true, false];
  }

  return [false, false];
}

function getPosibleMovesandPerform(board, player) {
  //debugger;
  var states = [];
  for (let index = 0; index < board.length; index++) {
    const element = board[index];
    if (element == null) {
      states.push(performMove(player, index, board));
    }
  }
  //debugger;
  return states;
}

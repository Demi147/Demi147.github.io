var previousStates = [[null, null, null, null, null, null, null, null, null]];

export function resetPrevStates() {
  previousStates = [[null, null, null, null, null, null, null, null, null]];
}

var count = 0;

export function startAi(board) {
  var startState = [...board];
  var moves = getPosibleMovesandPerform(startState, false);
  var min = -9;
  var moveToMake = null;
  moves.forEach((element, index) => {
    var x = minmax(element, 9, false);
    //console.log(minmax(element, 9, false));
    //console.log(`Value : ${x} + min : ${min}`);
    if (x > min) {
      min = x;
      moveToMake = index;
    }
  });
  var move = findDiffrence(board, moves[moveToMake]);
  postMessage(move);
}

function findDiffrence(mainState, nextState) {
  for (let index = 0; index < mainState.length; index++) {
    const element1 = mainState[index];
    const element2 = nextState[index];
    if (element1 != element2) {
      return index;
    }
  }
  return 0;
}

export function minmax(board, depth, player) {
  var util = utilityFunction(board);
  //console.log(`Board : ${board} + score ${util.score}`);
  //console.log(util);
  if (depth == 0 || util.terminal) {
    //console.log(`Board : ${board} + score ${util.score}`);
    //console.log(`score ${util.score}`);
    return util.score;
  }

  if (!player) {
    //AI
    var value = -9;
    var moves = getPosibleMovesandPerform(board, true);
    moves.forEach((element) => {
      var tempVal = minmax(element, depth - 1, true);
      if (tempVal > value) {
        value = tempVal;
      }
    });
    return value;
  } else {
    //Player
    var value = 9;
    var moves = getPosibleMovesandPerform(board, false);
    moves.forEach((element) => {
      var tempVal = minmax(element, depth - 1, false);
      if (tempVal < value) {
        value = tempVal;
      }
    });
    return value;
  }

  if (
    getPosibleMovesandPerform(board, !player).length == 0 ||
    getPosibleMovesandPerform(board, player).length == 0
  ) {
    console.log("No moves WTF");
  }
  // console.log(board);
  // console.log(player);
  // console.log(previousStates.some((q) => q.equals(board)));
}

function performMove(player, node, board) {
  var temp = [...board];
  temp[node] = player;

  return temp;
}

function utilityFunction(board) {
  var returnObject = {
    terminal: false,
    player: null,
    score: 0,
  };

  var verticals = checkVerticals(board);
  var horizontals = checkHorizontals(board);
  var slices = checkCrosses(board);

  if (verticals.terminal) {
    returnObject.terminal = true;
    returnObject.player = verticals.player;
    returnObject.score = verticals.player ? -1 : 1;
    return returnObject;
  }
  if (horizontals.terminal) {
    returnObject.terminal = true;
    returnObject.player = horizontals.player;
    returnObject.score = horizontals.player ? -1 : 1;
    return returnObject;
  }
  if (slices.terminal) {
    returnObject.terminal = true;
    returnObject.player = slices.player;
    returnObject.score = slices.player ? -1 : 1;
    return returnObject;
  }

  if (checkForDraw(board)) {
    returnObject.terminal = true;
    returnObject.player = null;
    returnObject.score = 0;
  }
  return returnObject;
}

function checkForDraw(board) {
  return !board.some((el) => el !== true && el !== false);
}

function checkVerticals(board) {
  var returnObject = {
    terminal: false,
    player: null,
  };
  for (let index = 0; index < 3; index++) {
    var base = board[index];
    var baseMiddle = board[index + 3];
    var baseTop = board[index + 6];

    if (base == true && baseMiddle == true && baseTop == true) {
      returnObject.terminal = true;
      returnObject.player = true;
    }

    if (base == false && baseMiddle == false && baseTop == false) {
      returnObject.terminal = true;
      returnObject.player = false;
    }
  }

  return returnObject;
}

function checkHorizontals(board) {
  var returnObject = {
    terminal: false,
    player: null,
  };
  for (let index = 0; index < 7; index = index + 3) {
    var base = board[index];
    var baseMiddle = board[index + 1];
    var baseRight = board[index + 2];

    if (base == true && baseMiddle == true && baseRight == true) {
      returnObject.terminal = true;
      returnObject.player = true;
    }
    if (base == false && baseMiddle == false && baseRight == false) {
      returnObject.terminal = true;
      returnObject.player = false;
    }
  }

  return returnObject;
}

function checkCrosses(board) {
  var returnObject = {
    terminal: false,
    player: null,
  };
  //check //
  var leftBottom = board[0];
  var middle = board[4];
  var topRight = board[8];
  if (leftBottom == true && middle == true && topRight == true) {
    returnObject.terminal = true;
    returnObject.player = true;
  }
  if (leftBottom == false && middle == false && topRight == false) {
    returnObject.terminal = true;
    returnObject.player = false;
  }

  //check \\
  var leftTop = board[6];
  var rightBottom = board[2];
  if (rightBottom == true && middle == true && leftTop == true) {
    returnObject.terminal = true;
    returnObject.player = true;
  }
  if (rightBottom == false && middle == false && leftTop == false) {
    returnObject.terminal = true;
    returnObject.player = false;
  }

  return returnObject;
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

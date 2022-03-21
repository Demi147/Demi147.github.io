export class TickTackToeGameLogic {
  /*
	Notes:
	null = empty
	false = 0 : AI
	true = X : player
	*/

  constructor() {
    //vars
    this.board = [null, null, null, null, null, null, null, null, null];
    this.player = true; // true:player , false:AI
  }

  setNode(node, value) {
    this.board[node] = value;
  }
}

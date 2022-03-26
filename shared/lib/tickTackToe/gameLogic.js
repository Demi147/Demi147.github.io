export class Logic {
  /*
	Notes:
	null = empty
	false = 0 : AI
	true = X : player
	*/

  constructor() {
    //vars
    this.board = [null, null, null, null, null, null, null, null, null];
    this.playerTurn = true; // true:player , false:AI
    this.AIBusy = false;
  }

  reset() {
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  setNode(node, value) {
    this.board[node] = value;
  }

  startAI(board) {
    var worker = new Worker(
      new URL("../../../shared/lib/tickTackToe/AI.worker.js", import.meta.url)
    );
    worker.postMessage(board);
    worker.onmessage = function (e) {
      AICallback(e.data);
    };
  }

  AICallback(data) {
    console.log(data);
  }

  handleUserinput(object) {
    if (this.playerTurn) {
      //player logic
      //handle click
      //generate object
      //check for win
      //startAi
      this.startAI(this.board);
    }
  }
}

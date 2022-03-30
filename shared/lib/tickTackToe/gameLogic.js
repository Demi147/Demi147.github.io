import * as TICK from "../../../shared/lib/tickTackToe/tickTackToe";

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
    this.blocks = [];
    this.playerTurn = true; // true:player , false:AI
    this.AIBusy = false;
  }

  reset() {
    this.board = [null, null, null, null, null, null, null, null, null];
  }

  setNode(node, value) {
    this.board[node] = value;
  }

  AICallback(data) {
    this.AIBusy = false;
    console.log(data);
    this.board[data] = false;
    TICK.addOToBlock(this.blocks[data]);
    this.playerTurn = true;
  }

  startAI(board) {
    this.AIBusy = true;
    var worker = new Worker(
      new URL("../../../shared/lib/tickTackToe/AI.worker.js", import.meta.url)
    );
    worker.postMessage(board);
    worker.onmessage = (e) => {
      this.AICallback(e.data);
    };
  }

  generateVirtualBoard() {}

  userClickBox(object) {
    this.blocks.forEach((element, index) => {
      if (element.uuid == object.uuid) {
        //user clicked this block
        this.board[index] = true;
      }
    });
    TICK.addXToBlock(object);
  }

  handleUserinput(object) {
    if (this.playerTurn) {
      //player logic
      //handle click
      //generate object
      this.userClickBox(object);

      //check for win
      //startAi
      this.playerTurn = false;
      this.generateVirtualBoard();
      this.startAI(this.board);
    }
  }
}

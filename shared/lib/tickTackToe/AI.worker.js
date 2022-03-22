import * as AI from "./ticktacToeAI";

self.onmessage = function (e) {
  postMessage(69);
  AI.resetPrevStates();
  AI.minmax([null, null, null, null, null, null, null, null, null], 8, false);
};

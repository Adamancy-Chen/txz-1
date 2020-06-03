import showUI from "./ui.js";
import {playMove, isWin} from "./play.js";
showUI();
var over = false;

window.onkeydown = function (e) {
    if(over) {
        return;
    }
    // console.log(e.key);
    var result = false;
    if(e.key === "ArrowUp") {
        result = playMove("up");
    } else if(e.key === "ArrowDown") {
        result = playMove("down");
    } else if(e.key === "ArrowLeft") {
        result = playMove("left");
    } else if(e.key === "ArrowRight") {
        result = playMove("right");
    }

    if(result) {
        if(isWin()) {
            console.log("游戏胜利");
            over = true;
        }
        showUI();
    }
 }
import * as map from "./map.js";
// 该模块用于将地图显示在界面上

var divContainer = document.getElementById("game");
var pieceWidth = 45;
var pieceHeight = 45;

function setDivContainer() {
    divContainer.style.width = map.rowNumber * pieceWidth + "px";
    divContainer.style.height = map.colNumber * pieceHeight + "px";
}

function setOnePiece(row, col) {
    var value = map.content[row][col];
    var correct = isCorrect(row, col);
    var div = document.createElement('div');
    div.className = "item";
    div.style.left = col * pieceWidth + "px";
    div.style.top = row * pieceHeight + "px";
    if(value === map.PLAYER) {
        div.classList.add("player");
    } else if(value === map.WALL) {
        div.classList.add("wall");
    } else if(value === map.BOX) {
        if(correct) {
            div.classList.add("correct-box");
        } else {
            div.classList.add("box");
        }
    } else {
        if(correct) {
            div.classList.add("correct");
        } else {
            return;
        }
    }
    divContainer.appendChild(div);
}

function isCorrect(row, col) {
    for(var i = 0; i < map.correct.length; i ++) {
        var point = map.correct[i];
        if(point.row === row && point.col === col) {
            return true;
        }
    }
    return false;
}

function setContent() {
    divContainer.innerHTML = "";
    for(var row = 0; row < map.rowNumber; row ++) {
        for(var col = 0; col < map.colNumber; col ++) {
            setOnePiece(row, col);
        }
    }
}


// 显示地图中的内容 
export default function () {
    setDivContainer();
    setContent();
}

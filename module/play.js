import {content, colNumber, rowNumber, PLAYER, WALL, SPACE, BOX, correct} from "./map.js";

export function playMove(direction) {
    var playerPoint = getPlayerPoint();
    console.log(playerPoint);
    var nextInfo = getNextInfo(playerPoint.row, playerPoint.col, direction);
    console.log(nextInfo);
    if(nextInfo.value === WALL) {
        console.log("不能移动");
        return false;
    }
    if(nextInfo.value === SPACE) {
        exchange(playerPoint, nextInfo);
        return true;
    } else {
        var nextNextInfo = getNextInfo(nextInfo.row, nextInfo.col, direction);
        if(nextNextInfo.value === SPACE) {
            exchange(nextInfo, nextNextInfo);
            exchange(playerPoint, nextInfo);
            return true;
        } else {
            return false;
        }
    }
}


function getNextInfo(row, col, direction) {
    if(direction === "left") {
        return {
            row: row,
            col: col - 1,
            value: content[row][col - 1]
        }
    } else if(direction === "right") {
        return {
            row: row,
            col: col + 1,
            value: content[row][col + 1]
        }
    } else if(direction === "up") {
        return {
            row: row - 1,
            col: col,
            value: content[row - 1][col]
        }
    } else if(direction === "down") {
        return {
            row: row + 1,
            col: col,
            value: content[row + 1][col]
        }
    }
}

function getPlayerPoint() {
    for(var row = 0; row < rowNumber; row ++) {
        for(var col = 0; col < colNumber; col ++) {
            if(content[row][col] === PLAYER) {
                return {
                    row,
                    col
                }
            }
        }
    }
    throw new Error("地图上竟然没有玩家");
}

function exchange(point1, point2) {
    var temp = content[point1.row][point1.col];
    content[point1.row][point1.col] = content[point2.row][point2.col];
    content[point2.row][point2.col] = temp;
}

export function isWin() {
    for(var i = 0; i < correct.length; i ++) {
        const point = correct[i];
        if(content[point.row][point.col] !== BOX) {
            return false;
        }
    }
    return true;
}

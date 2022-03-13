// //Create the path
function createPath() {
    const path = [
        [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 6], [3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [4, 2], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6]],
        [[1, 1], [2, 1], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [3, 6], [4, 6], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3]],
        [[4, 1], [4, 2], [4, 3], [3, 3], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [4, 6], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3], [6, 2]],
        [[2, 1], [2, 2], [1, 2], [1, 3], [1, 4], [2, 4], [2, 5], [2, 6], [3, 6], [4, 6], [4, 5], [4, 4], [4, 3], [4, 2], [5, 2], [6, 2], [6, 3], [6, 4]],
        [[1, 1], [1, 2], [1, 3], [2, 3], [2, 4], [2, 5], [2, 6], [3, 6], [4, 6], [4, 5], [4, 4], [4, 3], [4, 2], [5, 2], [6, 2], [6, 3], [6, 4], [6, 5]],
        [[5, 1], [5, 2], [6, 2], [6, 3], [6, 4], [5, 4], [4, 4], [3, 4], [3, 3], [3, 2], [3, 1], [2, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6]],
        [[3, 1], [3, 2], [3, 3], [4, 3], [5, 3], [6, 3], [6, 4], [6, 5], [6, 6], [5, 6], [4, 6], [3, 6], [3, 5], [2, 5], [1, 5], [1, 4], [1, 3], [1, 2]],
        [[2, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 6], [3, 6], [3, 5], [3, 4], [3, 3], [4, 3], [5, 3], [5, 4], [5, 5], [6, 5], [6, 6]],
        [[4, 1], [5, 1], [6, 1], [6, 2], [6, 3], [5, 3], [4, 3], [3, 3], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [6, 6]],
        [[1, 1], [2, 1], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [1, 4], [1, 5], [2, 5], [3, 5], [4, 5], [4, 6], [5, 6], [6, 6], [6, 5], [6, 4], [6, 3]],
        [[6, 2], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [6, 5]]]


    var randomNumber = Math.floor(Math.random() * 11);
    console.log("path: " + randomNumber);
    for (i = 0; i <= 17; i++) {
        document.getElementById('path' + (i + 1)).style.gridRow = (path[randomNumber][i][0]);
        document.getElementById('path' + (i + 1)).style.gridColumn = (path[randomNumber][i][1]);
    }
}

var bugLocation = 0;
var playLocation = 0;
var bug;
var player;
var bang;
var success;
var end;

//Reset the map
function reset() {
    //Clean stuffs

    if (bugLocation != 0) {
        //Bug
        bug = document.querySelector('#path' + bugLocation + ' .bug');
        bug.style.display = "none";
        //Player
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        player.style.display = "none";
        //Bang
        bang = document.querySelector('.bang');
        bang.style.display = "none";
        //End
        end = document.querySelector('#path18 .end');
        end.style.display = "inline";
        //Success
        success = document.querySelector('#path18 .success');
        success.style.display = "none";

        //Reset starting point
        bugLocation = 1;
        playLocation = 3;
        bug = document.querySelector('#path' + bugLocation + ' .bug');
        bug.style.display = "inline";
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        player.style.display = "inline";
    } else {
        //Reset starting point
        bugLocation = 1;
        playLocation = 3;
        bug = document.querySelector('#path' + bugLocation + ' .bug');
        bug.style.display = "inline";
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        player.style.display = "inline";

        //Clean
        //Bang
        bang = document.querySelector('.bang');
        bang.style.display = "none";
        //End
        end = document.querySelector('#path18 .end');
        end.style.display = "inline";
        //Success
        success = document.querySelector('#path18 .success');
        success.style.display = "none";
    }
}

//Move the bug
function moveBug() {
    bug = document.querySelector('#path' + bugLocation + ' .bug');
    bug.style.display = "none";
    bugLocation++;
    if (playLocation == bugLocation) {
        bug = document.querySelector('#path' + bugLocation + ' .bug');
        bug.style.display = "none";
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        bug.style.display = "none";
        bang = document.querySelector('#path' + playLocation + ' .bang');
        bang.style.display = "inline";
    } else {
        bug = document.querySelector('#path' + bugLocation + ' .bug');
        bug.style.display = "inline";
    }
}

//Move the player
function movePlayer() {
    if (playLocation == 17) {
        player = document.querySelector('#path' + playLocation + ' .player');
        player.style.display = "none";
        end = document.querySelector('#path18 .end');
        end.style.display = "none";
        success = document.querySelector('#path18 .success');
        success.style.display = "inline";
    } else {
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        bug.style.display = "none";
        playLocation++;
        player = bug = document.querySelector('#path' + playLocation + ' .player');
        bug.style.display = "inline";
    }
}

function loadComponentToId(nodeId, component) {
    fetch(component)
      .then(res => res.text())
      .then(body => document.querySelector(nodeId).innerHTML = body)
  }

loadComponentToId("#path-container", "./tiles.html");
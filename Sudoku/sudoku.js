var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function () { // when game is load we will call a setGame function
    setGame();
}

function setGame() { // creating our digits using javaScript
    for (let i = 1; i <= 9; i++) { // digits 1-9
        // <div id="1" class="number">1</div>
        let number = document.createElement("div"); // created div tag using javaScript
        number.id = i
        number.innerText = i;                         // basically it means it'll take div tag we created
        number.addEventListener("click", selectNumber); // and from that div tag it will create 9rows 9 column
        number.classList.add("number");                // boards nd inside it 81tiles for the board
        document.getElementById("digits").appendChild(number);
    }

    // boards 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected"); // if their is number selected already then remove grey background
    }
    numSelected = this; // this refer to div itself
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") { // i.e it has number itself so just do nothing nd return
            return;
        }
        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if (solution[r][c] = numSelected.id) {
            this.innerText = numSelected.id;
        }
        else { // if solution doesn't match
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
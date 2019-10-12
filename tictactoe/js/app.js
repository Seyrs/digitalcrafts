//Retrieve the board div
var boardElement = document.getElementById("board");



//Set the board represential data
//This will be the multidimensional grid
var boardData = [];

//Set the current Player
var currentPlayer = "Player 1";
var playerOneScore= 0;
var playerTwoScore = 0;
var win = 0;
//Creates The Board
var makeBoard = function() {
    
    //The Row
    for(var row =0; row<3; row++) {

        //Create row html element
        var rowElement = document.createElement("div");
        rowElement.className="row"

        //Start making the multidimensional array.
        //The row is the first array which then
        //creates another array inside of it.
        boardData[row] = [];

        //Create The Columns that will go into the rows
        for(var column=0; column<3; column++) {

            //Create a column element
            var columnElement = document.createElement("div");
            //Assign a class to the column element
            columnElement.className ="col border board-piece";
            //Set Default text to the columnelment
            columnElement.innerHTML = "Row " + row + " Column " + column;
            //Set an id of the coordinates as the current row and column
            columnElement.id= row + "-" + column;

            //Set the onclick for when a user clicks the column
            columnElement.onclick = function() {
                
                //Get the id assigned to the column
                var idString = this.id;
                //Split the id into an array of coordinations
                var idArray = idString.split("-");

                //Execute a click action
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()){
                    alert("You cannot change this piece");
                } else if(currentPlayer == "Player 1") {
                    /**
                     * If the player is player 1, get the X piece
                     * and then switch to player 2
                     */
                    this.innerHTML = getXPiece();
                    
                    document.getElementById("turn").innerHTML = "Player TWO: GO!";
                    document.getElementById("score").innerHTML = currentPlayer + " Score is " + playerOneScore;
                    //alert("It is now your turn " + currentPlayer);
                    currentPlayer = "Player 2";
                    //After the move, check if any of the winning
                    //conditions have been met
                    checkWinVertical(idArray[0], idArray[1], getXPiece());
                    checkWinHorizontal(idArray[0], idArray[1], getXPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getXPiece());
                    
                } else if(currentPlayer == "Player 2"){
                    /**
                     * If the player is player 2, get the O piece
                     * and then switch to player 1
                     */
                    this.innerHTML = getOPiece();
                    
                    document.getElementById("turn").innerHTML = "Player ONE: GO!";
                    document.getElementById("score").innerHTML = currentPlayer + " Score is " + playerTwoScore;
                    //alert("It is now your turn " + currentPlayer);
                    currentPlayer = "Player 1";
                    //After the move, check if any of the winning
                    //conditions have been met
                    checkWinVertical(idArray[0], idArray[1], getOPiece());
                    checkWinHorizontal(idArray[0], idArray[1], getOPiece());
                    checkWinDiagonal(idArray[0], idArray[1], getOPiece());
                  
                  
                }
                
            } 

            //Add the columnElement to the multidimensional array
            boardData[row][column] = columnElement;

            //Add the html of the element to the row
            rowElement.appendChild(columnElement);

        }

        //Add the html to the board, this will
        //update the html on the website
        boardElement.appendChild(rowElement);

    }
}

//Get the represenation of the X piece
var getXPiece = function() {
    return "X";
}


//Get the representation of the O piece
var getOPiece = function() {
    return "O";
}


//Check to see if a user has won vertically
var checkWinVertical = function(row, column, piece) {
    var points = 0;

    if(boardData[row-2] && boardData[row-1][column] && boardData[row-2][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row-1] && boardData[row-1][column] && boardData[row-1][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row+1] && boardData[row+1][column] && boardData[row+1][column].innerHTML == piece) {
        points++;
    }

    if(boardData[row+2] && boardData[row+1][column] && boardData[row+2][column].innerHTML == piece) {
        points++;
    }

    if(points >=2) {
        alert("You have won " + currentPlayer);
        reset();
        win=="Player 1" 
            return win+=1;
        } if(winn+=1 && currentPlayer == "Player 1") {
                return playerOneScore+=1;
        } else if(win++ && currentPlayer== "Player 2")
                return playerTwoScore+=1;
    }
    
   


//Check to see if a user has won horizontally
var checkWinHorizontal = function(row, column, piece) {
    var points = 0;

    if(boardData[row] && boardData[row][column-2] && boardData[row][column-2].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column-1] && boardData[row][column-1].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column+1] && boardData[row][column+1].innerHTML == piece) {
        points++;
    }

    if(boardData[row] && boardData[row][column+2] && boardData[row][column+2].innerHTML == piece) {
        points++;
    }

    if(points >= 2) {
        alert("You have won " + currentPlayer);
       reset();
      
    }

}

//Check to see if a user has one on a diagonal
var checkWinDiagonal = function(row, column, piece) {
    var points = 0;

    if(boardData[row-2] && boardData[row-2][column-2] && boardData[row-2][column-2].innerHTML == piece) {
        points++;
    }

    if(boardData[row-1] && boardData[row-1][column-1] && boardData[row-1][column-1].innerHTML == piece) {
        points++;
    }

    if(boardData[row+1] && boardData[row+1][column+1] && boardData[row+1][column+1].innerHTML == piece) {
        points++;
    }

    if(boardData[row+2] && boardData[row+2][column+2] && boardData[row+2][column+2].innerHTML == piece) {
        points++;
    }

    if(points >= 2) {
        alert("You have won " + currentPlayer);
        reset();
    }

}
reset =function() {
    boardElement.innerHTML ="";
    boardData= [];
    makeBoard();
}
//Call the function that makes the grid
makeBoard();


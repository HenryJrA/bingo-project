
let  miniNum = 1;
let maxNum = 100;
let range = maxNum - miniNum;
let n = [];
let letter;
let gameOver = true;
let table = document.querySelector("table")
table.onclick = function(e){
    console.log(e);
    highlight(e.target);

}
function highlight(div){
    div.classList.toggle("highligh");
}
var winSets = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
    [0, 4, 12, 20, 24]
];


function init(){
for(i=0; i<=24; i++){
    let rdmnm= Math.floor(Math.random() * range) + miniNum;
    if (rdmnm >= 1 && rdmnm <= 20) letter ="B"    
    if (rdmnm >= 21 && rdmnm <= 40) letter ="I"
    if (rdmnm >= 41 && rdmnm <= 60) letter ="N"
    if (rdmnm >= 61 && rdmnm <= 80) letter ="G"
    if (rdmnm >= 81 && rdmnm <= 100) letter ="O"
    if(n.indexOf(rdmnm) < 0) rdmnm.push(n);
    
    console.log(letter + rdmnm);
    
    
}
}
init()
function checkBingo(){
    winSets.forEach(checkwinning)

}
function checkwinning(element, index, array){
    var nummatch = 5;
    for(i=0; i <element.length; i++){}
}
function clickedCell(){
    if(!gameOver){
        if(this.className === "picked"){
            this.className = "empty";
            this.style.color = "black";

        }else{
            this.className ==="picked";
            this.style.color ="red";
        }

    }
}
function createBoard() {
    
    // get a reference to the table element that contains the board
    var board = document.getElementById("tblsq");
    
    // create the rows and columns that make up the board
    for (row = 0; row < NUM_ROWS; row++) {
        
        var tr = document.createElement("tr");
        for (col = 0; col < NUM_COLS; col++) {
            
            var td = document.createElement("td");
            
            // by default, all cells are unselected
            td.className = "empty";
            tr.appendChild(td); 
            
            // make all cells clickable, except FREE space
            if (row !== 2 || col !== 2) {
                td.addEventListener("click", clickCell);
            }
        }
        board.appendChild(tr);
    }    
}
// const squares = document.getElementById("square");
// squares.forEach((square)=>{
//     square.addEventListener("click","handleClick")
// })
    


// while (n.length<26){
//     let rdm= Math.floor(Math.random() * maxNum) + miniNum;
//     if(!n.includes(rdm)){
//         n.push(rdm);
//         console.log(n.sort());
//     }
// }


// do{

//     randNum = Math.round(Math.random()* maxNum);
//     console.log(randNum)
// }while(n == "")

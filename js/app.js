
let  miniNum = 1;
let maxNum = 100;
let range = maxNum - miniNum;
let n = [];
let letter;
// let gameOver = true;
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
    // query seletor by element or class and ten
    let rdmnm= Math.floor(Math.random() * maxNum) + miniNum;
    let B = Math.floor(Math.random() * 20) + 1
    let B1 = Math.floor(Math.random() * 19) + 2
    let B2 = Math.floor(Math.random() * 18) + 3
    let B3 = Math.floor(Math.random() * 17) + 4
    let B4 = Math.floor(Math.random() * 16) + 5
    let I = Math.floor(Math.random() * 40) + 21;
    let I1 = Math.floor(Math.random() * 39) + 22;
    let I2 = Math.floor(Math.random() * 38) + 23;
    let I3 = Math.floor(Math.random() * 37) + 24;
    let I4 = Math.floor(Math.random() * 36) + 25;
    let N = Math.floor(Math.random() * 60) + 41;
    let N1 = Math.floor(Math.random() * 59) + 42;
    let N2 = Math.floor(Math.random() * 58) + 43;
    let N3 = Math.floor(Math.random() * 57) + 44;
    let N4 = Math.floor(Math.random() * 56) + 45;
    let G = Math.floor(Math.random() * 80) + 61;
    let G1 = Math.floor(Math.random() * 79) + 62;
    let G2 = Math.floor(Math.random() * 78) + 63;
    let G3 = Math.floor(Math.random() * 77) + 64;
    let G4 = Math.floor(Math.random() * 79) + 45;
    let O = Math.floor(Math.random() * 100) + 81;
    let O1 = Math.floor(Math.random() * 100) + 81;
    let O2 = Math.floor(Math.random() * 100) + 81;
    let O3 = Math.floor(Math.random() * 100) + 81;
    let O4 = Math.floor(Math.random() * 100) + 81;
    // if (rdmnm >= 1 && rdmnm <= 20) letter ="B"    
    // if(n.indexOf(rdmnm) < 0) rdmnm.push(n);
    
    console.log(letter + rdmnm);
    document.getElementById("square0").innerHTML=B 
    document.getElementById("square1").innerHTML=B1 
    document.getElementById("square2").innerHTML=B2 
    document.getElementById("square3").innerHTML=B3 
    document.getElementById("square4").innerHTML=B4 
    document.getElementById("square5").innerHTML=I 
    document.getElementById("square6").innerHTML=I1 
    document.getElementById("square7").innerHTML=I2
    document.getElementById("square8").innerHTML=I3
    document.getElementById("square9").innerHTML=I4
    document.getElementById("square10").innerHTML=N 
    document.getElementById("square11").innerHTML=N1 
    document.getElementById("square12").innerHTML=N2 
    document.getElementById("square13").innerHTML=N3 
    document.getElementById("square14").innerHTML=N4 
    document.getElementById("square15").innerHTML=G
    document.getElementById("square16").innerHTML=G1
    document.getElementById("square17").innerHTML=G2 
    document.getElementById("square18").innerHTML=G3
    document.getElementById("square19").innerHTML=G4
    document.getElementById("square20").innerHTML=O
    document.getElementById("square21").innerHTML=O1
    document.getElementById("square22").innerHTML=O2
    document.getElementById("square23").innerHTML=O3
    document.getElementById("square24").innerHTML=O4
    if (rdmnm >= 21 && rdmnm <= 40) letter ="I"
    if (rdmnm >= 41 && rdmnm <= 60) letter ="N"
    if (rdmnm >= 61 && rdmnm <= 80) letter ="G"
    if (rdmnm >= 81 && rdmnm <= 100) letter ="O"
    
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
// function createBoard() {
    
//     // get a reference to the table element that contains the board
//     var board = document.getElementById("tblsq");
    
//     // create the rows and columns that make up the board
//     for (row = 0; row < NUM_ROWS; row++) {
        
//         var tr = document.createElement("tr");
//         for (col = 0; col < NUM_COLS; col++) {
            
//             var td = document.createElement("td");
            
//             // by default, all cells are unselected
//             td.className = "empty";
//             tr.appendChild(td); 
            
//             // make all cells clickable, except FREE space
//             if (row !== 2 || col !== 2) {
//                 td.addEventListener("click", clickCell);
//             }
//         }
//         board.appendChild(tr);
//     }    
// }
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


let  miniNum = 1;
let maxNum = 100;
let range = maxNum - miniNum;
let n = [];
let letter;
// let gameOver = true;
b= new Array(1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20),
i= new Array(21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,),
n= new Array(41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60),
g=new Array(61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80),
o=new Array(81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100)
const currentBallDiv = document.querySelector("#current-ball");
let table = document.querySelector("table")
table.onclick = function(e){
    console.log(e);
    highlight(e.target);

}
function highlight(div){
    div.classList.toggle("highligh");
    div.style.color = "black"
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
    let rdmnm=Math.floor(Math.random()*(maxNum-miniNum+1)+miniNum)
    let B = Math.floor(Math.random() *  (20) + 1)
    let B1 = Math.floor(Math.random() * (20) + 1)
    let B2 = Math.floor(Math.random() * (20) + 1)
    let B3 = Math.floor(Math.random() * (20) + 1)
    let B4 = Math.floor(Math.random() * (20) + 1)
    let I = Math.floor(Math.random() *  (40-20+1) + 21);
    let I1 = Math.floor(Math.random() * (40-20+1) + 21);
    let I2 = Math.floor(Math.random() * (40-20+1) + 21);
    let I3 = Math.floor(Math.random() * (40-20+1) + 21);
    let I4 = Math.floor(Math.random() * (40-20+1) + 21);
    let N = Math.floor(Math.random() *  (60-41+1) + 41);
    let N1 = Math.floor(Math.random() * (60-41+1) + 41);
    let N2 = Math.floor(Math.random() * (60-41+1) + 41);
    let N3 = Math.floor(Math.random() * (60-41+1) + 41);
    let N4 = Math.floor(Math.random() * (60-41+1) + 41);
    let G = Math.floor(Math.random() *  (80-61+1) + 61);
    let G1 = Math.floor(Math.random() * (80-61+1) + 61);
    let G2 = Math.floor(Math.random() * (80-61+1) + 61);
    let G3 = Math.floor(Math.random() * (80-61+1) + 61);
    let G4 = Math.floor(Math.random() * (80-61+1) + 61);
    let O = Math.floor(Math.random() *  (100-81+1) + 81);
    let O1 = Math.floor(Math.random() * (100-81+1) + 81);
    let O2 = Math.floor(Math.random() * (100-81+1) + 81);
    let O3 = Math.floor(Math.random() * (100-81+1) + 81);
    let O4 = Math.floor(Math.random() * (100-81+1) + 81);
    // if(n.indexOf(rdmnm) < 0) rdmnm.push(n);
    
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
    // if (rdmnm >= 1 && rdmnm <= 20) letter ="B"    
    // if (rdmnm >= 21 && rdmnm <= 40) letter ="I"
    // if (rdmnm >= 41 && rdmnm <= 60) letter ="N"
    // if (rdmnm >= 61 && rdmnm <= 80) letter ="G"
    // if (rdmnm >= 81 && rdmnm <= 100) letter ="O"



    // function to display a number ebry 5 sec, 
    // console.log(letter + rdmnm);
    currentBallDiv.innerHTML = letter + rdmnm
}
}

init()
// function checkWinning(){
//     if(winSets  ==true){
//         return "BINGO!!"
//     }else{
//         return "BAD BINGO"
//     }
// }
// console.log(checkWinning())


// const view = document.createElement("div");
// view.div = "displayScreen";
// document.input.appendChild(view)

document.getElementById("reset")
function reset(){
    reset = location.reload()
    reset.addEventListener("click", reload, false)
}
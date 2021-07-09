
let  miniNum = 1;
let maxNum = 100;
let range = maxNum - miniNum;
let n = [];
let letter;
// let gameOver = true;
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
    [4, 8, 12, 16, 20]
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
    if (rdmnm >= 1 && rdmnm <= 20) letter ="B"    
    if (rdmnm >= 21 && rdmnm <= 40) letter ="I"
    if (rdmnm >= 41 && rdmnm <= 60) letter ="N"
    if (rdmnm >= 61 && rdmnm <= 80) letter ="G"
    if (rdmnm >= 81 && rdmnm <= 100) letter ="O"
    // let nbrArray =[] 
    
    // numArray.forEach(init);
    let numArray = letter + rdmnm
    const result = Array.from(numArray)
    // function to display a number ebry 5 sec, 
    currentBallDiv.innerHTML = numArray
    // numArray.forEach((number, idx) => {
    //     setTimeout(()=> {
    //       displayEl.innerHTML = numArray
    //     }, idx * 5000)
      
    
    console.log(numArray);
    // 2. add value for the div/id attribute
    // 3. append the elemnt to the body
    
    document.getElementById("new-number")
}
}

function bingo(){
bingo = window.print(numArray)
bingo.addEventListener("click")
}
init()
let bingoBtn =document.getElementById("bingo")
bingoBtn.addEventListener("click", handleClick)
function handleClick(evt){


}
function checkWinning(){
    if (Math.abs(table[0] + table[1] + table[2] + table[3] + table[4]) === 5) return table[0];
    if (Math.abs(table[5] + table[6] + table[7] + table[8] + table[9]) === 5) return table[5];
    if (Math.abs(table[10] + table[11] + table[12] + table[13] + table[14]) === 5) return table[10];
    if (Math.abs(table[15] + table[16] + table[17] + table[18] + table[19]) === 5) return table[15];
    if (Math.abs(table[20] + table[21] + table[22] + table[23] + table[24]) === 5) return table[20];
    if (Math.abs(table[0] + table[5] + table[10] + table[15] + table[20]) === 5) return table[0];
    if (Math.abs(table[1] + table[6] + table[11] + table[16] + table[21]) === 5) return table[1];
    if (Math.abs(table[2] + table[7] + table[12] + table[13] + table[14]) === 5) return table[2];
    if (Math.abs(table[3] + table[8] + table[13] + table[18] + table[23]) === 5) return table[3];
    if (Math.abs(table[4] + table[9] + table[14] + table[19] + table[24]) === 5) return table[4];
    if (Math.abs(table[0] + table[6] + table[12] + table[18] + table[24]) === 5) return table[0];
    if (Math.abs(table[4] + table[8] + table[12] + table[16] + table[20]) === 5) return table[4];
    return MessageChannel.innerHTML("BINGO!")
    
}
// const view = document.createElement("div");
// view.div = "displayScreen";
// document.input.appendChild(view)

document.getElementById("reset")
function reset(){
    reset = location.reload()
    reset.addEventListener("click", reload, false)
}
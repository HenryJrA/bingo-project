// function generateRandomNum(){

//     var n = new Array(25);
//     var nums = new Array(25);
//     for (i= 0; i <nums.length; i ++){
//         var randomNums = Math.floor(Math.random() * 100);
//         for (j=0; j <n.lenght; j++){
//             if(n[j] == randomNums){
//                 randomNums = Math.floor(Math.random() * 100);
//             }
//         }n[i] = randomNums;
//     }
//     for(i= 0; i<nums.length; i++){
//         document.getElementById("square" + i).innerHTML = n[i];
    
// }
// }
// board.onclick = function(e){
//     console.log(e);
//     highlight(e.target);

// }
// function highlight(div){
//     div.classList.toggle("highligh");
// }

let  miniNum = 1;
let maxNum = 100;
let range = maxNum - miniNum;
let n = [];
let letter;

function init(){
for(i=0; i<=24; i++){
    let n= Math.floor(Math.random() * range) + miniNum;
    if (n >= 1 && n <= 20) letter ="B"    
    if (n >= 21 && n <= 40) letter ="I"
    if (n >= 41 && n <= 60) letter ="N"
    if (n >= 61 && n <= 80) letter ="G"
    if (n >= 81 && n <= 100) letter ="O"
    
    console.log(letter + n);
    
    
}
init()
const squares = document.getElementById("square");
squares.forEach((square)=>{
    square.addEventListener("click","handleClick")
})
    


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

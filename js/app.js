window.onload = initAll;
var usedNums = new Array(26);

const currentBallDiv = document.querySelector("#current-ball");
function initAll() {
	if (document.getElementById) {
		document.getElementById("reload").onclick = anotherCard;
		newCard();
	}
	else {
		alert("Sorry, your browser doesn't support this script");
	}
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);
  
	for (var i=0; i<24; i++) {
	  var currSquare = "square" + i;
	  if (document.getElementById(currSquare).className != "") {
		document.getElementById(currSquare).className = "pickedBG";
		setSquares = setSquares | Math.pow(2,i);
	  }
	}
  
	for (var i=0; i<winners.length; i++) {
	  if ((winners[i] & setSquares) == winners[i]) {
		winningOption = i;
	  }
	}
  
	if (winningOption > -1) {
	  // Display "Bingo" on the screen
	  var bingoDiv = document.createElement("div");
	  bingoDiv.innerHTML = "BINGO";
	  bingoDiv.style.position = "absolute";
	  bingoDiv.style.top = "50%";
	  bingoDiv.style.left = "50%";
	  bingoDiv.style.transform = "translate(-50%, -50%)";
	  bingoDiv.style.fontSize = "150px";
	  bingoDiv.style.color = "red";
	  bingoDiv.style.textAlign = "center";
	  document.body.appendChild(bingoDiv);
  
	  for (var i=0; i<24; i++) {
		if (winners[winningOption] & Math.pow(2,i)) {
		  currSquare = "square" + i;
		  document.getElementById(currSquare).className = "winningBG";
		}
	  }
	}
  };
  

function newCard() {
	for (var i=0; i<24; i++) {
		setSquare(i);
	}
}


function setSquare(thisSquare) {
	var currSquare = "square" + thisSquare;
	var colPlace = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
	var colBasis = colPlace[thisSquare] * 1;
	var newNum;

	do {
		newNum = colBasis + getNewNum() + 1;
	}
	while (usedNums[newNum]);
    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
    document.getElementById(currSquare).className = "";
    document.getElementById(currSquare).onmousedown = toggleColor;
}


function getNewNum() {
	return Math.floor(Math.random() * 25);
}


function anotherCard() {
	for (var i=1; i<usedNums.length; i++) {
		usedNums[i] = false;
	}
	newCard();
	return false;
}


function toggleColor(evt) {
	if (evt) {
		var thisSquare = evt.target;
	}	else {
		var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
		thisSquare.className = "pickedBG";
	}	else {
		thisSquare.className = "";
	}
	checkWin();
}


// 	var winningOption = -1;
// 	var setSquares = 0;
// 	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

// 	for (var i=0; i<24; i++) {
// 		var currSquare = "square" + i;
// 		if (document.getElementById(currSquare).className != "") {
// 			document.getElementById(currSquare).className = "pickedBG";
// 			setSquares = setSquares | Math.pow(2,i);
// 		}
// 	}

// 	for (var i=0; i<winners.length; i++) {
// 		if ((winners[i] & setSquares) == winners[i]) {
// 			winningOption = i;
// 		}
// 	}
	
// 	if (winningOption > -1) {
// 		for (var i=0; i<24; i++) {
// 			if (winners[winningOption] & Math.pow(2,i)) {
// 				currSquare = "square" + i;
// 				document.getElementById(currSquare).className = "winningBG";
// 			}
// 		}
// 	}
// };




let nums = []
let numIdxDisplayed = 0
let numDisplayIntervalId

function fillNums() {
    for (let i=1; i < 26; i++) {
        nums.push(i)
    }
}

function shuffleNums(numArray) {
    let newArray = []
    for (i=1; i=numArray.length; i++) {
        randIdx = Math.floor(Math.random()* numArray.length)
        newArray.push(numArray.splice(randIdx,1)[0])
    }
    return newArray
}

function displayNum() {
    console.log(nums[numIdxDisplayed])
    numIdxDisplayed++
    currentBallDiv.textContent = nums[numIdxDisplayed]
}
fillNums()
nums = shuffleNums(nums)

numDisplayIntervalId = setInterval(() => {
    displayNum()
}, 5000);



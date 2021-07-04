function listOfNumbers(minimum = 1, maximum = 100){
    
}

function rdmSelectNumber(numbersAvailable){
    const index = Math.round(Math.random() * (numbersAvailable.length - 1));
    return numbersAvailable[index];
}
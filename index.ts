

console.log("hellow");


// var readlineSync = require('readline-sync');
// var userName = readlineSync.question('May I have your name? ');

// console.log(userName);

const randomNumberRange = require('random-number-range');
const generetNumber = randomNumberRange({ min: 0, max: 100 });

function choseNumberFunction (input : number) : number{

    var readlineSync = require('readline-sync'),
    MAX = 100, MIN = 0, choseNumber : number = input, key;
  console.log('\n\n' + (new Array(40)).join(' ') +
    '[A] <- -> [D]  FIX: [SPACE]\n');
  while (true) {
    console.log('\x1B[1A\x1B[K|' +
      (new Array(choseNumber + 1)).join('-') + 'O' +
      (new Array(MAX - choseNumber + 1)).join('-') + '| ' + choseNumber);
    key = readlineSync.keyIn('',
      {hideEchoBack: true, mask: '', limit: 'ad '});
    if (key === 'a') { if (choseNumber > MIN) { choseNumber--; } }
    else if (key === 'd') { if (choseNumber < MAX) { choseNumber++; } }
    else { break; }
  }
    return choseNumber
}

function info (input : number) : number{

    if(input > generetNumber){
      console.log("Mniej")
    }
    if(input < generetNumber){
      console.log("Więcej")
    }
    
    return 1

}


var input : number = choseNumberFunction(50)

info(input)

while(!(input === generetNumber)){

    input = choseNumberFunction(input);
    info(input)                                               
    //console.log(generetNumber)
 
}


console.log( 'Wygrałeś to byłę: '+ generetNumber)


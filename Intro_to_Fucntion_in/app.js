console.log('Intro to Funtion in JavaScript');
// Intro to Funtion in JavaScript
// JavaScript Funtion

// -> its a block of statements which taken in a 
// set parameters and does some process and returns the result.

// -> Re-usability					
	
	
	
// How to decleir the Funtion

for (let i = 1; i <= 10; i++) {
        console.log(i);     
    }

function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);     
    }
}

printNumber(); // Funtion Call / execution

//pass multy premiter in Funtion

function printNumber( eNumber) {
    for (let i = 1; i <= eNumber; i++) {
        console.log(i);     
    }
}

printNumber(5);

function printNumber(sNumber, eNumber) {
    for (let i = sNumber; i <= eNumber; i++) {
        console.log(i);     
    }
}

printNumber(10,30);

function printNumber(sNumber, eNumber ,increment) {
    for (let i = sNumber; i <= eNumber; i+=increment) {
        console.log(i);     
    }
}

printNumber(0,30,3);

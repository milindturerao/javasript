console.log('Operators');

// Assignment Operators : = ;

let number = 10;

console.log(number);

// Arithmetic Operators : + , - , * , / , % ;

// let num1 = 1;
// let num2 =20;
// let add;

// add =num1-num2;
// console.log(add);

// Short hand Math Operators : +=, -=, /=, *=;

let num1 = 40;
	let num2 = 20;
	let add = 30;
	
	// add = add +(num1 + num2);
	add += (num1 + num2);
	console.log(add); // 0


  // Conditional Operators : <, >, <=, >=, !== ;

num1 = 35;
if (num1 !== 35) {
  console.log("You Failed the Exam");
} else {
  console.log("You pass the Exam");
}


// Unary Operators : ++ , -- ;

let x =2;
x = x + 4;
x+=1;
x--;
x--;
console.log(x);


// Logical Operators : &&, ||, ^ ;

// AND => T && T -> T      f && t ->f
// 	OR => F || F -> F      F || T -> T
// 	XOR => T ^ F , F ^ T -> T

let inRelation = true;
  let parentsAgreed = false;
  if(inRelation ^ parentsAgreed){
  console.log('get Marry Soon');
  }  
  else{
  console.log('wait until the parents Agreed');
  }

  // Ternary Operators : ? ;

  
	// Syntax : (Conditional) ? true , false ;
	
	let marks = 35;
	let message = '';
	(marks <= 35)? message = 'You Failed The Exam': message='You Cleared The Exam' ;
  console.log(message);


  // Equlity Operators : ==, === ;

  num1 = 20;
  num2 = 20;
   
  if (num1 === num2) {
    console.log('this is equal');
  }
  else{
    console.log('this is not equal');
  }










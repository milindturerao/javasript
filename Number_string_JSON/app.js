console.log('Number, string,JSON object');

// Max number

console.log(Number.MAX_SAFE_INTEGER)
let max = Number.MAX_SAFE_INTEGER;
document.write(`<h1>${max}</h1>`);
// min Number
console.log(Number.MIN_SAFE_INTEGER)
let min = Number.MIN_SAFE_INTEGER;
document.write(`<h1>${min}</h1>`);

// positive Number
console.log(Number.POSITIVE_INFINITY)
let positive = Number.POSITIVE_INFINITY;
document.write(`<h1>${positive}</h1>`);

// Negative Number
console.log(Number.NEGATIVE_INFINITY)
let Negative = Number.NEGATIVE_INFINITY;
document.write(`<h1>${Negative}</h1>`);

// converting string to number to String

let str = '112';
let num = parseInt(str)
console.log(str)
console.log(num);
console.log(`${str} ${typeof str} ${num} ${typeof num}`);


let str2 = '100145';

let num2 = Number.parseFloat(str2);

console.log(`${str2}  ${typeof str2} => ${typeof num2}`);

// toString

let str1 = num2.toString();

console.log(`${num2}  ${typeof num2} => ${typeof str1}`);

// Fixet amount

let amount = 200;

console.log(amount.toFixed(1));


// String Related Operations
console.log('String Related Operations');

let msg = 'good morning';

console.log( msg +msg.length);

console.log(` ${msg} `+msg.toUpperCase());

msg = 'GOOD MORNING';
console.log(` ${msg} `,msg.toLowerCase());

// substr(start index , no of chars)

console.log(msg.substr(0,1));
console.log(msg.substr(0,2));
console.log(msg.substr(0,3));
console.log(msg.substr(0,4));

console.log(msg.substr(5,1));
console.log(msg.substr(5,2));
console.log(msg.substr(5,3));
console.log(msg.substr(5,4));
console.log(msg.substr(5,5));
console.log(msg.substr(5,6));
console.log(msg.substr(5,7));
msg = 'good Morning';
console.log(msg.charAt(5))
console.log(msg.charCodeAt(1))

// JSON Object
console.log('JSON Object');

let student = {
    name:'Suyog Dale',
    age:23,
    course:'Frontend',
    college:'AC.Patil'
}

console.log(student);

let studentStr = JSON.stringify(student);

console.log(studentStr);

let newStudent = JSON.parse(studentStr);
console.log(newStudent);

// 4. Triangle String One
 msg = 'MILIND TURERAO';
let triangleOne = (str) => {
let tempStr = '';
for (let i=1; i<=str.length; i++) {
tempStr += `${str.substr(0,i)} \n`;
}
return tempStr;
};

console.log(triangleOne(msg));

//  msg = 'Good Morning OOOOO';
// let findZeros = (str) => {
//     let count = 0;
//     for (let i = 0; i <= str.length - 1; i++) {
//         let char = str.charAt(i);
//         if (char === 'o' || char === 'O') {
//             count++;
//         }

//     }

//     return count;
// };
// console.log(`The Zeros in Strings is: ${findZeros (msg)}`);

msg='Good Morning'
let findO = (str)=>{
let count = '';
for (let i = str.length; i >= 0; i--) {
    let char = str.charAt(i);
   count +=char;
}
return count;
}
console.log(`The Zeros in Strings is: ${findO(msg)}`)

msg = 'aca';

let isPalindrome = (str)=>{
    if (str === findO(str)) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(msg));
// // 4. Triangle String Two
// let addSpace =(number) => {
//     let tempSpace = '';
//     for (let i=1;i<=number; i++){
//     tempSpace += ' ';
// }
//     return tempSpace;
// };

// msg = 'MILIND TURERAO';
// let triangleTwo = (str) => {
// let tempStr = '';
// for (let i=0; i<=str.length -1; i++){
// tempStr += `${addSpace(i)} ${str.substr(i)} \n`;
// }
// return tempStr;
// };
// console.log(triangleTwo(msg));

// // 5. Triangle String Three

// msg = 'MILIND TURERAO';

// let triangleThree = (str) => { 
//     let tempStr = '';
//     for (let i= str.length; i >= 1; i--) { 
//         tempStr += `${str.substr( 0,i)} \n`;
//      }
//      return tempStr;
//     }; 
//     console.log(triangleThree(msg));


// // 5. Triangle String Four
//     msg = 'MILIND TURERAO';

//     let triangleFour = (str) => { 
//         let tempStr = '';
//         for (let i= str.length - 1; i >= 0; i--) { 
//             tempStr += `${addSpace(i)}${str.substr(i)} \n`;
//          }
//          return tempStr;
//         }; 
//         console.log(triangleFour(msg));    







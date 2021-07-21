console.log('Conditional & Loop Statements');
//If-Else
// let time = 22;
// let wishMessage = '';
// if (time >= 0 && time <= 12) {
//     wishMessage = "Good Morning";
// } else if (time > 12 && time <= 17) {
//     wishMessage = "Good Afternoon";
// }
// else if (time > 17 && time <= 20) {
//     wishMessage = "Good Evening";
// }
// else if (time > 20 && time <= 23) {
//     wishMessage = "Good Night";
// }
// else {
//     wishMessage = "Enter A Valid Time";
// }
// console.log(wishMessage);

// switch case


// let day = new Date().getDay();
// let today = '';
// switch (day) {
//     case 0:
//         today = 'Sunday'
//         break;
//     case 1:
//         today = 'Monday';
//         break;
//     case 2:
//         today = 'Tuesday';
//         break;
//     case 3:
//         today = 'Wednesday';
//         break;
//     case 4:
//         today = 'Thusday';
//         break;
//     case 5:
//         today = 'Friday';
//         break;
//     case 6:
//         today = 'Saturday';
//         break;

//     default:
//         today = 'Set Proper Date';
//         break;
// }

// console.log(today);



// for Loop
// for(let i=1;i <= 10;i++){
// if (i<= 9) {
//     result += `${i}, `;
// } else {
//     result += `${i} `;
// }
//     // result =`\n`;
// }
// console.log(result);


// for(let i= 10;i >= 0;i-=1){
// if (i > 0) {
//     result += `${i}, `;
// } else {
//     result += `${i}`;
// }
//     // result =`\n`;
// }
// console.log(result);


//Nestet for Loop
// let result = '';
// let number = 5;
// result = '';
// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= i; j++) {
//         result += `*  `;
//     }
//     result += `\n`;
// }
// console.log(result);

 

// While Loop


// for (let i= 0; i < 10; i++) {
//     const element = array[index];
    
// }

let result ='';
// let i = 10;
// while (i>=1) {
//     // console.log(i)
//     result +=`${i}, `;
//     i--;
// }

// i = 1;
// while (i<=10) {
//     // console.log(i);
//     result +=`${i}, `;

//     i++;
// }

// console.log(result)

// i = 1;
// while (i<=10) {
//     let j=1;
//    while (j <= i) {
//        result += `${j}, `;
//        j++
//    }
//     i++;
//     result +=`\n`
// }


i = 10;
while (i>=1) {
    let j=1;
   while (j <= i) {
       result += `${j}, `;
       j++
   }
    i--;
    result +=`\n`
}
console.log(result)


// let result = '';
// let i = 1;
// while (i <= 10) {
//     if (i<= 9) {
//         result += `${i}, `;
//     }
//     else{
//             result += `${i}`;
//     }
//     i++
// }

// let result = '';
//  i = 10;
// while (i >= 1) {
//     if (i<= 1) {
//         result += `<br>${i}`;
//     }
//     else{
//             result += `<br>${i}, `;
//     }
//     i--
// }
// document.write(result);

// console.log(result);


// Do-While Loop


i= 1;

do{
    let m = 1;
   do{
       document.write(`<h6>${m},</h6>`);
       console.log(m);
       m++
   }while (m <= i);
    i++
     //increment/decrement(always last line);
    }
    while(i <= 5);


    let student = {
        name:'milind Turerao',
        email : 'Tureraomilind8055@gmail.com',
        address : {
            city : 'Thane',
            airya: 'Ghansoli',
            pincode : 400701,

        }
    }

    console.log(student);
    console.log(student.address);












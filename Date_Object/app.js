console.log('Date Object in JavaScript');

let date = new Date();
console.log(date);

date = new Date().toDateString();
console.log(date);

date = new Date().toLocaleTimeString('en-us');
console.log(date);

let options = {timeZone:'America/New_York'}

date = new Date().toLocaleDateString('en-us',options);

console.log(date);
let time = new Date().toLocaleTimeString('en-us',options);
console.log(time);

let currentMonth = new Date().getMonth()+1;
console.log(currentMonth);


let c_day = new Date().getDate();
let c_month = new Date().getMonth()+1;
let c_year = new Date().getFullYear();

console.log(`${c_day}/${c_month}/${c_year}`);

let c_hour = new Date().getHours();
let c_minits = new Date().getMinutes();
let c_second = new Date().getSeconds();

console.log(`Dtae: ${c_day}/${c_month}/${c_year} Time: ${c_hour}:${c_minits}:${c_second}`);
document.write(`Dtae: ${c_day}/${c_month}/${c_year} <br> Time: ${c_hour}:${c_minits}:${c_second}`)


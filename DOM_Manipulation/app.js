console.log('DOM Manipulation');
console.log(document);
console.log(document.head);
console.log(document.title);
document.title = 'DOM'
console.log(document.body);

let myH1 = document.querySelector('#MyH1');
myH1.innerText = 'MILIND';
myH1.style.color = '';
myH1.style.backgroundColor = 'blue';
myH1.style.fontSize = '70px'; 
myH1.style.textAlign = 'center';
myH1.style.boxShadow = '0 0 10px black';





let sayGoodMorning = () => {
    let hiTag = document.querySelector('#msg-1');
    hiTag.innerText = 'Good Morning'; hlTag.style.backgroundColor = 'orangered';
    hlTag.style.padding = '15px';
    hiTag.style.boxShadow = '0 0 10px black';
};

let sayGoodAfternoon = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Afternoon';
    h1Tag.style.backgroundColor = 'orangered';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};


let sayGoodEvening = () => {
    let hiTag = document.querySelector('#msg-1');
    hiTag.innerText = 'Good Evening'; hlTag.style.backgroundColor = 'orangered';
    hlTag.style.padding = '15px';
    hiTag.style.boxShadow = '0 0 10px black';
};

let sayGoodNight = () => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Night';
    h1Tag.style.backgroundColor = 'orangered';
    h1Tag.style.padding = '15px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

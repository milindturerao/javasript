console.log('DOM Events Handling');


let sayGoodMorning = ()=>{
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = ' Good Morning';
    h1Tag.style.backgroundColor = 'orange';
    h1Tag.style.padding = '20px';
    h1Tag.style.boxShadow = '0 0 10px black';
}

let sayGoodAfternoon = ()=>{
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = ' Good Afternoon';
    h1Tag.style.backgroundColor = 'orange';
    h1Tag.style.padding = '20px';
    h1Tag.style.boxShadow = '0 0 10px black';
}

// sayGoodMorning()



function msg() {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = 'Good Evening';
    h1Tag.style.backgroundColor = 'red';
    h1Tag.style.padding = '20px';
    h1Tag.style.boxShadow = '0 0 10px white'
}
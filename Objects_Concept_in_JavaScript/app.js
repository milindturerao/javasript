console.log('Objects Concept in JavaScript');

let mobile = {
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    storege:{
        sdCard:'120GB',
        internal:'156GB',
        ram:'8GB'
    },
    color:'Black',
    Prize:20000
}
//access the non-existing proparty
// console.log(mobile.storege);


//access the properties using dot , [] notation
// console.log(mobile["oppo"]);

// let a = 'color';

// console.log(mobile[a]);

console.log(mobile.storege);
console.log(mobile.storege.internal);
// Create operation 
mobile.barnd ='F90+'
console.log(mobile.barnd) 
console.log(mobile);

//read operation 


// update Operaito

mobile.barnd = 'F70+';
console.log(mobile.barnd);

// Delete operation 
delete mobile.oppo
console.log(mobile.oppo);










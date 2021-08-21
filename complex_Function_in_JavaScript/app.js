console.log('complex Function in JavaScript');


// function with on object as parameter


let printObj = function  (name , age) {
    let result =`${name} ${age} `;
    console.log(result);
}

printObj('milind',29);

let printObject = function (obj) {
    // let result =`${obj}`;
    console.log(obj);
}

printObject([{nam:'Milind',age:25,email:'tureraomilind8055@gmail.com',phone:8055812379},{nam:'Milind',age:25,email:'tureraomilind8055@gmail.com',phone:8055812379},{nam:'Milind',age:25,email:'tureraomilind8055@gmail.com',phone:8055812379}]);


let techerList = {nam:'Santosh',age:25,email:'tureraomilind8055@gmail.com',phone:8055812379}

printObject(techerList);


// function with an array as a parameter

let printArray = function (array) {
    console.log(array);
}


let mobile = [{
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    color:'Black',
    Prize:20000
},
{
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    color:'Black',
    Prize:20000
},{
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    color:'Black',
    Prize:20000
},{
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    color:'Black',
    Prize:20000
},{
    oppo:'F70+',
    camera:'64Px',
    battery:'5000Mh',
    color:'Black',
    Prize:20000
}]

printArray(mobile);

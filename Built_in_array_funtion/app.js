console.log('Built in array funtion');

// Shift() -> remove the first element from array

console.log(`--------------------------Shift()-------------------------`);

let array = ['html', 'css', 'javascript','jquery', 'bootstrap'];

console.log(array);

array.shift();
console.log(array);


// unshift() -> add the first element to array
console.log(`--------------------------unshift()-------------------------`);
array = ['html', 'css', 'javascript','jquery', 'bootstrap'];

console.log(array);
array.unshift('nodejs');
console.log(array);


// push() -> add the last element to array
console.log(`--------------------------push()-------------------------`);
array = ['html', 'css', 'javascript','jquery', 'bootstrap'];

console.log(array);
array.push('nodeJs');
console.log(array);

// pop() -> remove the last element from array

console.log(`--------------------------pop()-------------------------`);
array = ['html', 'css', 'javascript','jquery', 'bootstrap'];

console.log(array);
array.pop();
console.log(array);

// sort() -> to sort the array in ascending order

console.log(`--------------------------sort()-------------------------`);
array = ['c', 'e', 'd','b', 'a'];

console.log(array);
array.sort();
console.log(array);

//reverse()-> to reverse the array elements

console.log('-------------- reverse() -------------');

array = ['c', 'e', 'd','b', 'a'];

console.log(array);
array.reverse();
console.log(array);

//reverse -> to reverse the array elements

console.log('-------------- reverse -------------');

array = ['c', 'e', 'd','b', 'a'];

console.log(array);
array.sort().reverse();
console.log(array);



// splice()-> to remove / replase from the middle
console.log('-------------- splice() -------------');

array = ['c', 'e', 'd','b', 'a'];

console.log(array);
array.splice(2,1,'f');
console.log(array);


// splice()-> to remove / replase from the middle
console.log('-------------- splice() -------------');

array = ['c', 'e', 'd','b', 'a'];

console.log(array);
array.splice(2,1,'f');
console.log(array);

// join() ->  to join the array elements to string

console.log('-------------- join() -------------');

array = ['c', 'e', 'd','b', 'a'];

console.log(array);
let arr=array.join(' - ');
console.log(arr);

let newString = 'a b c d e f g';


//split() -> to split a string to an array
console.log('-------------- slit() -------------');

// array = ['c', 'e', 'd','b', 'a'];

console.log(arr);
let split = arr.split();
console.log(split);

// slice()->  to create a new copy of an array


//filter()->to filter the array elements
let college = {
    Techer: [
        {
            id:5,
            name: 'Santosh Turerao',
            age: 30,
            work: 'Sop-dev'
        },
        {
            id:6,
            name: 'Milind Turerao',
            age: 30,
            work: 'Sop-dev'
        }
    ],
    Student: [
        {
            id: 1,
            name: 'ganesh',
            age: 20,
            designation: 'WebDevloper',
            isActive: true
        },
        {
            id: 2,
            name: 'suyog',
            age: 20,
            designation: 'WebDevloper',
            isActive: false
        },
        {
            id: 3,
            name: 'nikita',
            age: 22,
            designation: 'WebDevloper',
            isActive: false
        },
        {
            id: 4,
            name: 'prajakta',
            age: 22,
            designation: 'WebDevloper',
            isActive: true
        },]
}

console.log(college.Student[1].name);

let seniorStudent = [];
seniorStudent = college.Student.filter((stud)=>{
    return stud.age >= 22;
});

console.log(seniorStudent);




console.log('Array concept in javascript');

let Stud = ['ganesh', 'suyog', 'nikita', 'prajkta'];

// console.log(Stud[2]);

// 01. normal for - loop
for (let i = 0; i <= Stud.length - 1; i++) {
    // console.log(Stud[i]);
}
//02. for in loop upto ES5
for (const i in Stud) {
    // console.log(Stud[i]);
}
for (const i of Stud) {
    // console.log(i);
}

Stud.forEach(function (i) {
    // console.log(i)
});

Stud.forEach((i) => { console.log(i) });

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


console.log(college.Student.name)

college.Student.forEach((stud)=>{ console.log(stud.name)});

let scniorStudent = [];
college.Student.forEach((stud)=>{
    if(stud.age >= 21){
        scniorStudent.push(stud)
    }
})

console.log(scniorStudent);
let juniorStudent = []
college.Student.forEach((stud)=>{
    if(stud.age <= 20){
        juniorStudent.push(stud)
    }
})

console.log(juniorStudent);



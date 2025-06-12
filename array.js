// const languages = [
//     "javascript",
//     "Python",
//     "c"
// ]
// console.log(languages[2]) // c


// languages.push("dart") // add on last
// languages.pop() // remove from last and return last item
// languages.unshift("java") // add on first index
// languages.shift(); // remove first elem
// console.log(languages)


// for(let i = 0; i < 4; i++){
//     console.log("*")
// }

// const actors = [
//     {
//         name: "Srk",
//         payment: 2000
//     },
//     {
//         name: "hrk",
//         payment: 1000
//     },
//     {
//         name: "jjk",
//         payment: 2000
//     }
// ]

// for(let i = 0; i < actors.length; i++){
// actors[i].payment = actors[i].payment - 500;
// }


// actors.forEach((elem)=>{
// elem.payment = elem.payment - 500;
// })


// for(let actor of actors){
//     actor.payment = actor.payment - 500;
// }
// console.log(actors)



//Filter

// const students =  [
//     {
//         name:"Student 1",
//         marks:45
//     },
//     {
//         name:"Student 2",
//         marks:60
//     },
//     ,
//     {
//         name:"Student 3",
//         marks:35
//     },

// ]

// const passedStudents = students.filter((std)=>std.marks > 35)
// console.log(passedStudents) // [ { name: 'Student 1', marks: 45 }, { name: 'Student 2', marks: 60 } ]

//Map
// const users = [
//     {
//         fname:"John",
//         lname:"Doe"
//     },
//     {
//         fname:"Jane",
//         lname:"Doe"
//     }
// ]

// const mappedData = users.map((d)=>d.fname)
// console.log(mappedData) //[  'John', 'Jane' ]



//Reduce
// const movies = [
//     {
//         name:"Interstellar",
//         budget:100
//     },
//     {
//         name:"Social",
//         budget:150
//     },
//     {
//         name:"Matrix",
//         budget:300
//     },
// ]
// let total = 0;
// movies.forEach((movie)=>{
// total += movie.budget
// })
// console.log(total) // 550
// const totalBudget = movies.reduce((acc,movie)=>{
// acc = acc + movie.budget
// return acc;
// },0)
// console.log(totalBudget)



// Array of admin user IDs
// const admins = [5, 6, 1];

// Current user object
// const user = {
//     name: "xyz",
//     id: 5
// };

 // Check if the user is an admin using indexOf (returns -1 if not found)
// const isAdmin = admins.indexOf(user.id) !== -1;

// console.log(isAdmin); // true

//Include

// const userisAdmin = admins.includes(user.id)
// console.log(userisAdmin) //true


//Find

// const users = [
//     {
//         name: "xyz",
//         id:1
//     },
//     {
//         name: "abc",
//         id:2
//     },
//     {
//         name: "pqr",
//         id:3
//     },
// ]


// const checkUserId = 2;
// function findUser(checkUserId){
// const user = users.find((u)=>u.id === checkUserId ? true : false);
// return user;
// }
// const respose = findUser(checkUserId)
// console.log(respose) { name: 'abc', id: 2 }


//Sort
// const names = ["Itachi","Madara","Hinata","Naruto","Sasuke"];

// names.sort()
// console.log(names) //[ 'Hinata', 'Itachi', 'Madara', 'Naruto', 'Sasuke' ]

// Splice
//  const names = ["Itachi","Madara","Hinata","Naruto","Sasuke"];

// names.splice(2,1)
// console.log(names) //[ 'Itachi', 'Madara', 'Naruto', 'Sasuke' ]

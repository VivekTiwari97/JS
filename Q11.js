// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let universl= new Date()

console.log(universl.getFullYear());
console.log(universl.getMonth());
console.log(universl.getDate());
console.log(universl.getDay());
console.log(universl.getHours());
console.log(universl.getMinutes());

let universal1= new Date()
let oldtime= new Date(0)
console.log(universal1-oldtime);
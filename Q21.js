// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries= ["india","China","japan","america","afganishtan","Dubai", "Ethiopia","canada"]
let newcountries = countries.filter((value)=> value.includes("Ethiopia"))
console.log(newcountries);
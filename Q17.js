// 17. Write a program which tells the number of days in a month.

let getdaysInMonth= (month,Year)=>{
return new Date(Year, month,0).getDate()
}

console.log(getdaysInMonth(4,2023));
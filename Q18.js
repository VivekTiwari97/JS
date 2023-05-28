// 18. Write a program which tells the number of days in a month, now consider leap year.

let getd= (month,year)=>{
    return new Date(year,month,0).getDate()
}


let final=getd(2,2023);
console.log(final)

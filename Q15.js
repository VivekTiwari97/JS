// Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let studentScore= 80
if(studentScore>=80){
    console.log("A");
}
else if(studentScore>=70){
    console.log("B");
}
else if(studentScore>=60){
    console.log("C");
}
else if(studentScore>=50){
    console.log("D");
}
else{
    console.log("Fail");
}
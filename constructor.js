// this is the object creation program using a function 
//  ill create 2 onbjects using javascript 
function student(name,standard,age){ 
    this.name=name;
    this.standard=standard;
    this.age=age;  
}
let studentOne=new student("Aadit",11,16);
let studentTwo=new student("Chiku",1,5);
// this is a better way to create objects in javascript rather than using so many lines of code 
// gotta reasearch about this ternary operator thing
// if(2>1)
// ?console.log("true")
// :console.log("false")
let teacher={ 
    name:"yolo",
    age:99,
    goodAtTeaching:false 
};

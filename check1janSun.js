console.log("in this code we will be checking how")
console.log("sunday are there on jan 1 from 2014-2050")
let count=0;
for(let year=2014;year<=2050;year++){ 
    let d=new Date(year ,0 ,1);
    if(d.getDay() ===0){ 
        count+=1;
    }
}
console.log(count+'many sundays')

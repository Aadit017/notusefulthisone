let basicArray=[1,2,3,4,5]
function clone(basicArray){ 
    let arr=[]
    for(let i=0;i<basicArray.length;i++){ 
        arr.push(basicArray[i]);
    }
return arr
}
console.log(clone(basicArray))
// function doubleIt(num){
//     return num*2;
// }
// const doubleIt=function(num){
//     return num*2;
// }

const doubleIt=num=>num*2;
const add=(x,y)=>x+y;
const give5=()=>5;
const DoMath =(x,y)=>{
    const sum= x+y;
    const diff =x-y;
    const result=sum*diff;
    return result;
}

const retult=add(5,7);
const result2=give5();
console.log(result2);
console.log(retult);
const result3=DoMath(7,5);
console.log(result3);
// function sum(a,b){
    
//     return x+y;
// }
// let x=+prompt("x");
//     let y=+prompt("y");
//     console.log(sum(x,y));
// 
// function infint(){
//     let x=10;
//     i=11;
//     while(i<10){
//         sum+=i;
//      i++;
//     }
// }

// function randomimnmax(a,b){
//    return Math.random(a,b)*(b-a+1)+a;
// }
// console.log(randomimnmax(5,10));
// let obj1={
//     color:"read"
// };
// let obj2={
//     color:"read"
// }
// let cbfun=function(){
//   return dan;
// }
// function ancnn(obj1,obj2){
// if(obj1.color==obj2.color){
//     return true;

// }
// else{
//     false;
// }
// }
// console.log(ancnn(obj1,obj2));

let x=[1,2,3,4,5,6,0];
//x.forEach((val)=>console.log(val*2));
//let m=x.filter(val=>val%2==0?val:null);

//let n=x.reduce((val,sum)=> sum+=val);
let n=x.reduce((val,pro)=>pro=pro*val,1)

console.log(n);
//console.log(m);




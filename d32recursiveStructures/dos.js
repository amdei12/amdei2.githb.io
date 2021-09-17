// function multiplyEvens(...more){
//    let x=1;
//      for (let i = 0; i < more.length; i++) {
//          if(more[i]%2==0){
//         x=x*more[i];
//     }

//     }
//     return x;

// }




// console.log(multiplyEvens(1, 6, 3, 4, 17, 2));
a = [1,2,3];  
// b = "dog";  
// c = [42, "cat"];
// function abc(x,y,z){
//     return x.concat(y,z);
    
// }
// console.log(abc(a,b,c));
//  function abc(x) {
// let b=[...x];
// return b;
    
// }
// console.log(abc(a));
/*
Write a function, makeCounter() that declares a local variable, count, and 
another local variable, innerFunc,  innerFunc will increment the count 
variable.*/
function makeCounter(){
let count=0;
    function inerfact(){
        return ++count;
    }
    return inerfact();
  }
  let a=new makeCounter();

  console.log(makeCounter());
  console.log(makeCounter());
  console.log(makeCounter());
   

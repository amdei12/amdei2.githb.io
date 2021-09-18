function abc(){
    let count=0;
     return ()=> count++;
    }


let cou1=abc();
let con2=abc();

console.log(abc());






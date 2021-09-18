// function abc(num,i,sum){

// if((num==0)||(sum>=num)){
//     return sum;
// }else{
//     sum+=(i*i);
//     return abc(num, i+1,sum);
// }

// }
// console.log(abc(20,1,0));
let node={
           val:3,
           next:{
               val:5,
               next:{
                   val:4,
                   next:null,
               }
           }
        }
    





function rec(a){
    if(a.next==null){
        return null;
    }
    else {
        console.log(a.valu)
        return rec(a.nex);
    }
}
console.log(rec(node));
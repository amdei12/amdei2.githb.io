// st1={
//     id:"s101",
//     answers:  [1, 1, 2,4]
// }
// st2={
//     id:"s102",
//     answers:[2, 1, 2,2]

// }
// st3={
//     id:"s203",
//     answers:[3, 1, 3,4] 
// }
// let answer=[3,1,2,4];
// let arr=[st1,st2,st3];
// function resu(stu,anse){
//      let mark=0;
//      for(let i=0;i<anse.length;i++){
//          if(stu[i]==anse[i]){
//              mark++;
//          }
//      }
//     return mark;
// }
// function result(sttarr,asarr){
//     for(let p of sttarr ){
//     let studenc=resu(sttarr.answers,asarr);
//     let grad=[p.id]=studenc;
// }
// return grad;
// }
// console.log(result(arr,answer));
const gradeReport = { s101: 3, s102: 2, s103: 3 }; 
 function calaava(num){
     let count=0;
     let mark=0;
     for(let key in num){
    sum+=key;
    count++
     }
 return sum/count;
    
}
console.log(calaava(gradeReport));
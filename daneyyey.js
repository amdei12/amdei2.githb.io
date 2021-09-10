let student1={id:"s101",ans:['a','a','a','a']};
let student2={id:"s101",ans:['a','b','d','d']};
let student3={id:"s102",ans:['a','a','c','d']};
let arr=[student1,student1,student1];
let cor=['a','a','a','a']
function mark(stud,cor){
    let total=0;
    for(let key in stud){
            for(let i=0;i<stud[key].length;i++){
                let x=stud[key][i];
                y=cor[i];
                if(x==y){
                    total++;
                }
            }
        }
    

return total;

}
function stotal(a,cor){
    let arr=[];
    for(let i=0;i<a.length;i++){
        res= mark(a[i],cor);
        arr[i]=res;
        
    }
return arr;

}
console.log(stotal(arr,cor));
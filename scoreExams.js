const { count } = require("console");

let m =[[1,1,2,4],[2,1,2,2],[3,1,3,4]]
let n=[3,1,2,4];

function scoreExams(a,b){
    let c=[];
    let coun=0;
    let s=0;
    for(let i=0;i<a.length;i++){
      let v=0;
        for(let j=0;j<a[i].length;j++){
            if(a[i][j]==b[s]){
               coun++;
               s++
            }
            else{
                s++;
                count;
            }
        }
            c[i]=coun
        
            s=0;
          coun=0
            
            
        
    }
    return c;
}
console.log(scoreExams(m,n))
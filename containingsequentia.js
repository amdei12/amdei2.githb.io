function dimensionalaArraycontainingSequentia(a,b){
   let m=[a][b];
   let x=0;
    for(let i=0;i<a;i++){
        for(let j=0;j<b;j++){
       m[[i,j]=x;
         x++;
        }

    }
    return m;
}
console.log(dimensionalaArraycontainingSequentia(2,2));
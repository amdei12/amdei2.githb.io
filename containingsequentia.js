function dimensionalaArraycontainingSequentia(a,b){
   let arr=[a][b];
   let x=0;
    for(let i=0;i<a;i++){

        for(let j=0;j<b;j++){
       arr[i][j]=1;
         x=x+1;
        }

    }
    return arr;
}
console.log(dimensionalaArraycontainingSequentia(2,2));
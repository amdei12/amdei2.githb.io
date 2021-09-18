function power(m,n){
    let result=1;
    if((n==0)||(n==1)){
        return result;
    }
    else{
        return result*m*power(m,n-1);
        
    }
}
console.log(power(3,3));
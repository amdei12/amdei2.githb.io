// function addTo(n)
// {
//     if (n == 0)
//         return 0;

//     return n + addTo(n - 1);
// }
// console.log(addTo(10));
// function fatoral(n){
//     if(n==1) 
//     return 1;

//          return n * fatoral(n-1);
        
//     }



// console.log(fatoral(10));
// function powerNo(n, m)
// {
//     if(m==0){
//      return 1;
//      if(m==1)
//      return n;
//      return n * powerNo(n, m-1);
//     }
// }
// console.log(powerNo(6,2));
function cxttt(st,a,count){
    if(st==" "){
        return count
    }
    if(st.charAt(0)==a){
        count++;
        return count+cxttt(st.substring,a,count)
    }else{
        return cxttt(st.substring,a,count);

    }
}
console.log(cxttt("daniel",1,0));
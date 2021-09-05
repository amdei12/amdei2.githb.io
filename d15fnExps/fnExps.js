module.exports = {double, times100, myMap }
function double(num){
    return 2*num;
}

function times100(num){
    return num*100;
}
  
  

  
  function myMap(func,arr){
      const newarr=new Array(arr.length);
      let m=att.length;
      for(let i=0;i<m;i++){
          newarr[i]=func(arr[i])
      }
      return newarr;
      
}
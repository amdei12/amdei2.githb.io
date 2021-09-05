module.exports = {double, times100, myMap }

  let double = (num) => 2*num;


  let times100 = (num)=>num*100;
  
  

  
  function myMap(func,arr){
      let newarr=[];
      for(let i=0;i<arr.length;i++){
          newarr[i]=fumc(arr[i])
      }
      return newarr;
      
}
module.exports = {double, times100, myMap }

  let double = (num) => 2*num;


  let times100 = (num)=>num*100;
  
  

  
  function myMap(arr,double){
      let x=null;
    if(double(num)!=null){
        x=double(num);
        arr[arr.length]=x;
    }
    
    return arr;
}
module.exports = {double, times100, myMap }
  function double(num){
      return num*2;
  }

  function times100(num){
      return num*100;
  }
  function myMap(arr){
      arr[arr.length]=double(num);
      arr[arr.length]=times100(num);
  }
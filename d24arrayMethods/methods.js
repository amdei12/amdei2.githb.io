"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let aun=arr.filter(function(val){
        if((val>a)&&(val<b)){
            return val;
       }
      });
      return aun;
  }

 
  function filterRangeInPlace(arr, a, b) {
    let aun=arr.filter(function(val){
        if((val>a)&&(val<b)){
            return val;
       }
      });
      return aun.sort();

  }
 

  function Calculator() {
    ()=>{a+b};
      ()=>{a-b};
       ()=>{a*b};
       ()=>{a**b};
      }
  

  function unique(arr) {
    for (let str of arr) {
        if (!result.includes(str)) {
          result.push(str);
        }
      }
    
      return result;
    
  }


  function groupById(array) {
      let sorta=array.sort(function(a,b){
          retuen (parseInt(a.id)-parseInt(a.id))
      });
      return sorta;
  }
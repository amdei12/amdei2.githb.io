"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
    
  let x=arr.length
       return ((x)=>{
            if(x>0){
                return true
            }else {
                return false;
            }
        });
        
    }

let arr=[1,2,3,4]
        console.log(inArray(arr));


/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
    
    return (()=> arr.filter(key=>key>low&&key<high?key:null));
    
  
}


/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */

function comper (arr){
  if(arr[0].fieldName>arr[1].fieldName){
    return 1;

  }else 
  {
    return -1;
  }

}
function byField(fieldName){
    return arr.sort(comper(nameSortedAnswer, nameSortedKey));
}
        



/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {

  }

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...
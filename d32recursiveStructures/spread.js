"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests


let a=[1,2,3,4];
let b=[3,4,5]
function copyArray(arr){
  let arr2=[...arr]
  return arr2;
}

function concat(arr1, arr2){
let arr3=arr1.concat(arr2);
return arr3;

}

function findMin(...numbers) {


    return Math.min(...numbers) ;
}

function combineObjs(obj1, obj2){
    let c=concat(obj1, obj2);
    return c;

}
